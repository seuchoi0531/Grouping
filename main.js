$(document).ready(function () {
    const table = document.getElementById("table");
    const mixButton = document.getElementById("mix-button");
    const numberOfGroup = document.getElementById("number-of-group");
    const input = document.getElementById("input");
    const separator = ',';
    let factorArray = [];
    mixButton.addEventListener("click", showTable);
    function showTable() {
        table.innerHTML = '';
        factorArray = [];
        let inputFactor = input.value;
        let tmp = '';
        for (let i = 0; i < inputFactor.length; i++) {
            if (inputFactor[i] == separator) {
                factorArray.push(tmp);
                tmp = '';
            } else
                tmp += inputFactor[i];
        }

        let totalNum = factorArray.length;
        if (inputFactor[inputFactor - 1] != separator)
            totalNum++;
        if (totalNum <= numberOfGroup.value)
            throw new error("the number of group is much more than factor");
        let totalRow = Math.floor(totalNum / numberOfGroup.value);
        factorArray = randomShuffleArray(factorArray);
        let str = "<table>";
        for (let i = 0; i < totalRow + 1; i++) {
            str += "<tr>";
            for (let j = 0; j < numberOfGroup.value; j++) {
                if (i == 0)
                    str += `<td>${j + 1}</td>`;
                else {
                    if (factorArray.length >= i * 3 + j - 2)
                        str += `<td>${factorArray[i * 3 + j - 3]}</td>`;
                    else
                        str += `<td></td>`;
                }
            }
            str += "</tr>";
        }
        table.innerHTML = str;
    }

    function randomShuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            // 0부터 i까지의 랜덤 인덱스 선택
            const j = Math.floor(Math.random() * (i + 1));
            
            // 요소 교환
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
});