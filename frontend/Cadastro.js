function cadastrarPessoa() {
    // Captura os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;
    const apelido= document.getElementById('apelido').value;
    // Cria o objeto com os dados

    const pessoa = {
        email: email,
        senha: senha, // Mantém a senha como string
        nome: nome,
        apelido: apelido,
    };

    // Faz a solicitação POST para o backend
    fetch('http://localhost:3000/api/usuarios', {
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
            alert('Seja bem vindo ao site!')
            window.location.href = "index.html"; // Redireciona para index.html
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

