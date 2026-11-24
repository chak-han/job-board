const btnEl = document.querySelector(".btn");
const cpyEl = document.querySelector(".cpy");
const dptEl = document.querySelector(".dpt");
const ulEl = document.querySelector("ul");

const contentEl = document.querySelector(".content");
btnEl.addEventListener("click", () => {
  const liEl = document.createElement("li");
  liEl.textContent = cpyEl.value + " " + dptEl.value + " " + "저장 완료";
  ulEl.append(liEl);
});
