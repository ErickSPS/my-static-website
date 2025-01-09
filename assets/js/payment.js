// Comment out Stripe initialization until you have keys
// const stripe = Stripe('your_publishable_key');
// const elements = stripe.elements();

// Instead, add basic form validation
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Show loading state
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
        showMessage('This is a test message. Set up Stripe account to process real payments.');
        setLoading(false);
    }, 2000);
});

// Helper functions
function setLoading(isLoading) {
    if (isLoading) {
        document.querySelector('#submit-button').disabled = true;
        document.querySelector('#spinner').classList.remove('hidden');
        document.querySelector('#button-text').classList.add('hidden');
    } else {
        document.querySelector('#submit-button').disabled = false;
        document.querySelector('#spinner').classList.add('hidden');
        document.querySelector('#button-text').classList.remove('hidden');
    }
}

function showMessage(messageText) {
    const messageElement = document.getElementById('payment-message');
    messageElement.classList.remove('hidden');
    messageElement.textContent = messageText;
}

function showError(errorText) {
    const errorElement = document.getElementById('card-errors');
    errorElement.textContent = errorText;
} 