// Get HTML elements
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const timerElement = document.getElementById('timer');

// Initialize variables
let intervalId;
let remainingSeconds;

// Start button click event handler
startButton.addEventListener('click', () => {
    // Get user input
    remainingSeconds = parseInt(secondsInput.value);

    // Validate input
    if (!isNaN(remainingSeconds) && remainingSeconds > 0) {
        // Start countdown
        startCountdown();
    } else {
        alert('Please enter a positive number of seconds.');
    }
});

// Start countdown function
function startCountdown() {
    // Update timer display
    updateTimerDisplay();

    // Set interval to decrement timer every second
    intervalId = setInterval(() => {
        remainingSeconds--;

        // Update timer display
        updateTimerDisplay();

        // Stop countdown when timer reaches 0
        if (remainingSeconds === 0) {
            clearInterval(intervalId);
            alert('Countdown finished!');
        }
    }, 1000); // 1000 milliseconds = 1 second
}

// Update timer display function
function updateTimerDisplay() {
    timerElement.textContent = `Timer: ${remainingSeconds} seconds`;
}


