const cpyEl = document.querySelector(".cpy");
const dptEl = document.querySelector(".dpt");
const ulEl = document.querySelector("ul");
const cpyNameEl = document.querySelector(".companyName");
const jobFormEl = document.querySelector(".jobForm");

let counter = 0;
let jobs = [];

jobFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const company = cpyEl.value.trim();
  if (company === "") return;
  const position = dptEl.value.trim();
  if (position === "") return;
  counter++;
  const job = {
    id: counter,
    company, // 단축 속성 company: company
    position, // 단축 속성
  };
  jobs.push(job);
  render();
});

function render() {
  ulEl.innerHTML = "";

  const search = jobs.filter((n) => n.company.includes(cpyNameEl.value)); // "" 빈문자열도 true
  search.forEach((job) => {
    const liEl = document.createElement("li");
    const delBtnEl = document.createElement("button");
    delBtnEl.innerHTML = "삭제";
    liEl.textContent = `${job.id} ${job.company} ${job.position} `;
    liEl.append(delBtnEl);
    ulEl.append(liEl);
    delBtnEl.addEventListener("click", () => {
      jobs = jobs.filter((n) => n.id !== job.id);
      render();
    });
  });
}

cpyNameEl.addEventListener("input", () => {
  render();
});
