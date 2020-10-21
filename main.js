var counter=1;
var transitions;

var q=1;

function generateTransitionTable(){

    //alert("generate transition table");
   // document.getElementById("transitionTable").style="display:block;";
   document.getElementById("nfaTable").style="display:block;";
}

function getState(currentState, input){
var nextState="Q";


    for (i=1; i<5; i++){

        //alert("transitions["+i+"][0]"+transitions[i][0]);
      
      
        if(transitions[i][0]==currentState){


            if(transitions[0][0]==input){

                nextState= transitions[i][0];
            

            }
            else if(transitions[0][1]==input){


                nextState= transitions[i][1];
            

            }
            else if(transitions[0][2]==input){

                nextState= transitions[i][2];
       

            }
            else if(transitions[0][3]==input){

                nextState= transitions[i][3];
              

            }
            else{

                alert("no such input");
                return "fail";
            }
  


        }
        else{

          
            return "fail";
        }

        

        return nextState;


    }
    
    
}

function checkValidExpression( exp){

    var letter="";
    var currentState=document.getElementById("startState").value;

    
    var finalState = document.getElementById("finalState").value.toUpperCase();
  

    if(exp=="") { return false;}
    for (i=0; i<exp.length; i++){
        letter = exp.charAt(i);
        
     
         var x = getState(currentState,letter);
         if (x==finalState){return true;}
       
        if(x =="fail"){


            

           
            return false;

        }
        else{

           

            currentState=x;

        }



        }

        
        if(currentState==finalState){
           
         
            return true;
        }

       // alert(exp);
        

}

function getDataFromCheckTable(){

    var exp1 = document.getElementById("1").value;
    var exp2 = document.getElementById("3").value;
    var exp3 = document.getElementById("5").value;
    var exp4 = document.getElementById("7").value;
    var exp5 = document.getElementById("9").value;
 

    transitions = [
        ["Null",document.getElementById("00").innerHTML.toString(), document.getElementById("01").innerHTML.toString(), document.getElementById("02").innerHTML.toString(),document.getElementById("03").innerHTML.toString(),"Null"],
        [document.getElementById("10").innerHTML.toUpperCase(), document.getElementById("11").value.toUpperCase(), document.getElementById("12").value.toUpperCase(),document.getElementById("13").value.toUpperCase(),document.getElementById("14").value.toUpperCase()],
        [document.getElementById("20").innerHTML.toUpperCase(), document.getElementById("21").value.toUpperCase(), document.getElementById("22").value.toUpperCase(),document.getElementById("23").value.toUpperCase(),document.getElementById("24").value.toUpperCase()],
        [document.getElementById("30").innerHTML.toUpperCase(),document.getElementById("31").value.toUpperCase(), document.getElementById("32").value.toUpperCase(),document.getElementById("33").value.toUpperCase(),document.getElementById("34").value.toUpperCase()],
        [document.getElementById("40").innerHTML.toUpperCase(),document.getElementById("41").value.toUpperCase(), document.getElementById("42").value.toUpperCase(),document.getElementById("43").value.toUpperCase(),document.getElementById("44").value.toUpperCase()],
        [document.getElementById("50").innerHTML.toUpperCase(), document.getElementById("51").value.toUpperCase(), document.getElementById("52").value.toUpperCase(),document.getElementById("53").value.toUpperCase(),document.getElementById("54").value.toUpperCase()]
      ];    


//alert(exp1);
//alert(getState("A",exp1));

if(checkValidExpression(exp1)){

    document.getElementById("2").innerHTML="ok";

    
}
else{
    document.getElementById("2").innerHTML="not";
  

}

if(checkValidExpression(exp2)){
    
    document.getElementById("4").innerHTML="ok";

    
}
else{
    document.getElementById("4").innerHTML="not";
   

}

if(checkValidExpression(exp3)){

  
    document.getElementById("6").innerHTML="ok";

    
}
else{
    document.getElementById("6").innerHTML="not";
    


}
if(checkValidExpression(exp4)){

    
    document.getElementById("8").innerHTML="ok";

    
}
else{
    document.getElementById("8").innerHTML="not";
   

}


if(checkValidExpression(exp5)){

    
    document.getElementById("ten").innerHTML="ok";

    
}
else{
    document.getElementById("ten").innerHTML="not";
    

}
    
}

function openTabs(evt, tabName){
    
    var i, tabContent, tablinks;

    tabContent = document.getElementsByClassName("tabContent");
    for(i=0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeText(value){
    var display = document.getElementById("display");
    var text = "";

    if(value==1) text += "Zarif (Leader)";
    if(value==2) text += "Suraya";
    if(value==3) text += "Ain";
    if(value==4) text += "Aimy";

    display.innerHTML = text;
}

document.getElementById("defaultOpen").click()

function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.classList.add("v");
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.style = "width: 15px;"
    cell2.appendChild(element2);

    var cell3 = row.insertCell(2);
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.style = "width: 15px;"
    cell3.appendChild(element3);

    var cell4 = row.insertCell(3);
    var element4 = document.createElement("input");
    element4.type = "text";
    element4.name = "txtbox[]";
    element4.style = "width: 15px;"
    cell4.appendChild(element4);

    var cell5 = row.insertCell(4);
    var element5 = document.createElement("input");
    element5.type = "text";
    element5.name = "txtbox[]";
    element5.style = "width: 15px;"
    cell5.appendChild(element5);

    var cell6 = row.insertCell(5);
    var element6 = document.createElement("input");
    element6.type = "text";
    element6.name = "txtbox[]";
    element6.style = "width: 15px;"
    cell6.appendChild(element6);

}



function toRg(tableID){
    var rg="";
    var tmp;
//gets table
var oTable = document.getElementById(tableID);

//gets rows of table.
var rowLength = oTable.rows.length;

//loops through rows    
for (i = 1; i < rowLength; i++){

    tmp="";
   //gets cells of current row
  // var oCells = oTable.rows.item(i).cells;

  var index="";
  index=index+i;
  index=index+"0";
 
  var state=document.getElementById(index).innerHTML.toUpperCase();
  
 // alert(txt);
 
tmp=tmp+state;
tmp=tmp+"&rarr;";


 

  var index="";
  index=index+i;
  index=index+"1";
 
  // first column
 
  var txt =document.getElementById(index).value.toUpperCase();
  
  if(txt!=""){

    index="";
    index=index+i;
    index=index+"1";


  tmp=tmp+document.getElementById("00").innerHTML;

  tmp=tmp+txt;
  
  rg=rg+tmp+"<br>";
  
  


  }

 tmp="";


  /////////////////////////////////////////////
tmp=tmp+state;
tmp=tmp+"&rarr;"; 

var index="";
index=index+i;
index=index+"2";


  var txt =document.getElementById(index).value.toUpperCase();
  if(txt!=""){

    index="";
    index=index+i;
    index=index+"2";


  tmp=tmp+document.getElementById("01").innerHTML;
  tmp=tmp+txt;
  rg=rg+tmp+"<br>";
  



 
  }
 
  tmp="";
  tmp=tmp+state;
 tmp=tmp+"&rarr;"; 

 var index="";
index=index+i;
index=index+"3";

var txt = document.getElementById(index).value.toUpperCase();
if(txt!=""){

    index="";
    index=index+i;
    index=index+"3";


  tmp=tmp+document.getElementById("02").innerHTML;
  tmp=tmp+txt;
  rg=rg+tmp+"<br>";
  









}
tmp="";
tmp=tmp+state;
tmp=tmp+"&rarr;"; 

var index="";
index=index+i;
index=index+"4";

var txt = document.getElementById(index).value.toUpperCase();
if(txt!=""){
    index="";
    index=index+i;
    index=index+"4";


  tmp=tmp+document.getElementById("03").innerHTML;
  tmp=tmp+txt;
  rg=rg+tmp+"<br>";
  





  
}

 
}
//var initial = document.getElementById("11").value.toUpperCase();

//rg=rg+initial+"&rarr;&sigma;"
document.getElementById("info").innerHTML=rg;
}



function addRowInNfaTable(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var lastRow = rowCount;


    var row = table.insertRow(rowCount);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    element1.name="chkbox[]";
    
    cell1.appendChild(element1);

    var cell2 = row.insertCell(1);
    cell2.classList.add("v");
    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "txtbox[]";
    element2.id=lastRow+"1";
    element2.className="cap";
    element2.style = "width: 15px;"
    
    cell2.appendChild(element2);

    var cell3 = row.insertCell(2);
    var element3 = document.createElement("input");
    element3.type = "text";
    element3.name = "txtbox[]";
    element3.id=lastRow+"2";
    element3.className="cap";
    element3.style = "width: 15px;"
   
    cell3.appendChild(element3);

    var cell4 = row.insertCell(3);
    var element4 = document.createElement("input");
    element4.type = "text";
    element4.name = "txtbox[]";
    element4.style = "width: 15px;"
    element4.id=lastRow+"3";
    element4.className="cap";
    cell4.appendChild(element4);

   


}

function deleteRow(tableID) {
    try {
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;


    
    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) {
            if (rowCount<=6){
                alert("cannot delete further rows. alteast 5 values are required.");
                break;
            }
            if(rowCount <= 1) {
                alert("Cannot delete all the rows.");
                break;
            }
            table.deleteRow(i);
            rowCount--;
            i--;
        }


    }
    }catch(e) {
        alert(e);
    }
}

function submit() {
    var myTab = document.getElementById('table1');
    var arrValues = new Array();

    // loop through each row of the table.
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // loop through each cell in a row.
        for (c = 0; c < myTab.rows[row].cells.length; c++) {
            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                arrValues.push("'" + element.childNodes[0].value + "'");
            }
        }
    }
    
    // finally, show the result in the console.
    console.log(arrValues);
}
