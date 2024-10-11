let count = 0;
const button = document.getElementById("click-button");
const counterDisplay = document.getElementById("counter");

function updateCounter(){
    counterDisplay.textContent = count;
}

button.addEventListener('click', ()=> {
            count++;
            updateCounter();
            
});

const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const submitBtn = document.getElementById("submit-btn");

emailInput.addEventListener('input', function() {
const emailValue = emailInput.value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
    
    errorMessage.style.display = "block";
    submitBtn.disabled = true;
    // Отобразите сообщение об ошибке и заблокируйте кнопку
} else {
    submitBtn.disabled = false;
    errorMessage.style.display = "none";
    // Скрывайте сообщение об ошибке и разблокируйте кнопку
}
});



let seconds = 0;
const timer = () => {
    const seconds1 = document.getElementById('seconds');
    seconds1.innerText = ++seconds;
}
setInterval(timer, 1000);

