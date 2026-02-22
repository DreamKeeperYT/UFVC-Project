// signup.js

// Get elements
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const amountInput = document.getElementById('amount');
const coinPreview = document.getElementById('coinPreview');
const signupMessage = document.getElementById('signupMessage');

// Function to update coin preview dynamically
function updateCoinPreview() {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount >= 1) {
        const coins = Math.floor(amount * 0.99); // Apply 1% platform fee
        coinPreview.textContent = `You will receive ${coins} UFVCoin (1% platform fee applied)`;
    } else {
        coinPreview.textContent = 'You will receive 0 UFVCoin';
    }
}

// Listen for input changes
amountInput.addEventListener('input', updateCoinPreview);

// Form submission
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const amount = parseFloat(amountInput.value);

    // Basic validation
    if (!name || !email || !amount) {
        signupMessage.textContent = 'All fields are required.';
        signupMessage.style.color = 'red';
        return;
    }

    // Email validation
    if (!email.endsWith('@student.ufv.ca') && !email.endsWith('@ufv.ca')) {
        signupMessage.textContent = 'Please use a valid UFV email address.';
        signupMessage.style.color = 'red';
        return;
    }

    // Minimum investment check
    if (amount < 1) {
        signupMessage.textContent = 'Minimum investment is 1 CAD.';
        signupMessage.style.color = 'red';
        return;
    }

    // Success message
    const coins = Math.floor(amount * 0.99);
    signupMessage.textContent = `Welcome ${name}! You have successfully registered with UFVWealth and will receive ${coins} UFVCoin.`;
    signupMessage.style.color = 'green';

    // Reset form and update preview
    signupForm.reset();
    updateCoinPreview();
});

// Initialize preview on page load
updateCoinPreview();