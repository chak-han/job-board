export function saveJobs(jobs) {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}
export function saveCounter(counter) {
  localStorage.setItem("counter", JSON.stringify(counter));
}

export function loadJobs() {
  return JSON.parse(localStorage.getItem("jobs")) ?? [];
}
export function loadCounter() {
  return JSON.parse(localStorage.getItem("counter")) ?? 0;
}
