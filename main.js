$(document).ready(function () {
  const table = document.getElementById("table");
  const mixButton = document.getElementById("mix-button");
  const input = document.getElementById("input");
  const separator = ",";
  let numberOfGroup = document.getElementById("number-of-group");
  let factorArray = [];
  mixButton.addEventListener("click", showTable);
  function showTable() {
    table.innerHTML = "";
    factorArray = [];
    let inputFactor = input.value;
    let tmp = "";
    for (let i = 0; i < inputFactor.length; i++) {
      if (inputFactor[i] == separator) {
        factorArray.push(tmp);
        tmp = "";
      } else tmp += inputFactor[i];
    }
    let totalNum = 0;
    if (inputFactor[inputFactor.length - 1] != separator) factorArray.push(tmp);
    totalNum = factorArray.length;
    if (totalNum <= numberOfGroup.value)
      throw new error("the number of group is much more than factor");
    let totalRow = Math.ceil(totalNum / numberOfGroup.value);
    factorArray = randomShuffleArray(factorArray);
    let str = "<table>";
    for (let i = 0; i < totalRow + 1; i++) {
      str += "<tr>";
      for (let j = 0; j < numberOfGroup.value; j++) {
        if (i == 0) str += `<td>${j + 1}</td>`;
        else {
          if (factorArray.length >= (i - 1) * numberOfGroup.value + j + 1)
            str += `<td>${factorArray[(i - 1) * numberOfGroup.value + j]}</td>`;
          else str += `<td></td>`;
        }
      }
      str += "</tr>";
    }

    table.innerHTML = str;
  }

  function randomShuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
});
