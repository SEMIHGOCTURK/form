document.getElementById('submit-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value;
    const password = passwordInput.value;
    const errorMsg = document.getElementById('error-msg');

    let errorMessage = '';

    if (!email) {
        errorMessage += 'Email alanı boş geçilemez. ';
    } else if (!email.includes('@')) {
        errorMessage += 'Email geçerli olmalıdır (örn. example@mail.com). ';
    }

    if (!password) {
        errorMessage += 'Şifre alanı boş geçilemez. ';
    }

    if (errorMessage) {
        errorMsg.textContent = errorMessage;
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        alert('Form başarıyla gönderildi!');
        
        // Alanları boşalt
        emailInput.value = '';
        passwordInput.value = '';
    }
});
