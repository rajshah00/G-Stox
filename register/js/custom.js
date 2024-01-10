jQuery(document).ready(function(){
    jQuery(".step-btn-1").click(function(){
        jQuery(".step-1").hide();
        jQuery(this).hide();
        jQuery(".step-2").show();
    });
    jQuery(".step-btn-2").click(function(){
        jQuery(".step-2").hide();
        jQuery(".step-3").show();
        jQuery(".step-1-img").hide();
        jQuery(".step-2-img").show();
    });
    jQuery(".step-btn-3").click(function(){
        jQuery(".step-3").hide();
        jQuery(".step-4").show();
        jQuery(".step-1-img").hide();
        jQuery(".step-2-img").show();

    });
    jQuery(".step-btn-4").click(function(){
        jQuery(".step-4").hide();
        jQuery(".step-5").show();
        jQuery(".step-2-img").hide();
        jQuery(".step-3-img").show();

    });
});