document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    form.addEventListener('submit', (event) => {
        const firstName = document.getElementById('first_name').value.trim();
        const lastName = document.getElementById('last_name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple Email Validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return false;
        }

        // Password Strength Validation
        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and include a number.');
            event.preventDefault(); // Prevent form submission
            return false;
        }

        // Check if all fields are filled
        if (!firstName || !lastName || !email || !password) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
            return false;
        }

        // If everything's okay, allow form submission
        return true;
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const hasNumber = /\d/;
        return password.length >= 8 && hasNumber.test(password);
    }
});