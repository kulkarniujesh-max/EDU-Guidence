import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const configured = Object.values(firebaseConfig).every((value) =>
  typeof value === "string" && value && !value.startsWith("YOUR_")
);
const auth = configured ? getAuth(initializeApp(firebaseConfig)) : null;

function setAuthStatus(message, isError = false) {
  const status = document.getElementById("authStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
  status.classList.toggle("success", !isError && Boolean(message));
}

function updateAuthNav(user) {
  const login = document.querySelector('[data-auth-link="login"]');
  const signup = document.querySelector('[data-auth-link="signup"]');
  const profile = document.querySelector('[data-auth-user="profile"]');
  const logout = document.querySelector('[data-auth-action="logout"]');
  if (login) login.hidden = Boolean(user);
  if (signup) signup.hidden = Boolean(user);
  if (profile) {
    profile.hidden = !user;
    if (user) profile.textContent = `Hi, ${user.displayName || user.email}`;
  }
  if (logout) {
    logout.hidden = !user;
    logout.onclick = async (event) => {
      event.preventDefault();
      try {
        await signOut(auth);
        window.location.href = "index.html";
      } catch {
        setAuthStatus("Unable to sign out right now. Please try again.", true);
      }
    };
  }
}

function messageForError(error) {
  const messages = {
    "auth/email-already-in-use": "An account with this email already exists.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/weak-password": "Choose a password with at least 8 characters.",
    "auth/too-many-requests": "Too many attempts. Wait a little and try again.",
    "auth/network-request-failed": "Could not connect. Check your internet and try again.",
    "auth/user-disabled": "This account is disabled. Contact the site administrator.",
    "auth/operation-not-allowed": "This sign-in method is not enabled for this project.",
    "auth/popup-closed-by-user": "Google sign-in was closed before it finished.",
    "auth/unauthorized-domain": "This site domain is not authorized in Firebase Authentication settings."
  };
  return messages[error.code] || "Something went wrong. Please try again.";
}

function attachForm(form, action) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const fields = new FormData(form);
    if (button) button.disabled = true;
    setAuthStatus("Please wait...");

    try {
      const email = String(fields.get("email") || "").trim();
      const password = String(fields.get("password") || "");
      if (action === "signup") {
        const name = String(fields.get("name") || "").trim();
        if (!name) {
          setAuthStatus("Enter your name to create an account.", true);
          return;
        }
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(credential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setAuthStatus(action === "signup" ? "Account created. Redirecting..." : "Login successful. Redirecting...");
      window.setTimeout(() => { window.location.href = "index.html"; }, 700);
    } catch (error) {
      setAuthStatus(messageForError(error), true);
    } finally {
      if (button) button.disabled = false;
    }
  });
}

function attachGoogleButton(button) {
  if (!button) return;
  button.addEventListener("click", async () => {
    button.disabled = true;
    setAuthStatus("Connecting to Google...");
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      setAuthStatus("Signed in with Google. Redirecting...");
      window.setTimeout(() => { window.location.href = "index.html"; }, 700);
    } catch (error) {
      setAuthStatus(messageForError(error), true);
    } finally {
      button.disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!configured) {
    updateAuthNav(null);
    if (document.getElementById("loginForm") || document.getElementById("signupForm")) {
      setAuthStatus("Finish the Firebase setup to enable sign-in. See firebase-config.js.", true);
      document.querySelectorAll("#loginForm input, #signupForm input, #loginForm button, #signupForm button, #googleSignInButton")
        .forEach((control) => { control.disabled = true; });
    }
    return;
  }

  onAuthStateChanged(auth, updateAuthNav);
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  attachGoogleButton(document.getElementById("googleSignInButton"));

  document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = document.getElementById(toggle.dataset.passwordToggle);
      if (!input) return;
      const reveal = input.type === "password";
      input.type = reveal ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(reveal));
      toggle.textContent = reveal ? "Hide password" : "Show password";
    });
  });

  document.getElementById("resetPasswordButton")?.addEventListener("click", async () => {
    const emailInput = document.getElementById("email");
    const email = emailInput?.value.trim();
    if (!email) {
      setAuthStatus("Enter your email address first, then choose Forgot password?", true);
      emailInput?.focus();
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setAuthStatus("If an account exists for that address, a password reset email is on its way.");
    } catch (error) {
      setAuthStatus(messageForError(error), true);
    }
  });

  if (loginForm) attachForm(loginForm, "login");
  if (signupForm) attachForm(signupForm, "signup");
});
