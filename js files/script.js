// login page 
function validLogin(){
    var email = document.getElementById("mail").value ;
    var pass = document.getElementById("password").value ;

    // validation 
    if( email === "jr.dev101@gmail.com" && pass === "123456#"){
        window.location.href = "wallet.html";
    }else{
        alert("Invalid email or password. Please try again.");
    }
}

// try button
document.getElementById('icon').addEventListener('click', function () {
    var iconElement = document.querySelector('.icon');
    var tryText = document.getElementById('try-text');

    // Add a CSS class to initiate the sliding animation
    iconElement.classList.add('slide-right-animation' , 'rounded-md');
    tryText.classList.add('rounded-md')

    // Optionally, remove the class after the animation duration to allow for repeated clicks
    setTimeout(function () {
        iconElement.classList.remove('slide-right-animation');
    }, 1000); // Adjust the duration (in milliseconds) based on your transition duration
});