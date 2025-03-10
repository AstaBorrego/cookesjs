const loginForm = document.getElementById('loginForm');
const cadast = document.getElementById('cadast'); // Certifique-se de que o ID está correto no HTML
const messageDiv = document.getElementById('message');


const correctUsername = "admin"; // **INSEGURO!**  Não armazene credenciais no cliente
const correctPassword = "1234"; // **INSEGURO!**

var tipo="p"
// Ouvinte de evento para o formulário (login)
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword && tipo==="p") {
        // ... (lógica para cookies, se necessário)
        window.location.href = "principal.html";
    } else {
        messageDiv.textContent = "Usuário ou senha incorretos.";
        document.getElementById("username").focus(); // Foca no input após erro de login
    }
});

// Ouvinte de evento para o link/botão de cadastro
if (cadast) {
   
    cadast.addEventListener('click', function (event) {
        // Impede o comportamento padrão se 'cadast' for um link <a>
        //event.preventDefault(); -> removi pois no html cadast esta como <spam>
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
         tipo="c";

        if (username === correctUsername && password === correctPassword && tipo==="c") {
            event.stopPropagation(); // Impede a propagação do evento
            window.location.href = "cadastro.html"; 
        } else {
            alert("Você não tem permissão para cadastrar usuário.");
            document.getElementById("username").focus();

        }
    });
} else {
    console.error("Elemento 'cadast' não encontrado.");
}