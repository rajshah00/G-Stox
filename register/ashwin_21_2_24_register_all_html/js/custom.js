jQuery(document).ready(function(){
    jQuery(".step-btn-1").click(function(){
        jQuery(".step-1").hide();
        jQuery(".step-1_1").show();
    });
    jQuery(".step-btn-1_1").click(function(){
        jQuery(".step-1_1").hide();
        jQuery(".step-2").show();
    });
    jQuery(".step-btn-2").click(function(){
        jQuery(".step-2").hide();
        jQuery(".step-2_2").show();
    });
    jQuery(".step-btn-2_2").click(function(){
        jQuery(".step-2_2").hide();
        jQuery(".step-3").show();
    });
    jQuery(".step-btn-3").click(function(){
        jQuery(".step-3").hide();
        jQuery(".step-4").show();
    });
    jQuery(".step-btn-4").click(function(){
        jQuery(".step-4").hide();
        jQuery(".step-5").show();

    });
    jQuery(".step-btn-5").click(function(){
        jQuery(".step-5").hide();
        jQuery(".step-6").show();
    });
    jQuery(".step-btn-6").click(function(){
        jQuery(".step-6").hide();
        jQuery(".step-7").show();

    });
    jQuery(".step-btn-7").click(function(){
        jQuery(".step-7").hide();
        jQuery(".step-8").show();

    });
    jQuery(".step-btn-8").click(function(){
        jQuery(".step-8").hide();
        jQuery(".step-9").show();
    });
    jQuery(".step-btn-9").click(function(){
        jQuery(".step-9").hide();
        jQuery(".step-10").show();
    });
    jQuery(".step-btn-10").click(function(){
        jQuery(".step-10").hide();
        jQuery(".step-11").show();

    });
    jQuery(".step-btn-11").click(function(){
        jQuery(".step-11").hide();
        jQuery(".step-12").show();

    });
    jQuery(".step-btn-12").click(function(){
        jQuery(".step-12").hide();
        jQuery(".step-13").show();

    });
    jQuery(".step-btn-13").click(function(){
        jQuery(".step-13").hide();
        jQuery(".step-14").show();
    });
    jQuery(".step-btn-14").click(function(){
        jQuery(".step-14").hide();
        jQuery(".step-15").show();
    });
    jQuery(".step-btn-15").click(function(){
        alert('Success')
    });
     jQuery(".nominee-yes-btn").click(function(){
        jQuery(".nominee-no-block").hide();
        jQuery(".nominee-yes-block").show();
         jQuery(".nominee-yes-no-block").addClass("active");
        
        
    });
      jQuery(".nominee-no-btn").click(function(){
        jQuery(".nominee-yes-block").hide();
        jQuery(".nominee-no-block").show();
        jQuery(".nominee-yes-no-block").removeClass("active");

    });

    //jQuery( ".step-btn-10" ).trigger( "click" );
});
