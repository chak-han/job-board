const btnEl = document.querySelector(".btn");
const cpyEl = document.querySelector(".cpy");
const dptEl = document.querySelector(".dpt");
const ulEl = document.querySelector("ul");

let counter = 0;
let jobs = [];

btnEl.addEventListener("click", () => {
  counter++;
  const job = {
    id: counter,
    company: cpyEl.value,
    position: dptEl.value,
  };
  jobs.push(job);
  render();
});

function render() {
  ulEl.innerHTML = "";

  jobs.forEach((job) => {
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
