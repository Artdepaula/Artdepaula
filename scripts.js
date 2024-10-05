function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const plan = document.getElementById('plan').value;

    alert(`Obrigado por se inscrever, ${name}! Você escolheu o plano ${plan.toUpperCase()}. Entraremos em contato em breve pelo email: ${email}`);

    // Aqui você pode integrar com uma ferramenta de email, WhatsApp, ou enviar as informações para um banco de dados.
    window.location.href = 'https://api.whatsapp.com/send?phone=SEU_NUMERO&text=Olá%20me%20inscrevi%20no%20VIP%20Pass!';
}
