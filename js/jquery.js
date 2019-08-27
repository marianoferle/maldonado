var ww = $(window).width();
var wh = $(window).height();

var a = false;
var b = false;
var c = false;
var e = false;

var a1 = false;
var a2 = false;
var a3 = false;
var a4 = false;

var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;

var c1 = false;
var c2 = false;
var c3 = false;
var c4 = false;

var aut = false;

var velo = 400;
var velo2 = 800;

var w1 = ww - 900;
var w2 = w1 / 2;
var h1 = wh - 500;
var h2 = h1 / 2;

var texto=false;

//$('#cont').animate({'top':'0','left':'0'},800);	

function inis(){
$('#prep').css({'display':'block','opacity':'1'});

$('#aa0').css({'display':'block','opacity':'1'}); 
$('#bb0').css({'display':'block','opacity':'1'});
$('#cc0').css({'display':'block','opacity':'1'});


$('#aa1').css({'display':'block','opacity':'1'}); 
$('#aa2').css({'display':'block','opacity':'1'});
$('#aa2').css({'display':'block','opacity':'1'});
$('#bb1').css({'display':'block','opacity':'1'});
$('#bb2').css({'display':'block','opacity':'1'});
$('#bb3').css({'display':'block','opacity':'1'});	
$('#cc1').css({'display':'block','opacity':'1'}); 	
$('#cc2').css({'display':'block','opacity':'1'}); 	
$('#cc3').css({'display':'block','opacity':'1'}).delay(2000);



 $('#aa0').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#bb0').animate({'opacity':'0'},velo).css({'display':'none'});
 $('#cc0').animate({'opacity':'0'},velo).css({'display':'none'}); 

 $('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 

$('#prep').css({'display':'none','opacity':'0'});
}


$(document).ready(function() { //INICIO---------------------------------------

inis();

	 	

//ANCHO------------------------------------	
if(ww>900){$('#bot1').css({'left':w2});}    
//LARGO-------------------------------------
if(wh>600){$('#bot1').css({'top':h2});}

//------------------------------------------------------------------------------------------
$('#autor').click(function() {	
	if(aut==false){
	  aut=true;
	  e=true;$('#ee0').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo);  
	  a=true;$('#aa0').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
	  b=true;$('#bb0').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
	  c=true;$('#cc0').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
   }else{
	  e=false;$('#ee0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	  a=false;$('#aa0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	  b=false;$('#bb0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	  c=false;$('#cc0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	  aut=false;  	 
   }
});

//------------------------------------------------------------------------------------------

$('#ee').click(function() {
if(e==false){
	  e=true;$('#ee0').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
}else{
	  e=false;$('#ee0').animate({'opacity':'0'},velo).css({'display':'none'}); 
}
});

//-----------------------------

$('.sec_todas').click(function() {
    e=false;$('#ee0').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('.sec_todas2').click(function() {

 $('#cont').animate({'top':'0','left':'0'},velo);	

 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 

 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 

 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

//------------------------------------------------------------------------------------------




//-------------------------
//-------------------------



//------------------------------
$('#aa').click(function() {	
	if(a==false){
	  a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
	  b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	  c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	}else{
	  a=false;$('#aa0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	}
});


//------------------

$('#a_bot1').click(function() {	
 a1=true;$('#aa1').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'-380px','left':'800px'},velo);	
 $('#aa1_bot').css({'z-index':'99'});

 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#aa1_bot').click(function() {	
 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa1_menu2a').click(function() {	
 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa1_menu2b').click(function() {	
 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#aa1_menu2c').click(function() {	
 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

//------------------

$('#a_bot3').click(function() {	
 a2=true;$('#aa2').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'120px','left':'-600px'},velo);	
  $('#aa2_bot').css({'z-index':'99'});

 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#aa2_bot').click(function() {	
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa2_menu2a').click(function() {	
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa2_menu2b').click(function() {	
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#aa2_menu2c').click(function() {	
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

//------------------

$('#a_bot4').click(function() {	
 a3=true;$('#aa3').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'300px','left':'-400px'},velo);	
  $('#aa3_bot').css({'z-index':'99'});

 a1=false;$('#aa1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a2=false;$('#aa2').animate({'opacity':'0'},velo).css({'display':'none'}); 

});

$('#aa3_bot').click(function() {	
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa3_menu2a').click(function() {	
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#aa3_menu2b').click(function() {	
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#aa3_menu2c').click(function() {	
 a3=false;$('#aa3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});


//-----------------------------------------------------------------------------------------




//-------------------------
//-------------------------




//-------------------------
$('#bb').click(function() {	
	if(b==false){
	  b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
	  a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	  c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	}else{
	  b=false;$('#bb0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	}
});

//--------------------

$('#b_bot1').click(function() {	
 b1=true;$('#bb1').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'50px','left':'-600px'},velo);
 $('#bb1_bot').css({'z-index':'99'});

 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#bb1_bot').click(function() {	
 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb1_menu2a').click(function() {	
 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#bb1_menu2b').click(function() {	
 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb1_menu2c').click(function() {	
 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});


//--------------------

$('#b_bot3').click(function() {	
 b2=true;$('#bb2').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'110px','left':'-700px'},velo);
 $('#bb2_bot').css({'z-index':'99'});

 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#bb2_bot').click(function() {	
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb2_menu2a').click(function() {	
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#bb2_menu2b').click(function() {	
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb2_menu2c').click(function() {	
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

//--------------------

$('#b_bot4').click(function() {	
 b3=true;$('#bb3').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'250px','left':'-650px'},velo);
 $('#bb3_bot').css({'z-index':'99'});

 b1=false;$('#bb1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b2=false;$('#bb2').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#bb3_bot').click(function() {	
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb3_menu2a').click(function() {	
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#bb3_menu2b').click(function() {	
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#bb3_menu2c').click(function() {	
 b3=false;$('#bb3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});


//-----------------------------------------------------------------------------------------




//-------------------------
//-------------------------




//-------------------------
$('#cc').click(function() {	
if(c==false){
	  c=true;$('#cc0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
	  a=false;$('#aa0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	  b=false;$('#bb0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
	}else{
	  c=false;$('#cc0').animate({'opacity':'0'},velo).css({'display':'none'}); 
	}
});

//----------------

$('#c_bot1').click(function() {	
 c1=true;$('#cc1').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'-90px','left':'-700px'},velo);
 $('#cc1_bot').css({'z-index':'99'});

 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#cc1_bot').click(function() {	
 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#cc1_menu2a').click(function() {	
 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc1_menu2b').click(function() {	
 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc1_menu2c').click(function() {	
 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

//---------------------

$('#c_bot3').click(function() {	
 c2=true;$('#cc2').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'110px','left':'-800px'},velo);
 $('#cc2_bot').css({'z-index':'99'});

 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#cc2_bot').click(function() {	
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#cc2_menu2a').click(function() {	
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc2_menu2b').click(function() {	
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc2_menu2c').click(function() {	
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});


//---------------------

$('#c_bot4').click(function() {	
 c3=true;$('#cc3').css({'display':'block','opacity':'0'}).animate({'opacity':'1'},velo); 
 $('#cont').animate({'top':'250px','left':'-750px'},velo);
 $('#cc3_bot').css({'z-index':'99'});

 c1=false;$('#cc1').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c2=false;$('#cc2').animate({'opacity':'0'},velo).css({'display':'none'}); 
});

$('#cc3_bot').click(function() {	
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
});

$('#cc3_menu2a').click(function() {	
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 a=true;$('#aa0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc3_menu2b').click(function() {	
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 c=false;$('#cc0').css({'z-index':'98'}).animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);	
 b=true;$('#bb0').css({'display':'block','opacity':'0','z-index':'99'}).animate({'opacity':'1'},velo); 
});

$('#cc3_menu2c').click(function() {	
 c3=false;$('#cc3').animate({'opacity':'0'},velo).css({'display':'none'}); 
 $('#cont').animate({'top':'0','left':'0'},velo);
});




//--------------------------------












$(".group1").colorbox({'rel':'group1', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group2").colorbox({'rel':'group2', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group3").colorbox({'rel':'group3', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------

$(".group4").colorbox({'rel':'group4', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group5").colorbox({'rel':'group5', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group6").colorbox({'rel':'group6', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------

$(".group7").colorbox({'rel':'group7', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group8").colorbox({'rel':'group8', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------
$(".group9").colorbox({'rel':'group9', 'transition':"none", 'width':"100%", 'height':"100%", 'z-index':'9999'});  //imagen FULL SCREEN---------------------------

}); // FIN -------------------------------------------------------------