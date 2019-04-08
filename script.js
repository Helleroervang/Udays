
//Første valgmulighed gruppearbejde
$(document).ready(function()
 {
    $('.indhold , .knapper').hide().delay(44000).fadeIn(2200);
    $('.indhold2 , .knapper2').hide().delay(82000).fadeIn(2200);
    $('.indhold3 , .knapper3').hide().delay(18000).fadeIn(2200);
    $('.indhold4 , .knapper4').hide().delay(11000).fadeIn(2200);
    $('.indhold5 , .knapper5').hide().delay(11000).fadeIn(2200);
    $('.indhold6 , .knapper6').hide().delay(6000).fadeIn(2200);
    $('.indhold7 , .knapper7').hide().delay(27000).fadeIn(2200);
    $('.indhold8 , .knapper8').hide().delay(11000).fadeIn(2200);
    $('.indhold9 , .knapper9').hide().delay(118000).fadeIn(2200);
    $('.indhold10 , .knapper10').hide().delay(42000).fadeIn(2200);
   $('.indhold , .knapper').delay(6000).fadeOut(2200);

    });


    $('.knapper , .indhold').click(function() {
        $("knapper")
        var i = $(this).index();
        $('.knapper , .indhold').delay(1000).fadeOut(2200);
        
   
      
    });
    
//Anden valgmulighed gruppearbejde
$(document).ready(function() {
    $('.indhold2 , .knapper2').hide().delay(82000).fadeIn(2200);
 

    });


    $('.knapper2 , .indhold2').click(function() {
        $("knapper2")
        var i = $(this).index();
        $('.knapper2 , .indhold2').delay(1000).fadeOut(2200);
        
   
      
    });
    

    var knapper2 = document.querySelector('.knapper2');

knapper2.onclick = function () {
 var red = Math.floor(Math.random() *255);
 this.style.backgroundColor = "#e14500";
};

//Tredje mulighed gruppearbejde
