//Developed by S.Venkatesh
var p1 = "player1";//Player 1 name holder
var p2 = "player2";//Player 2 name holder
var max=0;//No Of times will they play
var counter=0;
var p1score=0;//score of player 1
var p2score=0;//score of player 2
var alternate='o';
xcount=3;//No of 'x' are used
ocount=3;//No of 'o' are used
cellValue = 'x';//Initial cell value 
/////////****************************************////////////////////////////////


var startClicked=false;//if start click, Then only match begins 
$("#display").hide();//At first display of winner is hidden
$(".score").hide();//At first Score display is hidden
$("#start").click(function (){
  p1=$("#player1").val();
  p2=$("#player2").val();
  max=$("#max").val();
  if(p1=="" || p2=="" || max==""){
    note();
  }else{
    $(".score").show();
    startClicked=true;
  }
  $(".player").hide();
  $("#Pone").text(p1+"--");
  $("#p1D").text(p1score);
  $("#Ptwo").text(p2+"--");
  $("#p2D").text(p2score);
});
////////////////****************************************///////////////////////////////
//Function to check after every single win
function multiTimes() {
  var rows=["#11","#12","#13","#21","#22","#23","#31","#32","#33"];
  if(max==counter){
    $("#Pone").text(p1+"--");
    $("#p1D").text(p1+" "+p1score);
    $("#Ptwo").text(p2+"--");
    $("#p2D").text(p2+" "+p2score);
    var showScore = '\n'+p1 + ' : ' +p1score+'\n'+ p2 +' : ' +p2score;
    if(p1score>p2score){
     $("#display").text('"'+p1+'"'+" WON the Match    "+showScore);
    }
    else if(p1score<p2score){
    $("#display").text('"'+p2+'"'+" WON the Match     "+showScore);
    }
    else{
    $("#display").text("***Draw***");
    }
    $(".score").hide();
    $("#display").show();
    setTimeout(function(){location.reload();},5000);
  }
  else{
     xcount=3;
     ocount=3;
     alternate='o';
     $("#turn").text(" ");
     $("#Pone").text(p1+"--");
     $("#p1D").text(p1score);
     $("#Ptwo").text(p2+"--");
     $("#p2D").text(p2score);
     setTimeout(function(){
     for(i=0;i<9;i++){
       if($(rows[i]).text()=='x' || $(rows[i]).text()=='o'){
         $(rows[i]).css("background-color","blue");
         $(rows[i]).text("");
      }
     }},1000);
    }
}



/////////**************************************************//////////////////////////
//Row win check
function rowWin(idrow) {
     r=idrow.charAt(1);
     var flg=false;
     var xRo;
   if(r=='1'){
     var array1 =["#11","#12","#13"];
     if($("#11").text()==$("#12").text() && $("#12").text()==$("#13").text()){
        for(i=0;i<3;i++){
         $(array1[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#11").text();
      }
   }
   else if(r=='2'){
     var array2 =["#21","#22","#23"];
     if($("#21").text()==$("#22").text() && $("#22").text()==$("#23").text()){
        for(i=0;i<3;i++){
          $(array2[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#21").text();
    }
   }
   else if(r=='3'){
     var array3 =["#31","#32","#33"];
     if($("#31").text()==$("#32").text() && $("#32").text()==$("#33").text()){
        for(i=0;i<3;i++){
          $(array3[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#31").text();
     }
   }
   if(flg==true){
      if(xRo=='x'){
        counter++;
        p1score++;
        multiTimes();
      }
      else{
        counter++;
        p2score++;
        multiTimes();
      }
   }

}

//column win check
function colWin(idcol) {
     c=idcol.charAt(2);
     var flg=false;
     var xRo;
   if(c=='1'){
     var array1 =["#11","#21","#31"];
     if($("#11").text()==$("#21").text() && $("#21").text()==$("#31").text()){
        for(i=0;i<3;i++){
         $(array1[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#11").text();
      }
   }
   else if(c=='2'){
     var array2 =["#12","#22","#32"];
     if($("#12").text()==$("#22").text() && $("#22").text()==$("#32").text()){
        for(i=0;i<3;i++){
          $(array2[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#12").text();
    }
   }
   else if(c=='3'){
     var array3 =["#13","#23","#33"];
     if($("#13").text()==$("#23").text() && $("#23").text()==$("#33").text()){
        for(i=0;i<3;i++){
          $(array3[i]).css("background-color","yellow");
        }
        flg=true;
        xRo=$("#13").text();
     }
   }
   if(flg==true){
      if(xRo=='x'){
        counter++;
        p1score++;
        multiTimes();
      }
      else{
        counter++;
        p2score++;
        multiTimes();
      }
   }
}
//
//Diagonal Check
function diagonalCheck(iddai) {
     var  arrayDai = ["#11","#22","#33","#31","#13"];
     var flg=false;
     var xRo;
    if(iddai.localeCompare("#11")==0 || iddai.localeCompare("#22")==0 || iddai.localeCompare("#33")==0 || iddai.localeCompare("#31")==0 || iddai.localeCompare("#13")==0){
         if(iddai.localeCompare("#31")!=0 && iddai.localeCompare("#13")!=0 && $("#11").text()==$("#22").text() && $("#22").text()==$("#33").text()){
           for(i=0;i<3;i++){
             $(arrayDai[i]).css("background-color","yellow");
           }
           flg=true;
           xRo=$("#11").text();
         }
         else if(iddai.localeCompare("#11")!=0 && iddai.localeCompare("#33")!=0 && $("#31").text()==$("#22").text() && $("#22").text()==$("#13").text()){
          $("#31").css("background-color","yellow");
          $("#22").css("background-color","yellow");
          $("#13").css("background-color","yellow");
          flg=true;
          xRo=$("#11").text();
         }
    }
    if(flg==true){
       if(xRo=='x'){
         counter++;
         p1score++;
         multiTimes();
        }
       else{
         counter++;
         p2score++;
         multiTimes();
        }
      
    }
}
//

//checking for empty cells surrounding for picking that particular id
function there(iddd,r){
  var flag=false;
  var oneArr=["#12","#21","#11","#13","#22","#12","#23"];
  var twoArr=["#11","#31","#22","#21","#12","#32","#23","#13","#22","#33"];
  var threeArr=["#21","#32","#31","#22","#33","#32","#22"];
  if(r=='1'){
    for(i=0;i<7;i++){
      if(iddd.localeCompare(oneArr[i])==0){
        flag=true;
        break;
      }
    }
  }
  else if (r=='2') {
    for(i=0;i<10;i++){
      if(iddd.localeCompare(twoArr[i])==0){
        flag=true;
        break;
      }
    }
  }
  else if (r=='3') {
    for(i=0;i<7;i++){
      if(iddd.localeCompare(threeArr[i])==0){
        flag=true;
        break;
      }
    }
  }
return flag;
}
//If the surrounding are not empty then we are disabling the pick of that 'x' or 'o'
function noPick(idpick) {
    var r = idpick.charAt(1);
    var f1 = false;
    var f2 = false;
    var f3 = false;
    var f4 = false;
    var intid = parseInt($(idpick).attr("id"),10);
    var l = "#"+((intid+1).toString());
    var ri = "#"+(intid-1).toString();
    var u = "#"+(intid-10).toString();
    var d = "#"+(intid+10).toString();
    if(r=='1'){
      if(there(l,r)){
         if($(l).text()!='x' && $(l).text()!='o'){
           f1=true;
         }
      }
      if(there(ri,r)){
        if($(ri).text()!='x' && $(ri).text()!='o'){
          f2=true;
        }
      }
      if (there(u,r)) {
        if($(u).text()!='x' && $(u).text()!='o'){
          f3=true;
        }
      }
      if (there(d,r)) {
        if($(d).text()!='x' && $(d).text()!='o'){
          f4=true;
        }
      }
      if(f1==true || f2==true||f3==true||f4==true)
         return true;
      else {
         return false;
      }

    }
    else if (r=='2') {
      if(there(l,r)){
         if($(l).text()!='x' && $(l).text()!='o')
            f1=true;
      }
      if(there(ri,r)){
        if($(ri).text()!='x' && $(ri).text()!='o')
           f2=true;
      }
      if (there(u,r)) {
        if($(u).text()!='x' && $(u).text()!='o')
           f3=true;
      }
      if (there(d,r)) {
        if($(d).text()!='x' && $(d).text()!='o')
           f4=true;
      }
      if(f1==true || f2==true  || f3==true || f4==true){
        return true;
      }
      else
        return false;
    }
    else if (r=='3') {
      if(there(l,r)){
         if($(l).text()!='x' && $(l).text()!='o')
            f1=true;

      }
      if(there(ri,r)){
        if($(ri).text()!='x' && $(ri).text()!='o')
           f2=true;
      }
      if (there(u,r)) {
        if($(u).text()!='x' && $(u).text()!='o')
           f3=true;
      }
      if (there(d,r)) {
        if($(d).text()!='x' && $(d).text()!='o')
           f4=true;
      }
      if(f1==true || f2==true || f3==true  || f4==true){
        return true;
      }
      else
        return false;
    }

}
//
var pick={
  vali:0,
  grab:"-1",
};
function move(cellIdRef) {
  cellIdRef="#"+cellIdRef;
  var vari=$(cellIdRef).text();
  if(vari!='x' && vari!='o'){
    if(cellValue=='x' && xcount>0){
      $(cellIdRef).text(cellValue);
      xcount--;
      cellValue='o';
      rowWin(cellIdRef);
      colWin(cellIdRef);
      diagonalCheck(cellIdRef);
    }
    else if (cellValue=='o' && ocount>0) {
        $(cellIdRef).text(cellValue);
        ocount--;
        cellValue='x';
        rowWin(cellIdRef);
        colWin(cellIdRef);
        diagonalCheck(cellIdRef);
    }
    else if(pick.vali=='o'||pick.vali=='x'){
      ////Shows turn of player, who are going to pick 
      if(alternate == 'o')
       $("#turn").text(p1 +"'s Turn");
      else
       $("#turn").text(p2 + "'s Turn");
    
      var intt=parseInt($(cellIdRef).attr("id"),10);
      var l=(intt+1).toString();
      var r=(intt-1).toString();
      var u=(intt+10).toString();
      var d=(intt-10).toString();
      if((pick.grab).localeCompare(l)==0 || (pick.grab).localeCompare(r)==0 || (pick.grab).localeCompare(u)==0 || (pick.grab).localeCompare(d)==0 ){
        $(cellIdRef).text(pick.vali);
        pick.vali=0;
       rowWin(cellIdRef);
       colWin(cellIdRef);
       diagonalCheck(cellIdRef);
      }
    }
 }
 if(vari=='x' || vari=='o'){
   if(xcount==0 && ocount==0 && pick.vali==0 && noPick(cellIdRef) && vari!=alternate){
       pick.vali = $(cellIdRef).text();
       pick.grab=$(cellIdRef).attr("id");
       $(cellIdRef).text("");
        alternate=vari; 
   }
 }
};
//////////some little validation//////////////////////////

function note () {
  $("#display").text("Missing names or No.Times");
  $("#display").show();
  setTimeout(function(){location.reload();},2000);
}
///////////////////// Checking for clicks///////////////////////////////////
$("#11").click(function(){
  cellId=$("#11").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#12").click(function(){
  cellId=$("#12").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#13").click(function(){
  cellId=$("#13").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#21").click(function(){
  cellId=$("#21").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#22").click(function(){
  cellId=$("#22").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#23").click(function(){
  cellId=$("#23").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#31").click(function(){
  cellId=$("#31").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#32").click(function(){
  cellId=$("#32").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
$("#33").click(function(){
  cellId=$("#33").attr("id");
  if(startClicked==true)//If start clicked then only cell accept the 'x' or 'o'
    move(cellId);
});
