var satOptions = ["s1","s2","s3","s4","s5","s6","s7","s8","s9"];
var satnrOptions = ["o1","o2","o3","o4","o5","o6","o7","o8"];
var satParts = ["p1", "p2", "p3", "p4", "p5"];
var actParts = ["p6", "p7", "p8", "p9", "p10"];
var currentnumberOfQuestions = 0;
var testPartIndex = 0;

window.onload = function(){
		
		removeElements(satOptions);
		removeElements(actParts);
		

		teststuff = readStringFromFileAtPath("https://people.sc.fsu.edu/~jburkardt/data/csv/addresses.csv")
	console.log(teststuff);
}
function readStringFromFileAtPath(pathOfFileToReadFrom){
	var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}




function testSelection(testChosen){
	//alert(testTypeForm.testType.options.length)
	var test = testChosen.testType.selectedIndex;

	//SAT 2016 New Report
	if (test == 0){
		
		removeElements(satOptions);
		addElements(satnrOptions);

		removeElements(actParts);
		addElements(satParts);

	}

	//SAT 2016
	if (test == 1){ 
		
		removeElements(satnrOptions);
		addElements(satOptions);

		removeElements(actParts);
		addElements(satParts);

	}

	//ACT
	if (test == 2){
		removeElements(satParts);
		addElements(actParts);
	}
}

function testNameSelection(testNameChosen){
	var testNameIndex = testNameChosen.testName.selectedIndex;

}

function testPartSelection(testPartChosen){
	testPartIndex = testPartChosen.testPart.selectedIndex;
	
}

function createTest(){
	removeQuestions();
	if (testPartIndex == 0){//ful SAT
		var title = document.createElement("h3");
		BTN.value="Enter";
		questionsDiv.appendChild(BTN);
		addQuestions(1);

	}
	if (testPartIndex == 1){ //reading SAT
		addQuestions(52);

	
	}
	if (testPartIndex == 2){ //writing and language SAT
		addQuestions(44);

	}
	if (testPartIndex == 3){//Math no calc SAT
		addQuestions(20);

	}
	if (testPartIndex == 4){//Math yes cal SAT
		addQuestions(38);
	
	}
	if (testPartIndex == 5){//full ACT
		addQuestions(1);

	}
	if (testPartIndex == 6){//english ACT

		addQuestions(75);

	}
	if (testPartIndex == 7){//Math ACT
		addQuestions(60);

	}
	if (testPartIndex == 8){//reading ACT
		addQuestions(40);

	}
	if (testPartIndex == 9){//Science ACT
		addQuestions(40);

	}
}

function removeElements(elementList) {
	var satArrayLength = elementList.length;
	for (var i = 0; i < satArrayLength; i++) {
	var x = document.getElementById(elementList[i]);
	x.style.display = "none";
	}
}

function addElements(elementList){
	var satArrayLength = elementList.length;
 	for (var i = 0; i < satArrayLength; i++) {
    var x = document.getElementById(elementList[i]);
    x.style.display = "block";
	}
}


function addQuestions(numberOfQuestions){
	
 	for (var i = 0; i < numberOfQuestions; i++) {
	    var questionsForm = document.createElement("form");
		var questionNumber = document.createTextNode(i+1);
		var period = document.createTextNode(".");

		questionsForm.appendChild(questionNumber);
		questionsForm.appendChild(period);



		var questionsDiv = document.getElementById("questions");
		var br1 = document.createElement("br");
		var br2 = document.createElement("br");
		var br3 = document.createElement("br");
		var br4 = document.createElement("br");
		var br5 = document.createElement("br");

		var letterA = document.createTextNode("A");
		var letterB = document.createTextNode("B");
		var letterC = document.createTextNode("C");
		var letterD = document.createTextNode("D");

		var A = document.createElement("input");
		var B = document.createElement("input");
		var C = document.createElement("input");
		var D = document.createElement("input");

		A.type="checkbox";
		B.type="checkbox";
		C.type="checkbox";
		D.type="checkbox";

		A.id=i+1;
		B.id=i+1;
		C.id=i+1;
		D.id=i+1;

		questionsDiv.appendChild(questionsForm);
		questionsDiv.appendChild(A);
		questionsDiv.appendChild(letterA);
		questionsDiv.appendChild(br1);
		questionsDiv.appendChild(B);
		questionsDiv.appendChild(letterB);
		questionsDiv.appendChild(br2);
		questionsDiv.appendChild(C);
		questionsDiv.appendChild(letterC);		
		questionsDiv.appendChild(br3);
		questionsDiv.appendChild(D);
		questionsDiv.appendChild(letterD);
		questionsDiv.appendChild(br4);
		questionsDiv.appendChild(br5);

	}

	var BTN = document.createElement("input");
	BTN.type="button";
	BTN.value="Enter";
	questionsDiv.appendChild(BTN);


}

function removeQuestions() {
	/*for (var i = 0; i < currentnumberOfQuestions; i++) {

	    var question = document.getElementById(i);
	    question.questionDIV.removeChild(question);
	}
	current 
	*/
	var myNode = document.getElementById("questions");
	while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
}

function selectOnlyThis(){
	/*for (var i = 1;i <= 4; i++)
	    {
	        document.getElementById(i).checked = false;
	    }
	    document.getElementById(id).checked = true;*/
}

function enter(){

}

