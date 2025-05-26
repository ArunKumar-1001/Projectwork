function append(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
