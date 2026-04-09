let userInput = prompt("Enter 4 digite code: ");
function myFunction (otp){
    let otpString = otp.toString();
    switch(otpString){
        case "1234": 
        case "5678":
        case "0000":
            console.log("Access granted");
            break;
        default:
            if(otpString === "9999"){
                console.log("OTP expired");;
            } else{
                console.log("Invalid OTP");
            }
    }
}
console.log(myFunction(userInput));

///Question on my versity mid exam:
let userInput = String(prompt("Enter the code"));
function checkCode(input){
    if(input==="ICE3205"){
        document.querySelector('#check').innerHTML = "<h3>Access Granted</h3>";
    }else{
         document.querySelector('#check').innerHTML = "<h3>Error code</h3>"
    }
}
document.write(checkCode(userInput));


