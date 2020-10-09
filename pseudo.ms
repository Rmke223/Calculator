Calculator Pseudocode
Arr = []
currentNum = “”
lastNum = “”
Operator = “”
Display = “0”
Total = 0
State =0



numbers(num){
If (state = 0){
		arr.push(num)
		currentNum = arr.join(“”)
		display= currentNum
Update display
Add onclick to  ops and back button
Remove onclick equals
}
Else{
		arr.push(num)
		lastNum = (arr.slice(2,arr.length).join(""))
		Display = lastNum
		Turn ops and equals back on
		
}
}

operators(){
	If state = 0
		Turn off ops
		arr.join(“”)
‘		arr = []
		Push join to arr
		Push op to arr
		arr.push(‘operator’)
		State ++
	Else
		Push op to arr 
		Add onclick to numbers and back button
		
}




Equals(){
	If (arr[1] === “+”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
If total-mathfloor(total == 0 total = current parse + lastparse)
If total-mathfloor(total !== 0 total = current parse + lastparse)
display=total
		Arr = []
arr.push(total.tostring)
Current num = total.tostring()
Update display
} 
Else If (arr[1] === “-”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
If total-mathfloor(total == 0 total = current parse - lastparse)
If total-mathfloor(total !== 0 total = current parse - lastparse)
display=total
		Arr = []
arr.push(total.tostring)
Current num = total.tostring()
Update display
} 
Else If (arr[1 === “*”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
If total-mathfloor(total == 0 total = current parse * lastparse)
If total-mathfloor(total !== 0 total = current parse * lastparse)
display=total
		Arr = []
arr.push(total.tostring)
Current num = total.tostring()
Update display
} 
Else If (arr[1r === “/”}{
currentParse = parseint(currentNum) 
lastParse  = parseint(lastNum)
If total-mathfloor(total == 0 total = current parse / lastparse)
If total-mathfloor(total !== 0 total = current parse / lastparse)
display=total
		Arr = []
arr.push(total.tostring)
Current num = total.tostring()
Update display
} 
Remove onclick from nums back and equals
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
Update display
}
Back (){
	If state = 0
		arr.pop()
		Disp = arr.join()
		Update display
	If state = 1	
		arr.pop()
	If state >1
		arr.pop()
		lastNum = arr.slice(2, arr.length).join(“”)
		Display = last number
		Update display
}
