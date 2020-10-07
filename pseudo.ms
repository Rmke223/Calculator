Calculator Pseudocode
Arr = []
currentNum = “”
lastNum = “”
Operator = “”
Display = “0”
strDisplay = “”
Total = 0
State =0



numbers(num){
If (state = 0){
		arr.push(num)
		currentNum = arr.join(“”)
		display= currentNum
}
Else{
		arr.push(num)
		lastNum = (arr.slice(2,arr.length).join(""))
		Display = lastNum
}
}

operators(){
	If state = 0
		arr.join(“”)
		arr.push(‘operator’)
		State ++
	Else
		Arr[1] = operator
		Var ree = (arr.length-2)
		for(i=0; i<ree; i==){
		arr.pop()
}
		Arr.push(lastNum)

		
}




Equals(){
	If (arr[1] === “+”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
total = currentParse + lastParse
display=total
		arr.pop()
Arr[0] = to string(total)
} 
Else If (arr[1] === “-”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
total = currentParse - lastParse
display=total
		arr.pop()
Arr[0] = to string(total)
} 
Else If (arr[1 === “*”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
total = currentParse * lastParse
display=total
		arr.pop()
Arr[0] = to string(total)
} 
Else If (arr[1r === “/”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
total = currentParse / lastParse
Display = tostring(total)
currentNum = tostring(total)
Operator = “”
} 
}
	
Clear(){
	State = 0
	Arr = []
currentNum = “”
lastNum = “”
Operator = “”
Display = “0”
strDisplay = “”
Total = 0
