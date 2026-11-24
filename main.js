const btnEl = document.querySelector(".btn");
const cpyEl = document.querySelector(".cpy");
const dptEl = document.querySelector(".dpt");
const ulEl = document.querySelector("ul");

const jobs = [];

btnEl.addEventListener("click", () => {
  const job = { id: Date.now(), company: cpyEl.value, position: dptEl.value };
  jobs.push(job);
  render();
});

function render() {
  ulEl.innerHTML = "";

  jobs.forEach((job) => {
    const liEl = document.createElement("li");
    liEl.textContent = `${job.id} ${job.company} ${job.position}`;
    ulEl.append(liEl);
  });
}
