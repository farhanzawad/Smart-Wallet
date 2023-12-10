// login page 
// Check if the required elements exist
var emailInput = document.getElementById("mail");
var passwordInput = document.getElementById("password");

if (emailInput && passwordInput) {
    // Add event listener for Enter key on the password input
    passwordInput.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            validLogin();
        }
    });

    // Function to validate login
    function validLogin() {
        var email = emailInput.value;
        var pass = passwordInput.value;

        // Validation
        if (email === "jr.dev101@gmail.com" && pass === "123456#") {
            window.location.href = "wallet.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    }
} else {
    // Code to run if the required elements are not found
    console.log("One or more required elements not found.");
}


// try button
// Check if the element with id 'icon' exists
var iconElement = document.getElementById('icon');

if (iconElement) {
    iconElement.addEventListener('click', function () {
        var iconElement = document.querySelector('.icon');
        var tryText = document.getElementById('try-text');

        // Add a CSS class to initiate the sliding animation
        iconElement.classList.add('slide-right-animation', 'rounded-md');
        tryText.classList.add('rounded-md');

        // Optionally, remove the class after the animation duration to allow for repeated clicks
        setTimeout(function () {
            iconElement.classList.remove('slide-right-animation');
        }, 1000); // Adjust the duration (in milliseconds) based on your transition duration
    });
} else {
    // Code to run if the element with id 'icon' is not found
    console.log("Element with id 'icon' not found.");
}


document.addEventListener('DOMContentLoaded', function () {
    // Check if required elements exist
    const depoValueInput = document.getElementById('depoValue');
    const depoBtn = document.getElementById('depoBtn');
    const depoAmountSpan = document.getElementById('depoAmount');
    const curAmountSpan = document.getElementById('curAmount');

    const withValueInput = document.getElementById('withValue');
    const withBtn = document.getElementById('witBtn');
    const withAmountSpan = document.getElementById('withAmount');

    if (depoValueInput && depoBtn && depoAmountSpan && curAmountSpan &&
        withValueInput && withBtn && withAmountSpan) {

        // Initial balance
        let currentBalance = 0;

        // Deposit button click event
        depoBtn.addEventListener('click', function () {
            const depoValue = parseFloat(depoValueInput.value);
            if(!isNaN(depoValue) && depoValue >= 100000){
                confirm("Bangladesh Income Tax office wants to know your location. \nAllow location access?")
            }else{
                if (!isNaN(depoValue) && depoValue > 0) {
                    // Update deposit amount and current balance
                    depoAmountSpan.textContent = (parseFloat(depoAmountSpan.textContent) + depoValue).toFixed(2);
                    currentBalance += depoValue;
                    curAmountSpan.textContent = currentBalance.toFixed(2);
    
                    // Clear input
                    depoValueInput.value = '';
                }

            }
        });

        // Withdraw button click event
        withBtn.addEventListener('click', function () {
            const withValue = parseFloat(withValueInput.value);

            if (!isNaN(withValue) && withValue > 0) {
                if (withValue > currentBalance) {
                    // Insufficient funds to withdraw
                    alert('Not enough balance to withdraw.');
                } else {
                    // Update withdraw amount and current balance
                    withAmountSpan.textContent = (parseFloat(withAmountSpan.textContent) + withValue).toFixed(2);
                    currentBalance -= withValue;
                    curAmountSpan.textContent = currentBalance.toFixed(2);

                    // Clear input
                    withValueInput.value = '';
                }
            }
        });
    } else {
        // Code to run if the required elements are not found
        console.log("One or more required elements not found.");
    }
});


//mode toggle
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for user preference stored in localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');

        // Save user preference to localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

//message
if (window.location.href.includes('index.html')) {
    // Show confirmation message
    confirm('Welcome! We are using system default Light/Dark mode appearence. \n If you want to switch between Dark/Light modes, change your system appearence.');
}