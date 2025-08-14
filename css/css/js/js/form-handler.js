// Formulário de contato
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Mostra mensagem de carregamento
    formStatus.textContent = 'Enviando mensagem...';
    formStatus.style.color = '#333';
    
    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
            formStatus.style.color = '#4CAF50';
            contactForm.reset();
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    } catch (error) {
        console.error('Error:', error);
        formStatus.textContent = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
        formStatus.style.color = '#ff6b6b';
    }
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});
