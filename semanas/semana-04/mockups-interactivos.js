// Mockups Interactivos - Semana 4: Modelos Predictivos y Carga Cognitiva
// Funciones para los mockups visuales de la presentación

// ============================================
// SLIDE 6: Ley de Hick - Menú Jerárquico
// ============================================

/**
 * Toggle de categorías del menú jerárquico (acordeón)
 * Solo una categoría puede estar abierta a la vez
 */
function toggleCategory(categoryId) {
    const content = document.getElementById(categoryId);
    const icon = document.getElementById('icon-' + categoryId);
    
    // Cerrar todas las demás categorías
    const allCategories = ['hamburguesas', 'pizzas', 'ensaladas', 'postres'];
    allCategories.forEach(cat => {
        if (cat !== categoryId) {
            const otherContent = document.getElementById(cat);
            const otherIcon = document.getElementById('icon-' + cat);
            if (otherContent && otherContent.style.display === 'block') {
                otherContent.style.display = 'none';
                if (otherIcon) {
                    otherIcon.className = 'fas fa-chevron-down';
                }
            }
        }
    });
    
    // Toggle la categoría actual
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.className = 'fas fa-chevron-up';
    } else {
        content.style.display = 'none';
        icon.className = 'fas fa-chevron-down';
    }
}

// ============================================
// SLIDE 10: Ley de Miller - Estados Agrupados
// ============================================

/**
 * Toggle de estados en el panel de cocina (acordeón)
 * Múltiples estados pueden estar abiertos simultáneamente
 */
function toggleMillerState(stateId) {
    const content = document.getElementById(stateId);
    const icon = document.getElementById('icon-' + stateId);
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.className = 'fas fa-chevron-up';
    } else {
        content.style.display = 'none';
        icon.className = 'fas fa-chevron-down';
    }
}

// ============================================
// Inicialización cuando el DOM está listo
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mockups interactivos cargados');
});


// ============================================
// SLIDE 5: Ley de Fitts - Comparación de Tamaños
// ============================================

/**
 * Demostración interactiva de la Ley de Fitts
 * Permite al usuario hacer clic en botones de diferentes tamaños
 * y mide el tiempo de reacción
 */
class FittsLawDemo {
    constructor() {
        this.startTime = null;
        this.attempts = [];
        this.currentTarget = null;
    }

    startDemo(buttonSize) {
        this.startTime = Date.now();
        this.currentTarget = buttonSize;
    }

    recordClick(buttonSize) {
        if (this.startTime && this.currentTarget === buttonSize) {
            const reactionTime = Date.now() - this.startTime;
            this.attempts.push({
                size: buttonSize,
                time: reactionTime
            });
            
            // Mostrar feedback visual
            this.showFeedback(buttonSize, reactionTime);
            
            // Reset para próximo intento
            this.startTime = null;
            this.currentTarget = null;
        }
    }

    showFeedback(size, time) {
        const feedbackEl = document.getElementById('fitts-feedback');
        if (feedbackEl) {
            feedbackEl.innerHTML = `
                <div style="padding: 10px; background: rgba(74, 222, 128, 0.2); border-radius: 6px; margin-top: 10px;">
                    <strong>Botón ${size}:</strong> ${time}ms
                    <br><small>${time < 300 ? '¡Rápido!' : time < 500 ? 'Normal' : 'Lento'}</small>
                </div>
            `;
        }
    }

    getAverageTime(size) {
        const filtered = this.attempts.filter(a => a.size === size);
        if (filtered.length === 0) return 0;
        const sum = filtered.reduce((acc, curr) => acc + curr.time, 0);
        return Math.round(sum / filtered.length);
    }
}

// Instancia global para la demo de Fitts
let fittsDemo = null;

function initFittsDemo() {
    fittsDemo = new FittsLawDemo();
    console.log('✅ Demo de Ley de Fitts inicializada');
}

// ============================================
// SLIDE 7: Percepción y Atención - Simulador
// ============================================

/**
 * Simulador de estados de pedidos con animaciones
 * Demuestra cómo el color y los íconos ayudan a la percepción
 */
function simulateOrderStates() {
    const orders = document.querySelectorAll('.order-card-animated');
    if (orders.length === 0) return;

    let currentIndex = 0;
    const states = ['en-proceso', 'preparado', 'servido'];
    
    setInterval(() => {
        orders.forEach((order, index) => {
            if (index === currentIndex) {
                // Cambiar estado del pedido actual
                const currentState = states[Math.floor(Math.random() * states.length)];
                order.className = `order-card-animated ${currentState}`;
            }
        });
        
        currentIndex = (currentIndex + 1) % orders.length;
    }, 2000);
}

// ============================================
// SLIDE 9: Carga Cognitiva - Contador de Elementos
// ============================================

/**
 * Contador visual de elementos para demostrar sobrecarga cognitiva
 */
function updateCognitiveLoadCounter() {
    const badDesign = document.querySelectorAll('.bad-design-item');
    const goodDesign = document.querySelectorAll('.good-design-group');
    
    const badCountEl = document.getElementById('bad-count');
    const goodCountEl = document.getElementById('good-count');
    
    if (badCountEl) {
        badCountEl.textContent = badDesign.length;
        badCountEl.style.color = badDesign.length > 9 ? '#f87171' : '#4ade80';
    }
    
    if (goodCountEl) {
        goodCountEl.textContent = goodDesign.length;
        goodCountEl.style.color = goodDesign.length <= 7 ? '#4ade80' : '#f87171';
    }
}

// ============================================
// Utilidades Generales
// ============================================

/**
 * Resalta elementos temporalmente para llamar la atención
 */
function highlightElement(elementId, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.style.transition = 'all 0.3s ease';
    element.style.transform = 'scale(1.05)';
    element.style.boxShadow = '0 0 20px rgba(233, 171, 33, 0.6)';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
    }, duration);
}

/**
 * Anima la transición entre estados
 */
function animateStateTransition(fromState, toState) {
    const fromEl = document.getElementById(fromState);
    const toEl = document.getElementById(toState);
    
    if (fromEl) {
        fromEl.style.opacity = '0.5';
        setTimeout(() => {
            fromEl.style.opacity = '1';
        }, 500);
    }
    
    if (toEl) {
        toEl.style.transform = 'scale(1.1)';
        setTimeout(() => {
            toEl.style.transform = 'scale(1)';
        }, 300);
    }
}

// ============================================
// Inicialización Extendida
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mockups interactivos cargados');
    
    // Inicializar demos si existen en la página
    if (document.getElementById('fitts-demo')) {
        initFittsDemo();
    }
    
    if (document.querySelector('.order-card-animated')) {
        simulateOrderStates();
    }
    
    if (document.getElementById('bad-count') || document.getElementById('good-count')) {
        updateCognitiveLoadCounter();
    }
});
