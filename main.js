var arr = []   //Global variable
var currentNum = ""  //Global variable
var lastNum = ""  //Global variable
var op = ""  //Global variable
var disp = "0"  //Global variable
var total = 0  //Global variable
var state = 0  //Global variable
var nums = document.getElementsByClassName("cell")  //Global variable for all number buttons
var opz = document.getElementsByClassName("opz")  //Global variable for all operations buttons
var butt = document.getElementsByClassName("backer")  // Global variable for back botton
var buttz = document.getElementsByClassName("fullsend") // Global variable for equal button

const makeElement = (tag, className, id, innerText = "") => { //element constructor
    let element = document.createElement(tag); //sets tag
    element.setAttribute('class', className);  //sets class  
    element.setAttribute('id', id);  //sets ID
    element.innerText = innerText;  //set inner text
    return element;  //return element
}


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

function updateDisplay() {  //function that updates the display
    document.getElementById("booty").innerHTML = disp //setting the 
}

function numbers(id) {   //number button controller passing in button id
    if (state == 0) {  //if statement for if state ==0 
        for (var i = 0; i < opz.length; i++) { //for loop for all of the operators
            opz[i].setAttribute("onclick", "operators(this.id)")  //turning on the operators onlick function
        }
        for (var i = 0; i < butt.length; i++) {  //for loop for all of the back botton
            butt[i].setAttribute('onclick', "back()")   //turning on back button onclick attribute
        }
        for (var i = 0; i < buttz.length; i++) {   //for loop for the equals button
            buttz[i].removeAttribute('onclick')  //removing onclick feature from equals 
        }
        arr.push(id)  //pushing number id to arr global
        currentNum = arr.join("") //joining all arr components and setting them to currentNum global
        disp = currentNum  // setting dipslay to current number
        updateDisplay();  //update display
    }
    else {
        for (var i = 0; i < opz.length; i++) { //for loop for operators
            opz[i].setAttribute("onclick", "operators(this.id)") //turns onclick on for operators
        }
        for (var i = 0; i < buttz.length; i++) { //for loop for equals
            buttz[i].setAttribute('onclick', "equal()")  //turn onclick on for equals
        }

        arr.push(id)  //pushing button id to arr
        lastNum = arr.slice(2, arr.length).join("") // seting lastNum equal to array numbers after operator
        disp = lastNum //setting disp to lastNum
        updateDisplay(); //update display
        state++ //incrrement the state

    }

}
function operators(id) { //controller for operators
    if (state == 0) {  //if state == zero
        for (var i = 0; i < opz.length; i++) { //for loop for all operators
            opz[i].removeAttribute('onclick') // removes onlick from operators
        }
        var dab = arr.join("") //joining all integers and setting them equal to a variable
        arr = [] // clearing arr
        arr.push(dab) // adding variable to arr
        arr.push(id)  // adding operator id to arr
        state++ // incrementing state
    }
    else if (state > 0) { //if state is greater than one
        arr.push(id)  //push operator id to arr
        for (var i = 0; i < nums.length; i++) { // for loop for numer buttons
            nums[i].setAttribute("onclick", "numbers(this.id)") //turning on the onlick for number buttons
        }
        for (var i = 0; i < butt.length; i++) { // for loop for back button
            butt[i].setAttribute('onclick', "back()") //turning on the onlick for back button
        }
    }
}
function equal() { //contorller for equals button
    if (arr[1] == "+") { //if operator is plus
        var rawr = parseFloat(currentNum) //converting string to number
        var XD = parseFloat(lastNum) //converting string to number 

        if (total - Math.floor(total) == 0) { //if total is integer 
            total = (rawr + XD) //add two numbers together
        }
        if (total - Math.floor(total) !== 0) { //if total is decimal
            total = (rawr + XD).toFixed(3) //round to three decimals
        }
        disp = total //setting display equal to total
        updateDisplay() //update display
        arr = [] //clearing arr
        arr.push(total.toString()) // psuhing total to arr as string
        currentNum = total.toString() // setting current num equal to total as string
    }
    else if (arr[1] == "-") {//if operator is minus
        var rawr = parseFloat(currentNum) //converting string to number
        var XD = parseFloat(lastNum) //converting string to number

        if (total - Math.floor(total) == 0) { //if total is integer 
            total = (rawr - XD) //subtract two numbers together
        }
        if (total - Math.floor(total) !== 0) {//if total is decimal
            total = (rawr - XD).toFixed(3)//round to three decimals
        }
        disp = total //setting display equal to total
        updateDisplay()//update display
        arr = []//clearing arr
        arr.push(total.toString())  // pushing total to arr as string
        currentNum = total.toString() // setting current num equal to total as string
    }
    else if (arr[1] == "X") {//if operator is times
        var rawr = parseFloat(currentNum)//converting string to number
        var XD = parseFloat(lastNum)//converting string to number

        if (total - Math.floor(total) == 0) { //if total is integer
            total = (XD * rawr)//multiply two numbers together
        }
        if (total - Math.floor(total) !== 0) {//if total is decimal
            total = (XD * rawr).toFixed(3) //round to three decimals
        }
        disp = total//setting display equal to total
        updateDisplay()//update display
        arr = []//clearing arr
        arr.push(total.toString()) // pushing total to arr as string
        currentNum = total.toString() // setting current num equal to total as string
    }
    else if (arr[1] == "/") {//if operator is times
        var rawr = parseFloat(currentNum)//converting string to number
        var XD = parseFloat(lastNum)//converting string to number

        if (total - Math.floor(total) == 0) {//if total is integer
            total = (rawr / XD)//divide two numbers 
        }
        if (total - Math.floor(total) !== 0) {//if total is decimal
            total = (rawr / XD).toFixed(3)//round to three decimals
        }
        disp = total//setting display equal to total
        updateDisplay()//update display
        arr = []//clearing arr
        arr.push(total.toString())// pushing total to arr as string
        currentNum = total.toString() // setting current num equal to total as string
    }
    for (var i = 0; i < nums.length; i++) { //for loop for number buttons
        nums[i].removeAttribute('onclick')//removes onclick atrribut for number buttons
    }
    for (var i = 0; i < butt.length; i++) {//for loop for back button
        butt[i].removeAttribute('onclick')//removes onclick attribute for back button
    }
    for (var i = 0; i < buttz.length; i++) {//for loop for equal button
        buttz[i].removeAttribute('onclick')//removes onclick for equal button
    }
}

function fullClear() { //function for all clear
    for (var i = 0; i < nums.length; i++) { // for loop for all number buttons
        nums[i].setAttribute("onclick", "numbers(this.id)")//turning on onclick for number buttons
    }
    for (var i = 0; i < butt.length; i++) { // for loop for back button
        butt[i].removeAttribute('onclick')//remove onclick for back button
    }
    for (var i = 0; i < opz.length; i++) { // for loop for all operator buttons
        opz[i].removeAttribute('onclick') // removing onclick from operators
    }
    for (var i = 0; i < buttz.length; i++) {  // for loop for equals button
        buttz[i].setAttribute('onclick', "equal()") // turns the conlick back on for equal button
    }
    arr = [] //Reset global
    currentNum = "" //Reset global
    lastNum = "" //Reset global
    disp = "0" //Reset global
    total = 0 //Reset global
    state = 0 //Reset global
    updateDisplay()//updating dipslay
}
function back() { //controller for back button
    if (state == 0) { //if state is 0
        arr.pop() //remove the last thing from array
        disp = arr.join("") //setting display equal to arr.join
        updateDisplay()//update display
    }
    if (state == 1) { // if state = 1
        arr.pop()//remove last thing from array
    }
    if (state > 1) { //if state is greater thatn 1
        arr.pop() //remove last thing from array
        lastNum = arr.slice(2, arr.length).join("")//seting last number to the number after the operator
        disp = lastNum// setting the display equal to the lastNum
        updateDisplay() //update display
    }
}

