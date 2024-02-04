// Login page

// validation
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (/^\d+$/.test(password) && /[a-zA-z]/.test(username)) {
    window.location.href = "second.html";
  } else {
    alert("Password includes only numbers and Username includes only letters");
  }
}
// saved to local storage
localStorage.setItem("information", "username");
localStorage.setItem("information2", "password");

// Bookshelter page

// dark or light mode
const body = document.body;
const butttonDark = document.querySelector(".light__mode");
butttonDark.addEventListener("click", function () {
  body.classList.toggle("dark");
});
// adding to bookmark

const copyButtons = document.querySelectorAll(".bookmark__btn");
const copyContainer = document.querySelector(".hero__left");
copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const copiedData = document.createElement("div");
    copiedData.innerHTML = `<h1>Python</h1><p>David M. Beazley</p>`;
    copiedData.style.fontFamily = "rubik";
    copiedData.style.marginLeft = "26px";
    copiedData.style.color = "black";
    copyContainer.appendChild(copiedData);
  });
});
