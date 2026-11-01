// navigation.js — Planora login / register navigation
(function () {
  "use strict";

  //  1. View navigation (login <-> register) 
  var views = {
    login: document.getElementById("login-view"),
    register: document.getElementById("register-view"),
  };
  var titles = {
    login: "Planora | Sign in",
    register: "Planora | Create account",
  };

  function getViewFromHash() {
    var name = location.hash.replace("#", "");
    return views[name] ? name : "login"; // unknown hash -> login
  }

  function clearErrors(section) {
    section.querySelectorAll(".error-message").forEach(function (el) {
      el.textContent = "";
    });
    section.querySelectorAll(".form-status").forEach(function (el) {
      el.textContent = "";
    });
    section.querySelectorAll("input").forEach(function (input) {
      input.classList.remove("invalid", "error");
      input.removeAttribute("aria-invalid");
    });
  }

  function showView(name, shouldFocus) {
    Object.keys(views).forEach(function (key) {
      var section = views[key];
      if (!section) return;
      var isActive = key === name;
      section.hidden = !isActive;
      if (!isActive) clearErrors(section);
    });

    document.title = titles[name];

    if (shouldFocus) {
      var firstInput = views[name].querySelector("input");
      if (firstInput) firstInput.focus();
    }
  }

  // Back/forward buttons and clicks on links like href="#register"
  window.addEventListener("hashchange", function () {
    showView(getViewFromHash(), true);
  });

  // Links with data-view="..." (works even if the hash is already the same)
  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-view]");
    if (!link) return;
    e.preventDefault();
    var name = link.getAttribute("data-view");
    if (!views[name]) return;
    if (location.hash !== "#" + name) {
      location.hash = name; // triggers hashchange
    } else {
      showView(name, true);
    }
  });

  // Show the correct view on first load (no autofocus, so mobile keyboards don't pop up)
  showView(getViewFromHash(), false);

  //  2. Theme toggle
  var themeBtn = document.getElementById("theme-toggle");

  function updateThemeLabel() {
    var isDark = document.documentElement.dataset.theme === "dark";
    if (themeBtn) {
      themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  if (themeBtn) {
    updateThemeLabel();
    themeBtn.addEventListener("click", function () {
      var next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      updateThemeLabel();
    });
  }

  // 3. Show / hide password 
   document.querySelectorAll(".toggle-password").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var input = document.getElementById(btn.dataset.target);
      if (!input) return;
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.setAttribute("aria-label", show ? "Hide password" : "Show password");
      var use = btn.querySelector("use");
      if (use) use.setAttribute("href", show ? "#icon-eye-off" : "#icon-eye");
    });
  });

  // 4. Twinkling stars background 
  var starsBox = document.getElementById("stars");
  if (starsBox) {
    for (var i = 0; i < 40; i++) {
      var star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--delay", (Math.random() * 5).toFixed(2) + "s");
      star.style.setProperty("--dur", (2 + Math.random() * 3).toFixed(2) + "s");
      star.style.setProperty("--size", (1 + Math.random() * 2).toFixed(1) + "px");
      starsBox.appendChild(star);
    }
  }
})();
