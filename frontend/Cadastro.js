function cadastrarPessoa() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const apelido = document.getElementById('apelido').value;

    const usuario = { nome, email, senha, apelido };

    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message) {
                alert(data.message);
            }
        })
        .catch((error) => console.error('Erro ao cadastrar:', error));
}
