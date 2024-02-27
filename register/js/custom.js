var base_url = 'http://localhost/G-Stox/register/';
jQuery(document).ready(function(){
    var timer;
    var timerDuration = 10000; // 60000 1 minute in milliseconds
    var timerText = '00:10'; //1:00
    jQuery(".step-btn-1").click(function(){
        signup_mobile_number = jQuery('#signup_mobile_number').val();
        if (signup_mobile_number === "") {
            alert("Please Enter mobile number");
            return false;
        } else if (signup_mobile_number.length === 10) {

        } else {
            alert("mobile number must contain exactly 10 characters.");
            return false;
        }
        action_type = 'mobile_opt_send';
        jQuery.ajax({
            type: "POST",
            url: base_url+"call_ajax.php",
            dataType: "json",
            data: {
                mobile_number: signup_mobile_number,
                action_type: action_type
            },
            success: function(data){
                if(data.status == 'success'){
                    jQuery('#valid_signup_mobile_number').val(signup_mobile_number);
                    jQuery('#valid_mobile_opt').val(data.return_value);
                    jQuery(".step-1").hide();
                    jQuery(".step-1_1").show();
                    clearTimeout(timer);
                    jQuery('#mobile_number-resend-time').text(timerText);
                    jQuery("#resend-mobile_number-text").css("display", "none");
                    var startTime = Date.now();
                    timer = setInterval(function () {
                        var elapsedTime = Date.now() - startTime;
                        var timeRemaining = timerDuration - elapsedTime;
                        var timeString = formatTime(timeRemaining);
                        jQuery('#mobile_number-resend-time').text(timeString);
                        if (timeRemaining <= 0) {
                            clearInterval(timer);
                            jQuery('#mobile_number-resend-time').text("");
                            jQuery("#resend-mobile_number-text").css("display", "block");
                        }
                    }, 1000);
                }else{
                    alert(data.msg);
                }    
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('textStatus : ' + textStatus);
                console.log('errorMessage : ' + errorMessage);
            }
        });
    });
    jQuery("#change-mobile-number").click(function(){
        jQuery(".step-1").show();
        jQuery(".step-1_1").hide();
        var timer;
        clearTimeout(timer);
        jQuery('#mobile_number-resend-time').text('');
        jQuery("#resend-mobile_number-text").css("display", "none");
    });
    jQuery("#resend-mobile_number-text").click(function(){
        signup_mobile_number = jQuery('#signup_mobile_number').val();
        action_type = 'mobile_opt_send';
        jQuery.ajax({
            type: "POST",
            url: base_url+"call_ajax.php",
            dataType: "json",
            data: {
                mobile_number: signup_mobile_number,
                action_type: action_type
            },
            success: function(data){
                if(data.status == 'success'){
                    jQuery('#valid_signup_mobile_number').val(signup_mobile_number);
                    jQuery('#valid_mobile_opt').val(data.return_value);
                    clearTimeout(timer);
                    jQuery('#mobile_number-resend-time').text(timerText);
                    jQuery("#resend-mobile_number-text").css("display", "none");
                    var startTime = Date.now();
                    timer = setInterval(function () {
                        var elapsedTime = Date.now() - startTime;
                        var timeRemaining = timerDuration - elapsedTime;
                        var timeString = formatTime(timeRemaining);
                        jQuery('#mobile_number-resend-time').text(timeString);
                        if (timeRemaining <= 0) {
                            clearInterval(timer);
                            jQuery('#mobile_number-resend-time').text("");
                            jQuery("#resend-mobile_number-text").css("display", "block");
                        }
                    }, 1000);
                }else{
                    alert(data.msg);
                }    
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('textStatus : ' + textStatus);
                console.log('errorMessage : ' + errorMessage);
            }
        });
    });

    jQuery(".step-btn-1_1").click(function(){
        valid_mobile_opt = jQuery('#valid_mobile_opt').val();
        mobile_first = jQuery('#mobile_first').val();
        mobile_second = jQuery('#mobile_second').val();
        mobile_third = jQuery('#mobile_third').val();
        mobile_fourth = jQuery('#mobile_fourth').val();
        if(mobile_first == '' || mobile_second == '' || mobile_third == '' || mobile_fourth == ''){
            alert("Please Enter OTP");
            return false;
        }
        otp_val = mobile_first + mobile_second + mobile_third + mobile_fourth;
        if (otp_val != valid_mobile_opt) {
            alert("You have entered wrong OTP");
            return false;
        }else{
            jQuery(".step-1_1").hide();
            jQuery(".step-2").show();
            jQuery(".step-1-img").hide();
            jQuery(".step-2-img").show();
        }    
    });
    jQuery(".step-btn-2").click(function(){
        signup_email = jQuery('#signup_email').val();
        if (signup_email === "") {
            alert("Please Enter email");
            return false;
        }else if (IsEmail(signup_email) === false) {
            alert("Entered Email is not Valid!!");
            return false;
        }
        action_type = 'email_opt_send';
        jQuery.ajax({
            type: "POST",
            url: base_url+"call_ajax.php",
            dataType: "json",
            data: {
                email: signup_email,
                action_type: action_type
            },
            success: function(data){
                if(data.status == 'success'){
                    jQuery('#valid_signup_email').val(signup_email);
                    jQuery('#valid_email_opt').val(data.return_value);
                   jQuery(".step-2").hide();
                    jQuery(".step-2_2").show();
                    clearTimeout(timer);
                    jQuery('#email-resend-time').text(timerText);
                    jQuery("#resend-email-text").css("display", "none");
                    var startTime = Date.now();
                    timer = setInterval(function () {
                        var elapsedTime = Date.now() - startTime;
                        var timeRemaining = timerDuration - elapsedTime;
                        var timeString = formatTime(timeRemaining);
                        jQuery('#email-resend-time').text(timeString);
                        if (timeRemaining <= 0) {
                            clearInterval(timer);
                            jQuery('#email-resend-time').text("");
                            jQuery("#resend-email-text").css("display", "block");
                        }
                    }, 1000);
                }else{
                    alert(data.msg);
                }    
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('textStatus : ' + textStatus);
                console.log('errorMessage : ' + errorMessage);
            }
        });
        // jQuery(".step-1-img").hide();
        // jQuery(".step-2-img").show();
    });
    jQuery("#change-email-number").click(function(){
        jQuery(".step-2").show();
        jQuery(".step-2_2").hide();
        var timer;
        clearTimeout(timer);
        jQuery('#email-resend-time').text('');
        jQuery("#resend-email-text").css("display", "none");
    });
    jQuery("#resend-email-text").click(function(){
        signup_email = jQuery('#signup_email').val();
        action_type = 'email_opt_send';
        jQuery.ajax({
            type: "POST",
            url: base_url+"call_ajax.php",
            dataType: "json",
            data: {
                email: signup_email,
                action_type: action_type
            },
            success: function(data){
                if(data.status == 'success'){
                    jQuery('#valid_signup_email').val(signup_email);
                    jQuery('#valid_email_opt').val(data.return_value);
                    clearTimeout(timer);
                    jQuery('#email-resend-time').text(timerText);
                    jQuery("#resend-email-text").css("display", "none");
                    var startTime = Date.now();
                    timer = setInterval(function () {
                        var elapsedTime = Date.now() - startTime;
                        var timeRemaining = timerDuration - elapsedTime;
                        var timeString = formatTime(timeRemaining);
                        jQuery('#email-resend-time').text(timeString);
                        if (timeRemaining <= 0) {
                            clearInterval(timer);
                            jQuery('#email-resend-time').text("");
                            jQuery("#resend-email-text").css("display", "block");
                        }
                    }, 1000);
                }else{
                    alert(data.msg);
                }    
            },
            error: function (jqXhr, textStatus, errorMessage) {
                console.log('textStatus : ' + textStatus);
                console.log('errorMessage : ' + errorMessage);
            }
        });
    });
    jQuery(".step-btn-2_2").click(function(){
        valid_email_opt = jQuery('#valid_email_opt').val();
        email_first = jQuery('#email_first').val();
        email_second = jQuery('#email_second').val();
        email_third = jQuery('#email_third').val();
        email_fourth = jQuery('#email_fourth').val();
        if(email_first == '' || email_second == '' || email_third == '' || email_fourth == ''){
            alert("Please Enter OTP");
            return false;
        }
        otp_val = email_first + email_second + email_third + email_fourth;
        if (otp_val != valid_email_opt) {
            alert("You have entered wrong OTP");
            return false;
        }else{
            jQuery(".step-2_2").hide();
            jQuery(".step-3").show();
            jQuery(".step-2-img").hide();
            jQuery(".step-3-img").show();
        } 
        
    });
    jQuery(".step-btn-3").click(function(){
        jQuery(".step-3").hide();
        jQuery(".step-4").show();
        jQuery(".step-3-img").hide();
        jQuery(".step-4-img").show();
    });
    jQuery(".step-btn-4").click(function(){
        jQuery(".step-4").hide();
        jQuery(".step-5").show();
        jQuery(".step-4-img").hide();
        jQuery(".step-5-img").show();
    });
    jQuery(".step-btn-5").click(function(){
        jQuery(".step-5").hide();
        jQuery(".step-6").show();
        jQuery(".step-5-img").hide();
        jQuery(".step-6-img").show();
    });
    jQuery(".step-btn-6").click(function(){
        jQuery(".step-6").hide();
        jQuery(".step-7").show();
        jQuery(".step-6-img").hide();
        jQuery(".step-7-img").show();
    });
    jQuery(".step-btn-7").click(function(){
        jQuery(".step-7").hide();
        jQuery(".step-8").show();
        jQuery(".step-7-img").hide();
        jQuery(".step-8-img").show();
    });
    jQuery(".step-btn-8").click(function(){
        jQuery(".step-8").hide();
        jQuery(".step-9").show();
        jQuery(".step-8-img").hide();
        jQuery(".step-9-img").show();
    });
    jQuery(".step-btn-9").click(function(){
        jQuery(".step-9").hide();
        jQuery(".step-10").show();
        jQuery(".step-9-img").hide();
        jQuery(".step-10-img").show();
    });
    jQuery(".step-btn-10").click(function(){
        jQuery(".step-10").hide();
        jQuery(".step-11").show();
        jQuery(".step-10-img").hide();
        jQuery(".step-11-img").show();
    });
    jQuery(".step-btn-11").click(function(){
        jQuery(".step-11").hide();
        jQuery(".step-12").show();
        jQuery(".step-11-img").hide();
        jQuery(".step-12-img").show();
    });
    jQuery(".step-btn-12").click(function(){
        jQuery(".step-12").hide();
        jQuery(".step-13").show();
        jQuery(".step-12-img").hide();
        jQuery(".step-13-img").show();
    });
    jQuery(".step-btn-13").click(function(){
        jQuery(".step-13").hide();
        jQuery(".step-14").show();
        jQuery(".step-13-img").hide();
        jQuery(".step-14-img").show();
    });
    jQuery(".step-btn-14").click(function(){
        jQuery(".step-14").hide();
        jQuery(".step-15").show();
        jQuery(".step-14-img").hide();
        jQuery(".step-15-img").show();
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
    function formatTime(milliseconds) {
        var seconds = Math.floor(milliseconds / 1000);
        var minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        var timeString = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
        return timeString;
    }
});
function IsEmail(email) {
            const regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }
function movetoNextMobile(current, nextFieldID) {
    if (current.value.length >= current.maxLength) {
        if(nextFieldID == 'mobile_fifth'){
            jQuery('.step-btn-1_1').focus();
        }else{
            document.getElementById(nextFieldID).focus();
            document.getElementById(nextFieldID).value = '';
        }    
    }
}
function movetoNextEmail(current, nextFieldID) {
    if (current.value.length >= current.maxLength) {
        if(nextFieldID == 'email_fifth'){
            jQuery('.step-btn-2_2').focus();
        }else{
            document.getElementById(nextFieldID).focus();
            document.getElementById(nextFieldID).value = '';
        }    
    }
}
function currentfocus(current, currentFieldID){
    document.getElementById(currentFieldID).value = '';
}
function fun_back_btn(show_step,hide_step){
    jQuery("."+show_step).show();
    jQuery("."+hide_step).hide();
}
function fun_all_submit(){
    frm_step_1 = jQuery('#frm_step_1').serialize();
    frm_step_1_1 = jQuery('#frm_step_1_1').serialize();
    frm_step_2 = jQuery('#frm_step_2').serialize();
    frm_step_2_2 = jQuery('#frm_step_2_2').serialize();
    frm_step_3 = jQuery('#frm_step_3').serialize();
    frm_step_4 = jQuery('#frm_step_4').serialize();
    frm_step_5 = jQuery('#frm_step_5').serialize();
    frm_step_6 = jQuery('#frm_step_6').serialize();
    frm_step_7 = jQuery('#frm_step_7').serialize();
    frm_step_8 = jQuery('#frm_step_8').serialize();
    frm_step_9 = jQuery('#frm_step_9').serialize();
    frm_step_10 = jQuery('#frm_step_10').serialize();
    frm_step_11 = jQuery('#frm_step_11').serialize();
    frm_step_12 = jQuery('#frm_step_12').serialize();
    frm_step_13 = jQuery('#frm_step_13').serialize();
    frm_step_14 = jQuery('#frm_step_14').serialize();
    frm_step_15 = jQuery('#frm_step_15').serialize();
    action_type = 'all_submit';
    jQuery.ajax({
        type: "POST",
        url: base_url+"call_ajax.php",
        dataType: "json",
        data: {
            action_type: action_type,
            frm_step_1 : frm_step_1,
            frm_step_1_1 : frm_step_1_1,
            frm_step_2 : frm_step_2,
            frm_step_2_2 : frm_step_2_2,
            frm_step_3 : frm_step_3,
            frm_step_4 : frm_step_4,
            frm_step_5 : frm_step_5,
            frm_step_6 : frm_step_6,
            frm_step_7 : frm_step_7,
            frm_step_8 : frm_step_8,
            frm_step_9 : frm_step_9,
            frm_step_10 : frm_step_10,
            frm_step_11 : frm_step_11,
            frm_step_12 : frm_step_12,
            frm_step_13 : frm_step_13,
            frm_step_14 : frm_step_14,
            frm_step_15 : frm_step_15,
        },
        success: function(data){
            if(data.status == 'success'){
                
            }else{
                jQuery('.step_block').hide();
                jQuery('.'+data.enable_step).show();
                alert(data.msg);
            }    
        },
        error: function (jqXhr, textStatus, errorMessage) {
            console.log('textStatus : ' + textStatus);
            console.log('errorMessage : ' + errorMessage);
        }
    });
}