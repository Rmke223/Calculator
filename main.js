const makeElement = (tag, className, id, innerText = "") => {
    let element = document.createElement(tag);
    element.setAttribute('class', className);
    element.setAttribute('id', id);
    element.innerText = innerText;
    return element;
}
var arr = []
var currentNum = ""
var lastNum = ""
var op = ""
var disp = "0"
var total = 0
var state = 0

function init() {
    const currentDiv = document.getElementById("main");
    const h1 = document.createElement("h1");
    h1.innerText = "Calculator";
    currentDiv.appendChild(h1);
    const display = document.createElement("div");
    display.setAttribute("class", "col-12 border text-right mb-4");
    display.setAttribute("id", "booty");
    display.innerHTML = disp;
    currentDiv.appendChild(display);
    const topRow = makeElement("div", "row", "topRow", "");
    currentDiv.appendChild(topRow);
    const fullClearBTN = makeElement("button", "col-6 border bg-success text-primary", "fullClearBTN", "C");
    fullClearBTN.setAttribute("onclick", "fullClear();");
    topRow.appendChild(fullClearBTN);
    const backBTN = makeElement("button", "col-3 border bg-success text-primary", "backBTN", "Back");
    backBTN.setAttribute("onclick", "back();");
    topRow.appendChild(backBTN);
    const divBTN = makeElement("button", "col-3 border bg-danger text-primary", "/", "/");
    divBTN.setAttribute("onclick", "operators(this.id)");
    topRow.appendChild(divBTN);
    const secondRow = makeElement("div", "row", "secondRow", "");
    currentDiv.appendChild(secondRow);
    const nineBTN = makeElement("button", "col-3 border bg-primary text-success", "9", "9");
    nineBTN.setAttribute("onclick", "numbers(this.id);");
    secondRow.appendChild(nineBTN);
    const eightBTN = makeElement("button", "col-3 border bg-primary text-success", "8", "8");
    eightBTN.setAttribute("onclick", "numbers(this.id);");
    secondRow.appendChild(eightBTN);
    const sevenBTN = makeElement("button", "col-3 border bg-primary text-success", "7", "7");
    sevenBTN.setAttribute("onclick", "numbers(this.id)");
    secondRow.appendChild(sevenBTN);
    const multiplyBTN = makeElement("button", "col-3 border bg-danger text-primary", "X", "X");
    multiplyBTN.setAttribute("onclick", "operators(this.id);");
    secondRow.appendChild(multiplyBTN);
    const thirdRow = makeElement("div", "row", "thirdRow", "");
    currentDiv.appendChild(thirdRow);
    const sixBTN = makeElement("button", "col-3 border bg-primary text-success", "6", "6");
    sixBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(sixBTN);
    const fiveBTN = makeElement("button", "col-3 border bg-primary text-success", "5", "5");
    fiveBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(fiveBTN);
    const fourBTN = makeElement("button", "col-3 border bg-primary text-success", "4", "4");
    fourBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(fourBTN);
    const minusBTN = makeElement("button", "col-3 border bg-danger text-primary", "-", "-");
    minusBTN.setAttribute("onclick", "operators(this.id);");
    thirdRow.appendChild(minusBTN);
    const fourthRow = makeElement("div", "row", "fourthRow", "");
    currentDiv.appendChild(fourthRow);
    const threeBTN = makeElement("button", "col-3 border bg-primary text-success", "3", "3");
    threeBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(threeBTN);
    const twoBTN = makeElement("button", "col-3 border bg-primary text-success", "2", "2");
    twoBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(twoBTN);
    const oneBTN = makeElement("button", "col-3 border bg-primary text-success", "1", "1");
    oneBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(oneBTN);
    const plusBTN = makeElement("button", "col-3 border bg-danger text-primary", "+", "+");
    plusBTN.setAttribute("onclick", "operators(this.id);");
    fourthRow.appendChild(plusBTN);
    const bottomRow = makeElement("div", "row", "bottomRow", "");
    currentDiv.appendChild(bottomRow);
    const zeroBTN = makeElement("button", "col-6 border bg-primary text-success", "0", "0");
    zeroBTN.setAttribute("onclick", "numbers(this.id);");
    bottomRow.appendChild(zeroBTN);
    const decimalBTN = makeElement("button", "col-3 border bg-primary text-success", ".", ".");
    decimalBTN.setAttribute("onclick", "numbers(this.id);");
    bottomRow.appendChild(decimalBTN);
    const equalBTN = makeElement("button", "col-3 border bg-danger text-primary", "equalBTN", "=");
    equalBTN.setAttribute("onclick", "equal();");
    bottomRow.appendChild(equalBTN);
}

function updateDisplay() {
    document.getElementById("booty").innerHTML = disp
}

function numbers(id) {
    if (state == 0) {
        arr.push(id)
        currentNum = arr.join("")
        disp = currentNum
        updateDisplay();
    }
    else {
        arr.push(id)
        lastNum = arr.slice(2, arr.length).join("")
        var yeet = (arr.length - 2)
        for (i = 0; i < yeet; i++) {
            arr.pop()
        }
        arr.push(lastNum)
        disp = lastNum
        updateDisplay();
    }
    console.log(arr)
}
function operators(id) {
    if (state == 0) {
        var dab = arr.join("")
        for (i = 0; i <= arr.length; i++) {
            arr.pop()
        }
        console.log(arr)
        arr.push(dab)
        arr.push(id)
        state++
    }
    else if (state == 1) {
        arr.push(id)
        console.log(arr)
    }
}
function equal() {
    if (arr[1] == "+") {
        var rawr = parseInt(currentNum)
        var XD = parseInt(lastNum)
        total = (XD + rawr)
        disp = total
        updateDisplay()
        for (i = 0; i <= arr.length + 1; i++) {
            arr.pop()
        }
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "-") {
        var rawr = parseInt(currentNum)
        var XD = parseInt(lastNum)
        total = (rawr - XD)
        disp = total
        updateDisplay()
        for (i = 0; i <= arr.length + 1; i++) {
            arr.pop()
        }
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "X") {
        var rawr = parseInt(currentNum)
        var XD = parseInt(lastNum)
        total = (rawr * XD)
        disp = total
        updateDisplay()
        for (i = 0; i <= arr.length + 1; i++) {
            arr.pop()
        }
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "/") {
        var rawr = parseInt(currentNum)
        var XD = parseInt(lastNum)
        total = (rawr / XD)
        disp = total
        updateDisplay()
        for (i = 0; i <= arr.length + 1; i++) {
            arr.pop()
        }
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
}

function fullClear() {
    console.log("reeee")
    for (i = 0; i <= arr.length + 1; i++) {
        arr.pop()
    }
    console.log(arr)
    currentNum = ""
    lastNum = ""
    disp = "0"
    total = 0
    state = 0
    updateDisplay()
}
function back(){
    arr.pop()
    console.log(arr)
    updateDisplay()

}

