	//window.onload = 
function contains(arr, number) {
	//	for(var index in arr) {
	//        if(index === number) {
    for(let i = 0; i < arr.length; i+=1) {
        if(arr[i] === number) {
            return true;
        }	
    }
}


// CREATE THE TABLES TO BE DISPLAYED DEPENDING ON USER INPUT OF NUMBER OF GAME CARDS
function createTables() {
	
	var cardCount = document.getElementById('cardCount').value;
	//document.createElement('thead');

	var gameBoard = document.getElementById('gameBoard');
	
	for(var i = 0; i < cardCount; i+=1) {
		var table = document.createElement('table');
		gameBoard.appendChild(table);

		table.innerHTML = '<thead>	\
						<th>B</th>	\
						<th>I</th>	\
						<th>N</th>	\
						<th>G</th>	\
						<th>O</th>	\
					</thead>	\
					<tbody>	\
						<tr rowspan="4">	\
							<td class="letterB"></td>	\
							<td class="letterI"></td>	\
							<td class="letterN"></td>	\
							<td class="letterG"></td>	\
							<td class="letterO"></td>	\
						</tr>	\
						<tr rowspan="4">	\
							<tr rowspan="4">	\
							<td class="letterB"></td>	\
							<td class="letterI"></td>	\
							<td class="letterN"></td>	\
							<td class="letterG"></td>	\
							<td class="letterO"></td>	\
						</tr>	\
						<tr rowspan="4">	\
							<tr rowspan="4">	\
							<td class="letterB"></td>	\
							<td class="letterI"></td>	\
							<td id="freeSpace">FREE SPACE</td>	\
							<td class="letterG"></td>	\
							<td class="letterO"></td>	\
						</tr>	\
						<tr rowspan="4">	\
							<tr rowspan="4">	\
							<td class="letterB"></td>	\
							<td class="letterI"></td>	\
							<td class="letterN"></td>	\
							<td class="letterG"></td>	\
							<td class="letterO"></td>	\
						</tr>	\
						<tr rowspan="4">	\
							<tr rowspan="4">	\
							<td class="letterB"></td>	\
							<td class="letterI"></td>	\
							<td class="letterN"></td>	\
							<td class="letterG"></td>	\
							<td class="letterO"></td>	\
						</tr>	\
					</tbody>'
	}
}


//	RANDOM NUMBER FUNCTION -- GENERATES NUMBERS TO DISPLAY TO GAME CARDS
function randomNumber(numberSetStart, numMultiply, arr) {	//letterSet
	//    console.log(arr);
	let numList = [];
    for(let i = 0; i < arr.length; i+=1) {
        var randomNum = Math.floor(Math.random() * numberSetStart + numMultiply);
		console.log(randomNum);
        console.log(arr[i]);
		var elClass = arr[i].getAttribute('class');
		
        switch(elClass) {
            case 'letterB':
            case 'letterI':
                while(randomNum <= numberSetStart || numList.includes(randomNum)) {	//	contains(arr, randomNum)
                    randomNum = Math.floor(Math.random() * numberSetStart + numMultiply);
					console.log('line 26');
					if(!(numList.includes(randomNum))) {
						break;
					}
                }
                break;
            case 'letterN':
            case 'letterG':
            case 'letterO':
                while(randomNum <= numberSetStart || numList.includes(randomNum)) {
					console.log(randomNum);
                    randomNum = Math.floor(Math.random() * numberSetStart + numMultiply);
					console.log('line 38');
					if(!(numList.includes(randomNum)) && randomNum > numberSetStart) {
						break;
					}
                } /*else if(numList.includes(randomNum)) {	//	contains(arr, randomNum)
                	console.log(randomNum);
                    randomNum = Math.floor(Math.random() * numberSetStart + numMultiply);
					console.log('line 36');
                }*/
                break;
            default:
                console.log("nope");
                break;
        }
		if(numList.length % 5 === 0) {
			numList = [];
		}
		numList.push(randomNum);
		
		console.log(numList);
        arr[i].textContent = randomNum;
    }
	//	console.log(arr);
	//    console.log(arr.innerHTML);
}

// GENERATES RANDOM NUMBERS TO THE GAME CARDS
function generate() {
    var b = [],
        i = [],
        n = [],
        g = [],
        o = [];
    var letters = [b,i,n,g,o];

    var bLetters = Array.from(document.getElementsByClassName("letterB"));
    var iLetters = Array.from(document.getElementsByClassName("letterI"));
    var nLetters = Array.from(document.getElementsByClassName("letterN"));
    var gLetters = Array.from(document.getElementsByClassName("letterG"));
    var oLetters = Array.from(document.getElementsByClassName("letterO"));
    
     
     randomNumber(15, 1, bLetters);
     randomNumber(15, 16, iLetters);
     randomNumber(30, 16, nLetters);
     randomNumber(45, 16, gLetters);
     randomNumber(60, 16, oLetters);
    
	// for(let i = 0; i < letters.length; i+=1) {
	   // let randomNum = Math.floor(Math.random() * 0 + 16);
	   // nLetters[i].innerHTML = randomNum;
	// }
            
    //numDisplay.innerHTML = numbers;
  
  	//console.log(bLetters.length);
  
}

// FUNCTION TO CALL RANDOM NUMBERS
function numberCall() {
	var numberLetter;
	var calledNumbers = new Array();
	var calledNumberList = Array.from(document.getElementById('numDisplay').getElementsByTagName('td'));
	let randomNum = Math.floor(Math.random() * 74 + 1);
	//calledNumbers.includes(randomNum) ? randomNum = Math.floor(Math.random() * 74 + 1) : calledNumbers.push(randomNum);
	
	while(calledNumbers.includes(randomNum)) {
		randomNum = Math.floor(Math.random() * 74 + 1)
	}
	
	calledNumbers.push(randomNum);
	
	//	if(numbers.includes(randomNum)) { 
	//		randomNum = Math.floor(Math.random() * 74 + 1) 
	//	}
	
	if(randomNum > 0 && randomNum < 16) {
		numberLetter = 'B';
	} else if(randomNum > 15 && randomNum < 31) {
		numberLetter = 'I';
	} else if(randomNum > 30 && randomNum < 46) {
		numberLetter = 'N';
	} else if(randomNum > 45 && randomNum < 61) {
		numberLetter = 'G';
	} else if(randomNum > 60 && randomNum < 76) {
		numberLetter = 'O';
	}
	
	console.log(randomNum);
	console.log(calledNumberList);

	for(let i = 0; i < calledNumberList.length; i += 1) {
		if(calledNumberList[i].innerHTML === String(randomNum)) {
			calledNumberList[i].style.backgroundColor = '#ff0';
		}
	}
	
	//	numbers.push(numberLetter + randomNum);
	//	for(let i = 0; i < numbers.length; i += 1) {
	//		numDisplay.innerHTML += ' ' + numberLetter + '-' + numbers[i];
	//		if(numDisplay.innerHTML.length % 11 === 0) { 
	//			numDisplay.innerHTML += ' ' + numberLetter + '-' + numbers[i] + '<br/>';
	//		}
	//		//console.log(numDisplay.innerHTML.length);
	//	}
	
}

// STYLE BACKGROUND OF CALLED NUMBERS FUNCTION
function highlight() {
	this.style.backgroundColor = '#ff0';
}

// ON-CLICK OF START GAME BUTTON -- START THE GAME AND GENERATE ALL ITEMS
function startGame() {
	createTables();
	var ballTimer;
	var cardCount = document.getElementById('cardCount').value;
	var gameCards = document.querySelectorAll('table');
	var cardNumbers = document.querySelectorAll('#gameBoard td');
	//	console.log(cardCount);
	//	console.log(gameCards);
	
	document.getElementById('cardSelect').style.display = 'none';
	document.getElementById('gameBoard').style.display = 'block';
	
	for(var i = 0; i < cardCount; i+=1) {
		gameCards[i].style.display = 'inline-block';
	}
	
	//	createTables();
	generate();
	
	for(let i = 0; i < cardNumbers.length; i += 1) {
		cardNumbers[i].addEventListener('click', highlight);
	}
	
	//	function() {
	//		this.style.backgroundColor = '#ff0';
	//	});
	
	ballTimer = setInterval(numberCall, 5000)
	
	
}





	//createTables();


