Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,
    math: {
        mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        config: 'TeX-AMS_HTML-full'
    },
    zoom: {
        mouseWheel: false,
        maxZoom: 3,
        controls: true
    },
    search: {
        caseSensitive: false,
        showIcon: true
    },
    keyboard: {
        70: 'fullscreen',
        83: 'next',
        65: 'prev',
        66: 'pause',
        90: 'zoom',
        191: 'search'
    },
    plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealMath.KaTeX, RevealZoom, RevealSearch]
});

// Simple Flashcard System
function flipCard(card) {
    card.classList.toggle('flipped');
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

// Funcionalidad para el formulario paso a paso
document.addEventListener('DOMContentLoaded', function() {
    // Estado del formulario
    let currentStep = 1;
    const totalSteps = 3;
    
    // Datos de los pasos del formulario
    const formSteps = {
        1: {
            title: "Paso 1 de 3: Información Personal",
            fields: [
                {
                    label: "Nombre completo *",
                    type: "text",
                    placeholder: "Ej: Juan Pérez",
                    help: '<i class="fas fa-edit"></i> Nombre como aparece en cédula',
                    value: ""
                },
                {
                    label: "Email *",
                    type: "email", 
                    placeholder: "juan@ejemplo.com",
                    help: '<i class="fas fa-envelope"></i> Recibirás confirmación aquí',
                    value: ""
                },
                {
                    label: "Teléfono *",
                    type: "tel",
                    placeholder: "+593 99 123 4567",
                    help: '<i class="fas fa-mobile-alt"></i> Formato automático aplicado',
                    value: "+593 99 123 4567"
                },
                {
                    label: "Fecha nacimiento *",
                    type: "date",
                    placeholder: "",
                    help: '<i class="fas fa-birthday-cake"></i> Para validar mayoría de edad', 
                    value: "1990-05-15"
                }
            ],
            nextButton: "Siguiente: Ubicación →"
        },
        2: {
            title: "Paso 2 de 3: Información de Ubicación",
            fields: [
                {
                    label: "Dirección completa *",
                    type: "text",
                    placeholder: "Ej: Av. Amazonas 123, La Carolina",
                    help: '<i class="fas fa-home"></i> Dirección principal de residencia',
                    value: ""
                },
                {
                    label: "Ciudad *",
                    type: "text",
                    placeholder: "Quito",
                    help: '<i class="fas fa-city"></i> Ciudad donde resides',
                    value: "Quito"
                },
                {
                    label: "Código postal",
                    type: "text",
                    placeholder: "170101",
                    help: '<i class="fas fa-mail-bulk"></i> Código postal de tu zona',
                    value: ""
                },
                {
                    label: "País *",
                    type: "text",
                    placeholder: "Ecuador",
                    help: '<i class="fas fa-globe-americas"></i> País de residencia',
                    value: "Ecuador"
                }
            ],
            nextButton: "Siguiente: Seguridad →"
        },
        3: {
            title: "Paso 3 de 3: Información de Seguridad",
            fields: [
                {
                    label: "Contraseña * (mín 8 caracteres)",
                    type: "password",
                    placeholder: "••••••••",
                    help: '<i class="fas fa-lock"></i> Mínimo 8 caracteres con números',
                    value: ""
                },
                {
                    label: "Confirmar contraseña *",
                    type: "password",
                    placeholder: "••••••••",
                    help: '<i class="fas fa-redo"></i> Debe coincidir con la anterior',
                    value: ""
                },
                {
                    label: "Pregunta de seguridad *",
                    type: "text",
                    placeholder: "¿Cuál es el nombre de tu primera mascota?",
                    help: '<i class="fas fa-question-circle"></i> Para recuperar tu cuenta',
                    value: ""
                },
                {
                    label: "Respuesta de seguridad *",
                    type: "text",
                    placeholder: "Tu respuesta",
                    help: '<i class="fas fa-comment"></i> Respuesta a tu pregunta de seguridad',
                    value: ""
                }
            ],
            nextButton: "Finalizar Registro ✓"
        }
    };
    
    // Función para actualizar el contenido del paso
    function updateFormStep(stepNumber) {
        const stepData = formSteps[stepNumber];
        if (!stepData) return;
        
        // Actualizar indicador de paso
        const stepIndicator = document.querySelector('.step-indicator h4');
        if (stepIndicator) {
            stepIndicator.textContent = stepData.title;
        }
        
        // Actualizar indicadores de progreso
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach((step, index) => {
            if (index + 1 <= stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Actualizar campos del formulario
        const fieldRows = document.querySelectorAll('.form-step-content .field-row');
        fieldRows.forEach((row, rowIndex) => {
            const fields = row.querySelectorAll('.field-input.enhanced');
            fields.forEach((field, fieldIndex) => {
                const globalFieldIndex = rowIndex * 2 + fieldIndex;
                const fieldData = stepData.fields[globalFieldIndex];
                
                if (fieldData) {
                    const label = field.querySelector('label');
                    const input = field.querySelector('input');
                    const help = field.querySelector('.field-help');
                    
                    if (label) label.textContent = fieldData.label;
                    if (input) {
                        input.type = fieldData.type;
                        input.placeholder = fieldData.placeholder;
                        input.value = fieldData.value;
                    }
                    if (help) help.innerHTML = fieldData.help;
                }
            });
        });
        
        // Actualizar botón siguiente
        const nextButton = document.querySelector('.btn-next');
        if (nextButton) {
            nextButton.textContent = stepData.nextButton;
        }
        
        // Actualizar indicador de memoria
        const memoryText = document.querySelector('.memory-load-indicator.good .memory-text');
        if (memoryText) {
            memoryText.textContent = `Paso ${stepNumber}/3: 4 campos`;
        }
    }
    
    // Manejar click en botón siguiente
    function handleNextClick() {
        if (currentStep < totalSteps) {
            currentStep++;
            updateFormStep(currentStep);
            updateNavigationButtons();
        } else {
            // Simular envío del formulario
            const nextButton = document.querySelector('.btn-next');
            if (nextButton) {
                nextButton.textContent = "¡Registro Completado! ✅";
                nextButton.style.background = "#10b981";
                nextButton.disabled = true;
            }
        }
    }
    
    // Manejar click en botón atrás
    function handleBackClick() {
        if (currentStep > 1) {
            currentStep--;
            updateFormStep(currentStep);
            updateNavigationButtons();
        }
    }
    
    // Actualizar visibilidad y estado de botones de navegación
    function updateNavigationButtons() {
        const backButton = document.querySelector('.btn-back');
        const nextButton = document.querySelector('.btn-next');
        
        if (backButton) {
            if (currentStep > 1) {
                backButton.style.display = 'block';
            } else {
                backButton.style.display = 'none';
            }
        }
        
        // Restaurar estado del botón siguiente si volvemos desde el final
        if (nextButton && currentStep < totalSteps) {
            nextButton.disabled = false;
            nextButton.style.background = '';
        }
    }
    
    // Agregar event listeners a los botones cuando estén disponibles
    function attachButtonListeners() {
        const nextButton = document.querySelector('.btn-next');
        const backButton = document.querySelector('.btn-back');
        
        if (nextButton && !nextButton.hasAttribute('data-listener-attached')) {
            nextButton.addEventListener('click', handleNextClick);
            nextButton.setAttribute('data-listener-attached', 'true');
        }
        
        if (backButton && !backButton.hasAttribute('data-listener-attached')) {
            backButton.addEventListener('click', handleBackClick);
            backButton.setAttribute('data-listener-attached', 'true');
        }
    }
    
    // Observar cambios en el DOM para detectar cuando aparezca el formulario
    const observer = new MutationObserver(function(mutations) {
        attachButtonListeners();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Intentar adjuntar los listeners inmediatamente si los botones ya existen
    attachButtonListeners();
});
