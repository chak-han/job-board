import { saveJobs, saveCounter, loadCounter, loadJobs } from "./storage.js";

const cpyEl = document.querySelector(".cpy");
const dptEl = document.querySelector(".dpt");
const ulEl = document.querySelector("ul");
const cpyNameEl = document.querySelector(".companyName");
const jobFormEl = document.querySelector(".jobForm");
const undoBtn = document.querySelector(".undoBtn");

let counter = loadCounter();
let jobs = loadJobs();
let lastDeleted = null;

render();

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
  saveJobs(jobs);
  saveCounter(counter);
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
    delBtnEl.dataset.id = job.id;
  });
}

ulEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const index = jobs.findIndex((n) => n.id === id);
  lastDeleted = { job: jobs[index], index };
  jobs = jobs.filter((n) => n.id !== id);
  saveJobs(jobs);
  render();
});

undoBtn.addEventListener("click", () => {
  if (!lastDeleted) return;
  jobs.splice(lastDeleted.index, 0, lastDeleted.job);
  lastDeleted = null;
  saveJobs(jobs);
  render();
});

cpyNameEl.addEventListener("input", () => {
  render();
});
