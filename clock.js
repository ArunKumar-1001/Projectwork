let body = document.getElementsByClassName("body")[0];
body.style.color = "red";
body.style.listStyle = "none";
body.style.display = "flex";
body.style.flexDirection = "row";
body.style.justifyContent = "center";
// body.style.fontSize = "50px";
body.style.height = "100vh";
body.style.alignItems = "center";

let container = document.getElementsByClassName("container")[0];
container.style.display = "flex";
container.style.gap = "50px";
container.style.fontSize = "50px";

let hrs = document.getElementById("hrs");
hrs.style.color = "red";

let min = document.getElementById("min");
min.style.color = "blue";

let sec = document.getElementById("sec");
sec.style.color = "orange";

setInterval(() => {
  let date = new Date();
  hrs.innerText = date.getHours();
  min.innerText = date.getMinutes();
  sec.innerText = date.getSeconds();
}, 1000);
