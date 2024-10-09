function cadastrarPessoa() {
    // Captura os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Cria o objeto com os dados
    const pessoa = {
        email: email,
        senha: senha // Mantém a senha como string
    };

    // Faz a solicitação POST para o backend
    fetch('http://localhost:3000/api/usuario/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Erro ao cadastrar a pessoa');
        })
        .then(data => {
            console.log('Pessoa cadastrada com sucesso:', data);
            window.location.href = "index.html"; // Redireciona para index.html
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}