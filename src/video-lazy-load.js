/**
 * Video Lazy Loading System
 * Loads videos only when they're near the viewport
 * Improves initial page load performance significantly
 */

class VideoLazyLoader {
  constructor() {
    this.videos = document.querySelectorAll('video[data-src]');
    this.options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    };
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        this.options
      );

      this.videos.forEach(video => {
        this.observer.observe(video);
        // Add poster image if not present
        if (!video.poster && video.dataset.poster) {
          video.poster = video.dataset.poster;
        }
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadAllVideos();
    }
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadVideo(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadVideo(video) {
    const sources = video.querySelectorAll('source[data-src]');

    sources.forEach(source => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });

    // Load the video
    video.load();

    // Add loaded class for styling
    video.classList.add('video-loaded');

    // Optional: Preload metadata
    video.preload = 'metadata';
  }

  loadAllVideos() {
    this.videos.forEach(video => this.loadVideo(video));
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.videoLazyLoader = new VideoLazyLoader();
});
