// Set window.EDUGUIDANCE_API_BASE before loading this file when the API is
// hosted separately. Leave it empty when the API and site share an origin.
const API_BASE = (window.EDUGUIDANCE_API_BASE || "").replace(/\/$/, "");

function setAuthStatus(message, isError = false) {
  const status = document.getElementById("authStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
  status.classList.toggle("success", !isError && Boolean(message));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("eduguidance-user") || "null");
  } catch {
    localStorage.removeItem("eduguidance-user");
    localStorage.removeItem("eduguidance-token");
    return null;
  }
}

function updateAuthNav() {
  const user = getCurrentUser();
  const login = document.querySelector('[data-auth-link="login"]');
  const signup = document.querySelector('[data-auth-link="signup"]');
  const profile = document.querySelector('[data-auth-user="profile"]');
  const logout = document.querySelector('[data-auth-action="logout"]');
  if (login) login.hidden = Boolean(user);
  if (signup) signup.hidden = Boolean(user);
  if (profile) {
    profile.hidden = !user;
    if (user) profile.textContent = `Hi, ${user.name}`;
  }
  if (logout) {
    logout.hidden = !user;
    logout.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.removeItem("eduguidance-user");
      localStorage.removeItem("eduguidance-token");
      window.location.href = "index.html";
    }, { once: true });
  }
}

function attachAuthForm(form, endpoint, successMessage, redirectPath) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const payload = Object.fromEntries(new FormData(form).entries());
    if (button) button.disabled = true;
    setAuthStatus("Please wait...");
    try {
      const response = await fetch(`${API_BASE}/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setAuthStatus(data.message || "Authentication failed. Check that the API is configured.", true);
        return;
      }
      localStorage.setItem("eduguidance-token", data.token);
      localStorage.setItem("eduguidance-user", JSON.stringify(data.user));
      setAuthStatus(successMessage);
      window.setTimeout(() => { window.location.href = redirectPath; }, 700);
    } catch {
      setAuthStatus("Could not reach the authentication API. Check its URL and try again.", true);
    } finally {
      if (button) button.disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateAuthNav();
  const login = document.getElementById("loginForm");
  const signup = document.getElementById("signupForm");
  if ((login || signup) && !API_BASE && location.hostname.endsWith("github.io")) {
    setAuthStatus("Sign-in is unavailable until an authentication API is configured for this site.", true);
    document.querySelectorAll("#loginForm input, #signupForm input, #loginForm button, #signupForm button")
      .forEach((control) => { control.disabled = true; });
  }
  if (login) attachAuthForm(login, "login", "Login successful. Redirecting...", "index.html");
  if (signup) attachAuthForm(signup, "signup", "Account created. Redirecting...", "login.html");
});
