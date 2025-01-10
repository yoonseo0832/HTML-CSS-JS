window.onload()
    let applyButton = document.getElementById("apply-button");

    let colorBox = document.getElementById('color-box');

    let colorInput = document.getElementById('color-input');

    let message = document.getElementById('message');

    applyButton.onclick = function () {
        let color = colorInput.value;
        colorBox.style.backgroundColor = color;
        message.innerText = "현재 배경색은 " + color + " 입니다";
        message.style.color = color;
    };
