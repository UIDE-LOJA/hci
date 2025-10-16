Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    history: true,
    center: true,

    // Advanced transitions and animations
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',

    // Auto-animate support
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,

    // Math rendering
    math: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        config: 'TeX-AMS_HTML-full',
    },

    // Zoom functionality
    zoom: {
        mouseWheel: false,
        maxZoom: 3,
        controls: true
    },

    // Search functionality
    search: {
        caseSensitive: false,
        showIcon: true
    },

    // Keyboard shortcuts
    keyboard: {
        70: 'fullscreen', // f
        83: 'next', // s
        65: 'prev', // a
        66: 'pause', // b
        90: 'zoom', // z
        191: 'search' // /
    },

    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealZoom, RevealSearch]
});

// Simple Flashcard System
function flipCard(card) {
    card.classList.toggle('flipped');
}
