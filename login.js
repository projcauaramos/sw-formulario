// Validação do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Valida o formato do e-mail
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
        return;
    }

    // Verifica se a senha não está vazia
    if (senha.length === 0) {
        alert("Por favor, insira sua senha.");
        event.preventDefault();
        return;
    }

    // Se passar nas validações, o formulário será enviado normalmente
    alert("Login realizado com sucesso!");
    event.preventDefault();
});