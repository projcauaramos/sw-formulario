document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    const cpfRegex = /^\d{11}$/;

    if (nome === "") {
        alert("Por favor, preencha o nome completo.");
        event.preventDefault();
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        event.preventDefault();
        return;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um telefone válido. Ex: (11) 91111-2222");
        event.preventDefault();
        return;
    }

    if (!cpfRegex.test(cpf)) {
        alert("O CPF deve conter exatamente 11 números, sem pontos ou traços.");
        event.preventDefault();
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        event.preventDefault();
        return;
    }

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem. Verifique novamente.");
        event.preventDefault();
        return;
    }

    alert("Cadastro realizado com sucesso!");
    event.preventDefault();
});
