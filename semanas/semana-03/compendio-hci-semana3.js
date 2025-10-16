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

// Email Validation Functions for Accessibility Examples
function validateEmailBad(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input.value);
    const errorDiv = document.getElementById('error-bad');

    if (input.value === '') {
        input.style.border = '2px solid #6c757d';
        errorDiv.style.display = 'none';
    } else if (isValid) {
        input.style.border = '2px solid #198754';
        errorDiv.style.display = 'none';
    } else {
        input.style.border = '2px solid #dc3545';
        errorDiv.style.display = 'block';
    }
}

function validateEmailGood(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(input.value);
    const errorDiv = document.getElementById('error-good');
    const successDiv = document.getElementById('success-good');

    if (input.value === '') {
        input.style.border = '2px solid #6c757d';
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
    } else if (isValid) {
        input.style.border = '2px solid #198754';
        input.style.backgroundColor = '#f8fff9';
        errorDiv.style.display = 'none';
        successDiv.style.display = 'block';
    } else {
        input.style.border = '2px solid #dc3545';
        input.style.backgroundColor = '#fff5f5';
        errorDiv.style.display = 'block';
        successDiv.style.display = 'none';
    }
}

mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
        nodeSpacing: 50,
        rankSpacing: 50,
        curve: 'basis'
    }
});
