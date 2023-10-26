function randomColorFun() {
    let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
    let randomValue;

    function button() {
        let random = Math.floor(Math.random() * bgColorsArray.length);
        randomValue = random, bgColorsArray[random];
        document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[randomValue];
    }
    let buttonEl = document.getElementById("button");
    buttonEl.onclick = function() {
        button();
    };
}