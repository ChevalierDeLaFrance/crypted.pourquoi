// Liste des nouveaux codes valides
const validCodes = [
    "aB7xK9cP2D", "W2mN4yTq7J", "vF6nZ3kL8h", "Qw9P1dM5rX", 
    "J2gH8vC7lB", "xD3pL5qT9Y", "M7bW2yF6jZ", "tQ4mP9xR1G", 
    "Z8nK2cY5lV", "F3xH6vP9mL"
];

// Code de redirection si le code entré est invalide
const invalidCodeRedirect = "f4wqs4gh4qz458468g454qsd5g4s5d84g8sdg478se74t8s456d4gh654hs84s4jhsd4jh65s4j6s5j.html";

// Ajouter un écouteur d'événement sur la touche "Entrée"
document.getElementById('codeInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {  // Vérifier si "Enter" a été pressée
        e.preventDefault();  // Empêche toute autre action par défaut (comme recharger la page)

        // Récupérer la valeur de l'input
        const code = document.getElementById('codeInput').value;
        console.log("Code entré :", code);  // Log du code entré

        // Vérifier si le code est valide
        if (validCodes.includes(code)) {
            console.log("Code valide, redirection vers :", code + '.html');
            // Rediriger vers le fichier HTML correspondant
            window.location.href = code + '.html';
        } else {
            console.log("Code invalide, redirection vers la page par défaut.");
            // Rediriger vers la page pour tout autre code
            window.location.href = invalidCodeRedirect;
        }
    }
});
