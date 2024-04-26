const tableBody = document.querySelector(".table__body");
const searchBox = document.querySelector(".searchBox");
let sortPrice = document.querySelector(".tb__price");
let sortDate = document.querySelector(".tb__date");
let sortDefault = document.querySelector(".tb__radif");
const btn = document.querySelector(".btn");
const trasactions = document.querySelector(".trasactions");
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
let searchBoxValue = "";

btn.addEventListener("click", (e) => {
  e.target.classList.add("hidden");
  trasactions.classList.remove("hidden");
  tableBody.innerHTML = "";
  fetch("http://localhost:3000/transactions")
    .then((response) => response.json())
    .then((json) => {
      json.map((t) => {
        tableBody.innerHTML += `
        <tr>
          <td>${t.id}</td>
          <td class=${t.type === "افزایش اعتبار" ? "priceUp" : "priceDown"}>${
          t.type
        }</td>
          <td>${t.price}</td>
          <td>${t.refId}</td>
          <td>${new Date(t.date)
            .toLocaleString("fa")
            .toString()
            .replace(", ", " ساعت ")}</td>
        </tr>
      `;
      });
    })
    .then(() => {
      sortDate = document.querySelector(".tb__price");
      console.log(sortDate);
    });
});

searchBox.addEventListener("input", (e) => {
  const value = e.target.value;
  searchBoxValue = value;
  tableBody.innerHTML = "";

  fetch("http://localhost:3000/transactions?refId_like=" + value)
    .then((response) => response.json())
    .then((json) => {
      json.map((t) => {
        tableBody.innerHTML += `
          <tr>
            <td>${t.id}</td>
            <td class=${t.type === "افزایش اعتبار" ? "priceUp" : "priceDown"}>${
          t.type
        }</td>
            <td>${t.price}</td>
            <td>${t.refId}</td>
            <td>${new Date(t.date)
              .toLocaleString("fa")
              .padStart(2, "0")
              .toString()
              .replace(", ", " ساعت ")}</td>
          </tr>
        `;
      });
    });
});

sortPrice.addEventListener("click", (e) => {
  let exist;
  let query;
  if (e.target.tagName === "TD") {
    e.target.children[0].classList.toggle("rotateUp");
    e.target.children[0].classList.toggle("rotateDown");
    exist = e.target.children[0].classList[0];
  } else {
    e.target.classList.toggle("rotateUp");
    e.target.classList.toggle("rotateDown");
    exist = e.target.classList[0];
  }
  searchBoxValue.length > 0? query = "&refId_like=" + searchBoxValue:query="";
  tableBody.innerHTML = "";
  fetch(
    `http://localhost:3000/transactions?_sort=${
      exist === "rotateUp" ? "price&_order=asc" : "price&_order=desc"
    }${query}`
  )
    .then((response) => response.json())
    .then((json) => {
      json.map((t) => {
        tableBody.innerHTML += `
          <tr>
            <td>${t.id}</td>
            <td class=${t.type === "افزایش اعتبار" ? "priceUp" : "priceDown"}>${
          t.type
        }</td>
            <td>${t.price}</td>
            <td>${t.refId}</td>
            <td>${new Date(t.date)
              .toLocaleString("fa")
              .padStart(2, "0")
              .toString()
              .replace(", ", " ساعت ")}</td>
          </tr>
        `;
      });
    });
  // console.log(e.target.children[0].classList[0]);
});

sortDate.addEventListener("click", (e) => {
  let exist;
  if (e.target.tagName === "TD") {
    e.target.children[0].classList.toggle("rotateUp");
    e.target.children[0].classList.toggle("rotateDown");
    exist = e.target.children[0].classList[0];
  } else {
    e.target.classList.toggle("rotateUp");
    e.target.classList.toggle("rotateDown");
    exist = e.target.classList[0];
  }
  let query;
  searchBoxValue.length > 0? query = "&refId_like=" + searchBoxValue:query="";
  // console.log(exist)
  tableBody.innerHTML = "";
  fetch(
    `http://localhost:3000/transactions?_sort=${
      exist === "rotateUp" ? "date&_order=asc" : "date&_order=desc"
    }${query}`
  )
    .then((response) => response.json())
    .then((json) => {
      json.map((t) => {
        tableBody.innerHTML += `
          <tr>
            <td>${t.id}</td>
            <td class=${t.type === "افزایش اعتبار" ? "priceUp" : "priceDown"}>${
          t.type
        }</td>
            <td>${t.price}</td>
            <td>${t.refId}</td>
            <td>${new Date(t.date)
              .toLocaleString("fa")
              .padStart(2, "0")
              .toString()
              .replace(", ", " ساعت ")}</td>
          </tr>
        `;
      });
    });
});

sortDefault.addEventListener("click", (e) => {
  let exist;
  if (e.target.tagName === "TD") {
    e.target.children[0].classList.toggle("rotateUp");
    e.target.children[0].classList.toggle("rotateDown");
    exist = e.target.children[0].classList[0];
  } else {
    e.target.classList.toggle("rotateUp");
    e.target.classList.toggle("rotateDown");
    exist = e.target.classList[0];
  }

  let query;
  searchBoxValue.length > 0? query = "&refId_like=" + searchBoxValue:query="";
  console.log(exist);
  tableBody.innerHTML = "";
  fetch(
    `http://localhost:3000/transactions?_sort=${
      exist === "rotateUp" ? "id&_order=asc" : "id&_order=desc"
    }${query}`
  )
    .then((response) => response.json())
    .then((json) => {
      json.map((t) => {
        tableBody.innerHTML += `
          <tr>
            <td>${t.id}</td>
            <td class=${t.type === "افزایش اعتبار" ? "priceUp" : "priceDown"}>${
          t.type
        }</td>
            <td>${t.price}</td>
            <td>${t.refId}</td>
            <td>${new Date(t.date)
              .toLocaleString("fa")
              .padStart(2, "0")
              .toString()
              .replace(", ", " ساعت ")}</td>
          </tr>
        `;
      });
    });
});
