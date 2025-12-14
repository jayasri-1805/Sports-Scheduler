/* ---------------------------
   AUTH NAVIGATION (DEMO)
---------------------------- */

function login() {
  // Demo login (no backend yet)
  window.location.href = "dashboard.html";
}

function signup() {
  alert("Account created successfully!");
  window.location.href = "index.html";
}

function logout() {
  window.location.href = "index.html";
}

/* ---------------------------
   SPORTS MANAGEMENT (DEMO)
---------------------------- */

let sports = [];

function addSport() {
  const input = document.getElementById("sportName");
  if (!input || input.value.trim() === "") return;

  sports.push(input.value.trim());

  const list = document.getElementById("sportsList");
  list.innerHTML = sports.map(s => `<div>${s}</div>`).join("");

  input.value = "";
}
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}
