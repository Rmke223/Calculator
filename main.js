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
    display.setAttribute("class", "col-12 border text-right bg-secondary text-primary mb-4 display-2");
    display.setAttribute("id", "booty");
    display.setAttribute("style", "height: 100px;");
    display.innerHTML = disp;
    currentDiv.appendChild(display);
    const topRow = makeElement("div", "row", "topRow", "");
    currentDiv.appendChild(topRow);
    const fullClearBTN = makeElement("button", "col-6 border bg-success text-primary", "fullClearBTN", "C");
    fullClearBTN.setAttribute("onclick", "fullClear();");
    topRow.appendChild(fullClearBTN);
    const backBTN = makeElement("button", "backer col-3 border bg-success text-primary", "backBTN", "Back");
    backBTN.setAttribute("onclick", "back();");
    topRow.appendChild(backBTN);
    const divBTN = makeElement("button", "opz col-3 border bg-danger text-primary", "/", "/");
    divBTN.setAttribute("onclick", "operators(this.id)");
    topRow.appendChild(divBTN);
    const secondRow = makeElement("div", "row", "secondRow", "");
    currentDiv.appendChild(secondRow);
    const nineBTN = makeElement("button", "cell col-3 border bg-primary text-success", "9", "9");
    nineBTN.setAttribute("onclick", "numbers(this.id);");
    secondRow.appendChild(nineBTN);
    const eightBTN = makeElement("button", "cell col-3 border bg-primary text-success", "8", "8");
    eightBTN.setAttribute("onclick", "numbers(this.id);");
    secondRow.appendChild(eightBTN);
    const sevenBTN = makeElement("button", "cell col-3 border bg-primary text-success", "7", "7");
    sevenBTN.setAttribute("onclick", "numbers(this.id)");
    secondRow.appendChild(sevenBTN);
    const multiplyBTN = makeElement("button", "opz col-3 border bg-danger text-primary", "X", "X");
    multiplyBTN.setAttribute("onclick", "operators(this.id);");
    secondRow.appendChild(multiplyBTN);
    const thirdRow = makeElement("div", "row", "thirdRow", "");
    currentDiv.appendChild(thirdRow);
    const sixBTN = makeElement("button", "cell col-3 border bg-primary text-success", "6", "6");
    sixBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(sixBTN);
    const fiveBTN = makeElement("button", "cell col-3 border bg-primary text-success", "5", "5");
    fiveBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(fiveBTN);
    const fourBTN = makeElement("button", "cell col-3 border bg-primary text-success", "4", "4");
    fourBTN.setAttribute("onclick", "numbers(this.id);");
    thirdRow.appendChild(fourBTN);
    const minusBTN = makeElement("button", "opz col-3 border bg-danger text-primary", "-", "-");
    minusBTN.setAttribute("onclick", "operators(this.id);");
    thirdRow.appendChild(minusBTN);
    const fourthRow = makeElement("div", "row", "fourthRow", "");
    currentDiv.appendChild(fourthRow);
    const threeBTN = makeElement("button", "cell col-3 border bg-primary text-success", "3", "3");
    threeBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(threeBTN);
    const twoBTN = makeElement("button", "cell col-3 border bg-primary text-success", "2", "2");
    twoBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(twoBTN);
    const oneBTN = makeElement("button", "cell col-3 border bg-primary text-success", "1", "1");
    oneBTN.setAttribute("onclick", "numbers(this.id);");
    fourthRow.appendChild(oneBTN);
    const plusBTN = makeElement("button", "opz col-3 border bg-danger text-primary", "+", "+");
    plusBTN.setAttribute("onclick", "operators(this.id);");
    fourthRow.appendChild(plusBTN);
    const bottomRow = makeElement("div", "row", "bottomRow", "");
    currentDiv.appendChild(bottomRow);
    const zeroBTN = makeElement("button", "cell col-6 border bg-primary text-success", "0", "0");
    zeroBTN.setAttribute("onclick", "numbers(this.id);");
    bottomRow.appendChild(zeroBTN);
    const decimalBTN = makeElement("button", "cell col-3 border bg-primary text-success", ".", ".");
    decimalBTN.setAttribute("onclick", "numbers(this.id);");
    bottomRow.appendChild(decimalBTN);
    const equalBTN = makeElement("button", "fullsend col-3 border bg-danger text-primary", "equalBTN", "=");
    equalBTN.setAttribute("onclick", "equal();");
    bottomRow.appendChild(equalBTN);
    for (var i = 0; i < opz.length; i++) {
        opz[i].removeAttribute('onclick')
    }
    for (var i = 0; i < butt.length; i++) {
        butt[i].removeAttribute('onclick')
    }
   
    


}

var nums = document.getElementsByClassName("cell")
var opz = document.getElementsByClassName("opz")
var butt = document.getElementsByClassName("backer")
var buttz = document.getElementsByClassName("fullsend")





function updateDisplay() {
    document.getElementById("booty").innerHTML = disp
}

function numbers(id) {
    if (state == 0) {
        for (var i = 0; i < opz.length; i++) {
            opz[i].setAttribute("onclick", "operators(this.id)")
        }
        for (var i = 0; i < butt.length; i++) {
            butt[i].setAttribute('onclick', "back()")
        }
        for (var i = 0; i < buttz.length; i++) {
            buttz[i].removeAttribute('onclick')
        }
        arr.push(id)
        currentNum = arr.join("")
        disp = currentNum
        updateDisplay();
        console.log(arr)
    }
    else {
        for (var i = 0; i < opz.length; i++) {
            opz[i].setAttribute("onclick", "operators(this.id)")
        }
        for (var i = 0; i < buttz.length; i++) {
            buttz[i].setAttribute('onclick', "equal()")
        }
       
        arr.push(id)
        lastNum = arr.slice(2, arr.length).join("")
        disp = lastNum
        updateDisplay();
        state ++
        
    }
   
}
function operators(id) {
    if (state == 0) {
        for (var i = 0; i < opz.length; i++) {
            opz[i].removeAttribute('onclick')
        }
        var dab = arr.join("")
        console.log(dab)
        arr = []
        arr.push(dab)
        arr.push(id)
        console.log(arr)
        state ++
    }
    else if (state> 0) {
        arr.push(id)
        console.log(arr)
        console.log(arr)
        for (var i = 0; i < nums.length; i++) {
            nums[i].setAttribute("onclick", "numbers(this.id)")
        }
        for (var i = 0; i < butt.length; i++) {
            butt[i].setAttribute('onclick', "back()")
        }
    }
}
function equal() {
    if (arr[1] == "+") {
        var rawr = parseFloat(currentNum)
        var XD = parseFloat(lastNum)
        
        if (total - Math.floor(total) == 0){
            total = (rawr+XD)
        }
        if (total - Math.floor(total) !== 0){
            total = (rawr+XD).toFixed(3)
        }
        disp = total
        updateDisplay()
        arr = []
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "-") {
        var rawr = parseFloat(currentNum)
        var XD = parseFloat(lastNum)
        
        if (total - Math.floor(total) == 0){
            total = (rawr-XD)
        }
        if (total - Math.floor(total) !== 0){
            total = (rawr-XD).toFixed(3)
        }
        disp = total
        updateDisplay()
        arr = []
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "X") {
        var rawr = parseFloat(currentNum)
        var XD = parseFloat(lastNum)
        
        if (total - Math.floor(total) == 0){
            total = (XD * rawr)
        }
        if (total - Math.floor(total) !== 0){
            total = (XD * rawr).toFixed(3)
        }
        disp = total
        updateDisplay()
        arr = []
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    else if (arr[1] == "/") {
        var rawr = parseFloat(currentNum)
        var XD = parseFloat(lastNum)
        
        if (total - Math.floor(total) == 0){
            total = (rawr/XD)
        }
        if (total - Math.floor(total) !== 0){
            total = (rawr/XD).toFixed(3)
        }
        disp = total
        updateDisplay()
        arr = []
        arr.push(total.toString())
        currentNum = total.toString()
        console.log(arr)
    }
    for (var i = 0; i < nums.length; i++) {
        nums[i].removeAttribute('onclick')
    }
    for (var i = 0; i < butt.length; i++) {
        butt[i].removeAttribute('onclick')
    }
    for (var i = 0; i < buttz.length; i++) {
        buttz[i].removeAttribute('onclick')
    }
}

function fullClear() {
    for (var i = 0; i < nums.length; i++) {
        nums[i].setAttribute("onclick", "numbers(this.id)")
    }
    for (var i = 0; i < butt.length; i++) {
        butt[i].removeAttribute('onclick')
    }
    for (var i = 0; i < opz.length; i++) {
        opz[i].removeAttribute('onclick')
    }
    for (var i = 0; i < buttz.length; i++) {
        buttz[i].setAttribute('onclick', "equal()")
    }

    

    console.log("reeee")
    arr = []
    console.log(arr)
    currentNum = ""
    lastNum = ""
    disp = "0"
    total = 0
    state = 0
    updateDisplay()
    console.log(arr)
}
function back(){
    if (state == 0){
        arr.pop()
        disp = arr.join("")
        updateDisplay()
    }
    if (state == 1){
        arr.pop()
    }
    if (state>1){
        arr.pop()
        lastNum = arr.slice(2, arr.length).join("")
        disp = lastNum
        updateDisplay()
    }

}

