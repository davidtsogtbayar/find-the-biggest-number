let input1 = "";
let input2 = "";
let findmax = "";
let result = "";

const input1Input = document.getElementById("first-number");
input1Input.addEventListener("input", function () {
  input1 = event.target.value;
});

const input2Input = document.getElementById("second-number");
input2Input.addEventListener("input", function () {
  input2 = event.target.value;
});

const resultButton = document.getElementById("result");
resultButton.addEventListener("click", function () {
  if (Number(input1) > Number(input2)) {
    const answer = document.getElementById("answer");
    answer.innerHTML = input1 + " is the winner";
  } else if (Number(input1) === Number(input2)) {
    answer.innerHTML = "its a draw!";
  } else {
    const answer = document.getElementById("answer");
    answer.innerHTML = input2 + " is the winner";
  }
});
