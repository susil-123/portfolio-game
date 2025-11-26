document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        const video = card.querySelector('video');

        if (video) {
            // Ensure video is paused initially
            video.pause();
            video.currentTime = 0;

            card.addEventListener('mouseenter', () => {
                video.play().catch(e => {
                    // Auto-play might be blocked if not muted or user hasn't interacted
                    console.log("Video play failed:", e);
                });
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                // Optional: Reset to start
                // video.currentTime = 0; 
            });
        }
    });
});
