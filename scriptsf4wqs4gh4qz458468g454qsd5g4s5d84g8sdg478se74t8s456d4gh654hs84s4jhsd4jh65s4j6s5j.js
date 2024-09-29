document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('rickVideo');
    const enterButton = document.getElementById('enterButton');
    const videoContainer = document.querySelector('.video-container');
    
    // Ajouter un événement au bouton
    enterButton.addEventListener('click', function () {
        enterButton.style.display = 'none'; // Cacher le bouton
        videoContainer.style.display = 'block'; // Afficher la vidéo
        video.play(); // Démarrer la vidéo
    });
});
