var purple_pallet = document.getElementById('purple-pallet');
var orange_pallet = document.getElementById('orange-pallet');
var light_green_pallet = document.getElementById('light-green-pallet');
var navyblue_pallet = document.getElementById('navy-blue-pallet');
var pink_pallet = document.getElementById('pink-pallet');
var grey_pallet = document.getElementById('grey-pallet');
var light_purple_pallet = document.getElementById('light-purple-pallet');

var pallet = document.querySelectorAll('.color-pallets');


var root = document.querySelector(':root');
var rootp = getComputedStyle(root);

var formValidation = false;







purple_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#907fa4');
    root.style.setProperty('--btnhovercolor' , '#a578da');
    // pallet.style.border = 'none';
    // //purple_pallet.style.border = '3px solid #000';
    // pallet.style.border = '3px solid #000';
    pallet[0].style.border = '3px solid #000';
    for(var i=1;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

orange_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#ff7b54');
    root.style.setProperty('--btnhovercolor' , '#e5b0a0');
    pallet[0].style.border = 'none';
    pallet[1].style.border = '3px solid #000';
    for(var i=2;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

light_green_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#9fe6a0');
    pallet[0].style.border = 'none';
    pallet[1].style.border = 'none';
    pallet[2].style.border = '3px solid #000';
    for(var i=3;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

navyblue_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#34656d');
    pallet[0].style.border = 'none';
    pallet[1].style.border = 'none';
    pallet[2].style.border = 'none';
    pallet[3].style.border = '3px solid #000';
    for(var i=4;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

pink_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#ff75a0');
    pallet[0].style.border = 'none';
    pallet[1].style.border = 'none';
    pallet[2].style.border = 'none';
    pallet[3].style.border = 'none';
    pallet[4].style.border = '3px solid #000';
    for(var i=5;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

grey_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#bbbfca');
    pallet[0].style.border = 'none';
    pallet[1].style.border = 'none';
    pallet[2].style.border = 'none';
    pallet[3].style.border = 'none';
    pallet[4].style.border = 'none';
    pallet[5].style.border = '3px solid #000';
    for(var i=6;i<pallet.length;i++){
        pallet[i].style.border = 'none';
    }
})

light_purple_pallet.addEventListener('click' , function(){
    root.style.setProperty('--color' , '#d8b9c3');
    pallet[0].style.border = 'none';
    pallet[1].style.border = 'none';
    pallet[2].style.border = 'none';
    pallet[3].style.border = 'none';
    pallet[4].style.border = 'none';
    pallet[5].style.border = 'none';
    pallet[6].style.border = '3px solid #000';
   
})



var fullName = '';
var email = '';
var password = '';
var gender = 'select';

var full_name_input = document.getElementById('fullname-box');
full_name_input.addEventListener('input' , function(event){
    var fname = event.target.value;
    var namepattern = /^[a-zA-Z\d\s]{5,40}$/g
    if(namepattern.test(fname)){
        document.getElementById('name-error').style.display = 'none'
        formValidation = true;
        fullName = fname;
    }else{
        document.getElementById('name-error').style.display = 'inline-block'
        formValidation = false;
        fullName = '';
    }
})

document.getElementById('email-box').addEventListener('input' , function(event){
    var namepattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g
    if(namepattern.test(event.target.value)){
        document.getElementById('email-error').style.display = 'none'
        formValidation = true;
        email = event.target.value;
    }else{
        document.getElementById('email-error').style.display = 'inline-block'
        formValidation = false;
        email = '';
    }
})

function changeErrorStylesGreen(errorName , iconName){
    errorName.style.color = '#85d92a';  //green
    iconName.classList.remove('fa-times-circle');
    iconName.classList.add('fa-check-circle');
}
function changeErrorStylesRed(errorName , iconName){
    errorName.style.color = 'red';
    iconName.classList.add('fa-times-circle');
    iconName.classList.remove('fa-check-circle');
}

var passwordText = "";
var inputTemp = "";

document.getElementById('password-box').addEventListener('input' , function(event){
    var input = event.target.value;
    var validation = false;
    var char8Error =  document.getElementById('char8-error');
    var num1Error = document.getElementById('num1-error');
    var cap1Error = document.getElementById('cap1-error');
    var specialCharError =   document.getElementById('special-char-error');
    if(input.length>0){
        char8Error.style.display = 'block';
        num1Error.style.display = 'block';
        cap1Error.style.display = 'block';
        specialCharError.style.display = 'block';
    }else{
        char8Error.style.display = 'none';
        num1Error.style.display = 'none';
        cap1Error.style.display = 'none';
        specialCharError.style.display = 'none';
    }
    document.getElementById('password-errors-div').style.display = 'block'
    if((/^[\w@_-]{8,20}$/g).test(input)){ //length validation
        changeErrorStylesGreen(char8Error , document.getElementById('char8-icon'))
        validation = true;
        formValidation = true;
    }else{
        changeErrorStylesRed(char8Error ,document.getElementById('char8-icon'));
        validation = false;
        formValidation = false;
    }

    if((/[\d]{1,10}/g).test(input)){ //number validation
        changeErrorStylesGreen(num1Error , document.getElementById('num1-icon'))
        validation = true;
        formValidation = true;
    }else{
        changeErrorStylesRed(num1Error ,document.getElementById('num1-icon') )
        validation = false;
        formValidation = false;
    }

    if((/[A-Z]{1,10}/g).test(input)){ //capital validation
        changeErrorStylesGreen(cap1Error , document.getElementById('cap1-icon'))
        validation = true;
        formValidation = true;
    }else{
        changeErrorStylesRed(cap1Error ,document.getElementById('cap1-icon') )
        validation = false;
        formValidation = false;
    }

     //character validation
    if((/[@_-]/).test(input)){
        changeErrorStylesGreen(specialCharError , document.getElementById('cap1-icon'))
        validation = true;
        formValidation = true;
    }
    else{
        changeErrorStylesRed(specialCharError ,document.getElementById('cap1-icon') )
        validation = false;
        formValidation = false;
    }

    if(validation){
        inputTemp = input;
        //console.log(passwordText);
    }else{
        inputTemp = '';
    }
})

document.getElementById('re-password-box').addEventListener('input' , function(event){
    passwordText = inputTemp;
    if(passwordText.toString().length>0){
        var reInput = event.target.value;
        if(passwordText === reInput){
            document.getElementById('repass-error').style.display = 'none'
            formValidation = true;
            password = reInput;
        }else{
            document.getElementById('repass-error').style.display = 'block'
            formValidation = false;
            password = '';
        }
    }else{
        document.getElementById('repass-error').style.display = 'block'
        formValidation = false;
        password = '';
    }
})




// document.getElementById('sign-up-btn').addEventListener('mouseenter',  function(event){
//     gender = document.getElementById('gender-selector').value;
//     if(formValidation && fullName.length>0 && email.length>0 && password.length>0 && gender != 'select'){
//         //alert('form submitted' + gender)
//         document.getElementById('sign-up-btn').disabled = true;
//     }else{
//         //event.preventDefault();
//         //alert('Please fill all fields' + gender)
//         document.getElementById('sign-up-btn').disabled = false;
//     }
// })



document.getElementById('sign-up-btn').addEventListener('click' , function(event){
    gender = document.getElementById('gender-selector').value;
    if(formValidation && fullName.length>0 && email.length>0 && password.length>0 && gender != 'select'){
        alert('Form submitted successfully.')
        document.getElementById('fields-error').style.display = 'none';
        document.getElementById('sign-up-form').submit();
        document.getElementById('sign-up-form').reset();
        
    }else{
        event.preventDefault();
        //alert('Please fill all fields' + gender)
        document.getElementById('fields-error').style.display = 'block'
    }
})