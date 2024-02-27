<?php 
$action_type = isset($_POST['action_type']) ? $_POST['action_type'] : '';
$status = 'error';
$msg = 'NO Proper';
$enable_step = 'step_1';
$return_value = '';
if($action_type == 'mobile_opt_send'){
    $mobile_number = isset($_POST['mobile_number']) ? $_POST['mobile_number'] : '';
    if($mobile_number == ''){
        $msg = 'Please Enter mobile number';
    }else{
        $status = 'success';
        $msg = 'Succesfully';
        $return_value = substr(str_shuffle("0123456789"), 0, 4);
    }
}
if($action_type == 'email_opt_send'){
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    if($email == ''){
        $msg = 'Please Enter email';
    }else{
        $status = 'success';
        $msg = 'Succesfully';
        $return_value = substr(str_shuffle("0123456789"), 0, 4);
    }
}
if($action_type == 'all_submit'){
    $frm_step_1 = isset($_POST['frm_step_1']) ? $_POST['frm_step_1'] : '';
    parse_str($frm_step_1, $resultArray);
    $signup_mobile_number = isset($resultArray['signup_mobile_number']) ? $resultArray['signup_mobile_number'] : '';
    if ($signup_mobile_number == "") {
        $return_data['status'] = 'error';
        $return_data['msg'] = 'Please Enter mobile number';
        $return_data['enable_step'] = 'step-1';
        $return_data['return_value'] = '';
        echo json_encode($return_data);
        exit;
    } else if (strlen($signup_mobile_number) != 10) {
        $return_data['status'] = 'error';
        $return_data['msg'] = 'mobile number must contain exactly 10 characters';
        $return_data['enable_step'] = 'step-1';
        $return_data['return_value'] = '';
        echo json_encode($return_data);
        exit;
    }
    $frm_step_1_1 = isset($_POST['frm_step_1_1']) ? $_POST['frm_step_1_1'] : '';
    parse_str($frm_step_1_1, $resultArray);
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
    $frm_step_2 = isset($_POST['frm_step_2']) ? $_POST['frm_step_2'] : '';
    $frm_step_2_2 = isset($_POST['frm_step_2_2']) ? $_POST['frm_step_2_2'] : '';
    $frm_step_3 = isset($_POST['frm_step_3']) ? $_POST['frm_step_3'] : '';
    $frm_step_4 = isset($_POST['frm_step_4']) ? $_POST['frm_step_4'] : '';
    $frm_step_5 = isset($_POST['frm_step_5']) ? $_POST['frm_step_5'] : '';
    $frm_step_6 = isset($_POST['frm_step_6']) ? $_POST['frm_step_6'] : '';
    $frm_step_7 = isset($_POST['frm_step_7']) ? $_POST['frm_step_7'] : '';
    $frm_step_8 = isset($_POST['frm_step_8']) ? $_POST['frm_step_8'] : '';
    $frm_step_9 = isset($_POST['frm_step_9']) ? $_POST['frm_step_9'] : '';
    $frm_step_10 = isset($_POST['frm_step_10']) ? $_POST['frm_step_10'] : '';
    $frm_step_11 = isset($_POST['frm_step_11']) ? $_POST['frm_step_11'] : '';
    $frm_step_12 = isset($_POST['frm_step_12']) ? $_POST['frm_step_12'] : '';
    $frm_step_13 = isset($_POST['frm_step_13']) ? $_POST['frm_step_13'] : '';
    $frm_step_14 = isset($_POST['frm_step_14']) ? $_POST['frm_step_14'] : '';
    $frm_step_15 = isset($_POST['frm_step_15']) ? $_POST['frm_step_15'] : '';
    
    
    if($email == ''){
        $msg = 'Please Enter email';
    }else{
        $status = 'success';
        $msg = 'Succesfully';
        $return_value = substr(str_shuffle("0123456789"), 0, 4);
    }
}
$return_data['status'] = $status;
$return_data['msg'] = $msg;
$return_data['enable_step'] = $enable_step;
$return_data['return_value'] = $return_value;
echo json_encode($return_data);


