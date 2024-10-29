// Вставьте свой API ключ сюда
const apiKey = 'ВАШ_API_КЛЮЧ';

async function fetchTikTokVideos() {
    try {
        const response = await fetch(`https://api.tiktok.com/endpoint?api_key=${apiKey}`);
        const data = await response.json();

        if (data && data.videos) {
            displayVideos(data.videos);
        } else {
            console.error('Не удалось загрузить видео');
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
    }
}

function displayVideos(videos) {
    const container = document.getElementById('video-container');
    container.innerHTML = '';

    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-card');
        videoElement.innerHTML = `
            <video controls>
                <source src="${video.video_url}" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
            <p>${video.title || 'Видео без названия'}</p>
        `;
        container.appendChild(videoElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchTikTokVideos);
