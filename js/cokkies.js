// Função para criar um cookie
function criarCookie(nome, valor, dias) { // Define a função criarCookie que aceita nome, valor e dias como parâmetros
    let dataExpiracao = ""; // Inicializa a variável dataExpiracao como uma string vazia
    if (dias) { // Verifica se o parâmetro dias foi fornecido
        const data = new Date(); // Cria um novo objeto Date
        data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000)); // Define o tempo da data adicionando o número de dias em milissegundos
        dataExpiracao = "; expires=" + data.toUTCString(); // Define a string dataExpiracao com a data de expiração formatada em UTC
    }
    document.cookie = nome + "=" + valor + dataExpiracao + "; path=/"; // Define o cookie com nome, valor, data de expiração e caminho
}

// Função para ler um cookie
function lerCookie(nome) { // Define a função lerCookie que aceita o nome do cookie como parâmetro
    const nomeCookie = nome + "="; // Cria a string nomeCookie concatenando o nome e o sinal de igual
    const cookies = document.cookie.split(';'); // Divide a string document.cookie em um array de cookies usando o ponto e vírgula como separador
    for (let i = 0; i < cookies.length; i++) { // Inicia um loop que itera sobre o array de cookies
        let cookie = cookies[i]; // Atribui o cookie atual à variável cookie
        while (cookie.charAt(0) === ' ') { // Inicia um loop que remove os espaços em branco à esquerda do cookie
            cookie = cookie.substring(1); // Remove o primeiro caractere do cookie
        }
        if (cookie.indexOf(nomeCookie) === 0) { // Verifica se o cookie começa com o nomeCookie
            return cookie.substring(nomeCookie.length, cookie.length); // Retorna o valor do cookie
        }
    }
    return null; // Retorna null se o cookie não for encontrado
}

// Evento de submit do formulário
document.getElementById('loginForm').addEventListener('submit', function (event) { // Adiciona um ouvinte de evento para o evento submit do formulário com id 'loginForm'
    event.preventDefault(); // Impede o comportamento padrão do evento submit

    const username = document.getElementById('username').value; // Obtém o valor do campo de entrada com id 'username'
    const password = document.getElementById('password').value; // Obtém o valor do campo de entrada com id 'password'
    const message = document.getElementById('message'); // Obtém o elemento com id 'message'
    const content = document.getElementById('content'); // Obtém o elemento com id 'content'

    // Simulação de autenticação (substitua por sua lógica real)
    if (username === 'admin' && password === '1234') { // Verifica se o nome de usuário e a senha correspondem aos valores de teste
        criarCookie('username', username, 7); // Cria um cookie chamado 'username' com o valor do nome de usuário e duração de 7 dias

        // Exibe o conteúdo após o login
        document.getElementById('welcomeUsername').textContent = username; // Define o conteúdo de texto do elemento com id 'welcomeUsername' como o nome de usuário
        content.style.display = 'block'; // Define o estilo de exibição do elemento content como 'block' para torná-lo visível
        loginForm.style.display = 'none'; // Define o estilo de exibição do elemento loginForm como 'none' para ocultá-lo
        message.textContent = ''; // Limpa o conteúdo de texto do elemento message

    } else { // Se o nome de usuário ou a senha estiverem incorretos
        message.textContent = 'Usuário ou senha incorretos.'; // Define o conteúdo de texto do elemento message com a mensagem de erro
        message.style.color = 'red'; // Define a cor do texto do elemento message como vermelho
    }
});


// Evento de carregamento da página
window.onload = function () { // Define uma função que será executada quando a página for carregada
    const username = lerCookie('username'); // Lê o valor do cookie 'username' e o armazena na variável username
    if (username) { // Verifica se o cookie 'username' existe
        // O usuário está logado, exibe o conteúdo
        const content = document.getElementById('content'); // Obtém o elemento com id 'content'
        const loginForm = document.getElementById('loginForm'); // Obtém o elemento com id 'loginForm'
        document.getElementById('welcomeUsername').textContent = username; // Define o conteúdo de texto do elemento com id 'welcomeUsername' como o nome de usuário
        content.style.display = 'block'; // Define o estilo de exibição do elemento content como 'block' para torná-lo visível
        loginForm.style.display = 'none'; // Define o estilo de exibição do elemento loginForm como 'none' para ocultá-lo

        // Adiciona evento de clique ao botão de logout
        document.getElementById('logoutButton').addEventListener('click', function () { // Adiciona um ouvinte de evento para o evento click do botão com id 'logoutButton'
            criarCookie('username', '', -1); // Define a data de expiração do cookie 'username' para uma data passada para removê-lo
            window.location.href = "https://sp.senai.br/unidade/campinaszerbini/"; // Redireciona para o site desejado ao clicar em "Sair"

        });

    }
};