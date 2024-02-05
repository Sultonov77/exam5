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
// api information
const row = document.querySelector(".cards");
const BASE_URL = "https://openlibrary.org/people/mekBot/books";

const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/currently-reading.json`);

    if (!res.ok) throw new Error(`Could not fetch data from ${BASE_URL}`);

    return res.json();
  } catch (error) {
    console.error(error.message);
  }
};
fetchData();
const appendCard = () => {
  fetchData().then((books) => {
    const bookList = books.reading_log_entries.slice(7, 13);
    const card = document.createElement("div");
    bookList.forEach((books) => {
      const data = books.work;
      row.innerHTML += `
      <div class="card">
                  <img src="./assets/images/book1.png" alt="book" />
                  <h1>${data.title}</h1>
                  <p>${data.author_names}</p>
                  <p>${data.first_publish_year}</p>
                  <div class="book__buttons">
                    <button id="bookmark" type="click">
                      Bookmark
                    </button>
                    <button class="info__btn">More Info</button>
                  </div>
                  <button id="readbtn">Read</button>
                </div>
      `;
      row.appendChild(card);
      // read button works
      const readbtn = document.getElementById("readbtn");
      const readButtons = document.querySelectorAll('[id^="readbtn"]');
      readButtons.forEach(function (read) {
        read.addEventListener("click", function () {
          window.location.href = "single.html";
        });
      });
      // adding to bookmark
      const copyButtons = document.querySelectorAll("#bookmark");
      const copyContainer = document.querySelector(".hero__left");
      copyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const copiedData = document.createElement("div");
          copiedData.innerHTML = `<h2>${data.title}</h2>
    <img src="./assets/icons/book-icon.svg" alt="sdf"> <img src="./assets/icons/delete-icon.svg" alt="del"><p>${data.author_names}</p>`;
          copiedData.style.fontFamily = "rubik";
          copiedData.style.marginLeft = "26px";
          copiedData.style.color = "black";
          copyContainer.appendChild(copiedData);
        });
      });
    });
  });
};
appendCard();
