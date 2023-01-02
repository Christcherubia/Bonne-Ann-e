const startMaker = () => {
  const start = document.createElement("span");
  start.classList.add("start");
  document.body.appendChild(start);

  const size = Math.random() * 5 + 15 + "px";
  start.style.height = size;
  start.style.width = size;

  start.style.top = Math.random() * 70 + 20 + "%";
  start.style.left = Math.random() * 70 + "%";

  const plusMinux = Math.random() > 0.5 ? 1 : -1;
  start.style.setProperty("--left", Math.random() * 100 + "%");
};

setInterval(startMaker, 1777);
