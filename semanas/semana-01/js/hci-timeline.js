/**
 * HCI Timeline - Evolución Histórica de la Interacción Humano-Computadora
 * Universidad Internacional del Ecuador
 * Curso: PP-07-HCI - Semana 1
 * 
 * Implementación simple basada en el ejemplo oficial de Timeline.js
 */

// Timeline data for HCI evolution
var timelineData = {
    "title": {
        "text": {
            "headline": "Evolución Histórica de HCI<br><small>De los Pioneros a la Era Móvil</small>",
            "text": "<p>Un recorrido por los hitos más importantes que han definido la Interacción Humano-Computadora desde 1945 hasta la actualidad.</p>"
        }
    },
    "events": [
        {
            "media": {
                "url": "../../assets/images/semana-1/1945.jpg",
                "caption": "Vannevar Bush y su concepto del Memex",
                "credit": "Archivo Histórico"
            },
            "start_date": {
                "year": "1945"
            },
            "text": {
                "headline": "Vannevar Bush - \"As We May Think\"",
                "text": "<p><strong>El Memex: Precursor del Hipertexto</strong></p><p>Bush imaginó una máquina que permitía acceso rápido a información interconectada, estableciendo las bases conceptuales para:</p><ul><li><strong>Hipertexto</strong> - Enlaces entre documentos</li><li><strong>Almacenamiento asociativo</strong> - Información conectada</li><li><strong>Recuperación rápida</strong> - Acceso eficiente a datos</li></ul><p><em>\"Las computadoras vivían una vida recluida en grandes salas con aire acondicionado\"</em> - Bush (1945)</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1962.webp",
                "caption": "Ivan Sutherland demostrando Sketchpad",
                "credit": "MIT Lincoln Laboratory"
            },
            "start_date": {
                "year": "1962"
            },
            "text": {
                "headline": "Ivan Sutherland - Sketchpad",
                "text": "<p><strong>Revolución Gráfica: Primera Manipulación Directa</strong></p><p>Sketchpad introdujo conceptos revolucionarios que siguen siendo fundamentales:</p><ul><li><strong>Manipulación directa</strong> - Interacción con objetos en pantalla</li><li><strong>Interfaz gráfica</strong> - Más allá del texto</li><li><strong>Precisión visual</strong> - Dibujo asistido por computadora</li></ul><p>Estableció los fundamentos de las interfaces gráficas modernas y la interacción visual.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1963.jpg",
                "caption": "Douglas Engelbart con el primer ratón",
                "credit": "Stanford Research Institute"
            },
            "start_date": {
                "year": "1963"
            },
            "text": {
                "headline": "Douglas Engelbart - Invención del Ratón",
                "text": "<p><strong>Dispositivo Señalador Revolucionario</strong></p><p>El ratón transformó para siempre la interacción humano-computadora:</p><ul><li><strong>Señalamiento preciso</strong> - Control directo del cursor</li><li><strong>Selección intuitiva</strong> - Clic para interactuar</li><li><strong>Demostración de 1968</strong> - \"La madre de todas las demos\"</li></ul><p>Fundamental para el desarrollo de las interfaces gráficas y la democratización de la computación.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/Xerox PARC.jpg",
                "caption": "Xerox PARC - Laboratorio de innovación",
                "credit": "Xerox Corporation"
            },
            "start_date": {
                "year": "1973"
            },
            "text": {
                "headline": "Xerox Alto - Primera GUI Completa",
                "text": "<p><strong>Nacimiento de las Interfaces Gráficas</strong></p><p>El Xerox Alto combinó por primera vez ratón e interfaz gráfica:</p><ul><li><strong>Ventanas superpuestas</strong> - Multitarea visual</li><li><strong>Iconos y carpetas</strong> - Metáforas del escritorio</li><li><strong>Editor WYSIWYG</strong> - \"Lo que ves es lo que obtienes\"</li><li><strong>Networking (Ethernet)</strong> - Conectividad pionera</li></ul><p>Estableció las convenciones de interfaz que usamos hasta hoy.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1981 Xerox Star.jpg",
                "caption": "Xerox Star - Primera GUI comercial",
                "credit": "Xerox Corporation"
            },
            "start_date": {
                "year": "1981"
            },
            "text": {
                "headline": "Xerox Star - Primera GUI Comercial",
                "text": "<p><strong>Comercialización de las Interfaces Gráficas</strong></p><p>El Xerox Star llevó las GUI al mercado comercial:</p><ul><li><strong>Desktop metaphor</strong> - Escritorio virtual establecido</li><li><strong>Iconos, ventanas y menús</strong> - Elementos estándar</li><li><strong>Workstation profesional</strong> - Herramientas de productividad</li></ul><p>Aunque no fue un éxito comercial, estableció las bases de las interfaces modernas.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1983.jpeg",
                "caption": "Primera conferencia ACM SIGCHI",
                "credit": "ACM Digital Library"
            },
            "start_date": {
                "year": "1983"
            },
            "text": {
                "headline": "ACM SIGCHI - Nacimiento Formal de HCI",
                "text": "<p><strong>Disciplina Académica Establecida</strong></p><p>ACM SIGCHI marcó el inicio formal de HCI como campo científico:</p><ul><li><strong>Comunidad académica</strong> - Investigadores unidos</li><li><strong>Métodos de investigación</strong> - Rigor científico</li><li><strong>Publicaciones especializadas</strong> - Conocimiento compartido</li><li><strong>Conferencias anuales</strong> - Intercambio de ideas</li></ul><p>Transformó HCI de práctica artesanal a disciplina científica rigurosa.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1984.png",
                "caption": "Apple Macintosh - GUI para todos",
                "credit": "Apple Computer Inc."
            },
            "start_date": {
                "year": "1984"
            },
            "text": {
                "headline": "Apple Macintosh - GUI al Mainstream",
                "text": "<p><strong>Democratización de las Interfaces Gráficas</strong></p><p>El Macintosh hizo las GUI accesibles para usuarios comunes:</p><ul><li><strong>\"Think Different\"</strong> - Filosofía de diseño centrada en el usuario</li><li><strong>GUI para consumidores</strong> - No solo profesionales</li><li><strong>Usabilidad revolucionaria</strong> - Fácil de usar sin entrenamiento</li><li><strong>Éxito comercial</strong> - Adopción masiva</li></ul><p><strong>El Gran Cambio:</strong> De \"Solo expertos\" → \"Cualquier persona\"</p><p style='text-align: center; font-weight: bold; color: #28a745;'>La USABILIDAD cambió todo</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1990s.jpeg",
                "caption": "Mark Weiser - Visionario de la computación ubicua",
                "credit": "Xerox PARC"
            },
            "start_date": {
                "year": "1991"
            },
            "text": {
                "headline": "Mark Weiser - Computación Ubicua",
                "text": "<p><strong>\"Las tecnologías más profundas desaparecen\"</strong></p><p>Weiser visionó un futuro de computación invisible e integrada:</p><ul><li><strong>Tecnología invisible</strong> - Integrada en el entorno</li><li><strong>Computación omnipresente</strong> - En todos lados</li><li><strong>Interacción natural</strong> - Sin interfaces explícitas</li><li><strong>Dispositivos diversos</strong> - Tabs, pads, boards</li></ul><p>Sus ideas anticiparon smartphones, IoT y la computación ambiental actual.</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/1990s UX.jpeg",
                "caption": "Don Norman - Padre de la Experiencia del Usuario",
                "credit": "Apple Computer Inc."
            },
            "start_date": {
                "year": "1995"
            },
            "text": {
                "headline": "Don Norman - Término \"User Experience\"",
                "text": "<p><strong>Más Allá de la Usabilidad</strong></p><p>Norman expandió el concepto hacia una experiencia holística:</p><ul><li><strong>Experiencia completa</strong> - Emociones, percepciones, respuestas</li><li><strong>Diseño emocional</strong> - Más allá de la funcionalidad</li><li><strong>Psicología del diseño</strong> - Comprensión del usuario</li><li><strong>UX en Apple</strong> - Aplicación práctica del concepto</li></ul><p>Transformó el enfoque de \"hacer que funcione\" a \"crear experiencias memorables\".</p>"
            }
        },
        {
            "media": {
                "url": "../../assets/images/semana-1/2007 Iphone.jpeg",
                "caption": "iPhone - Revolución de las interfaces táctiles",
                "credit": "Apple Inc."
            },
            "start_date": {
                "year": "2007"
            },
            "text": {
                "headline": "iPhone - Revolución Táctil",
                "text": "<p><strong>Nueva Era de Interacción Móvil</strong></p><p>El iPhone transformó las interfaces móviles para siempre:</p><ul><li><strong>Multitouch</strong> - Gestos naturales con los dedos</li><li><strong>Interfaces intuitivas</strong> - Fáciles de aprender</li><li><strong>Democratización</strong> - Smartphones para todos</li><li><strong>Nuevos estándares</strong> - Referencia para la industria</li></ul><p>Estableció los principios de diseño móvil que dominan la actualidad: gestos naturales, interfaces táctiles y experiencias fluidas.</p>"
            }
        }
    ]
};

// Simple initialization following Timeline.js official example
// The TL.Timeline constructor takes at least two arguments:
// the id of the Timeline container (no '#'), and
// the data object or URL to your JSON data file
var timeline;

function initTimeline() {
    if (typeof TL !== 'undefined') {
        console.log('Initializing Timeline.js...');
        
        // Basic options for better display
        var options = {
            height: 700,
            language: 'es'
        };
        
        timeline = new TL.Timeline('timeline-embed', timelineData, options);
        console.log('Timeline initialized successfully');
        
        // Add some basic styling after initialization
        setTimeout(function() {
            var timelineContainer = document.querySelector('#timeline-embed');
            if (timelineContainer) {
                timelineContainer.style.border = '1px solid #ddd';
                timelineContainer.style.borderRadius = '8px';
                timelineContainer.style.overflow = 'hidden';
            }
        }, 1000);
        
    } else {
        console.error('Timeline.js not loaded');
        setTimeout(initTimeline, 1000); // Retry after 1 second
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, waiting for Timeline.js...');
    setTimeout(initTimeline, 2000);
});

// Also try when window loads (fallback)
window.addEventListener('load', function() {
    console.log('Window loaded');
    if (!timeline) {
        setTimeout(initTimeline, 1000);
    }
});

// Additional fallback for Reveal.js presentations
if (typeof Reveal !== 'undefined') {
    Reveal.on('slidechanged', function(event) {
        if (event.currentSlide.querySelector('#timeline-embed') && !timeline) {
            console.log('Timeline slide detected');
            setTimeout(initTimeline, 500);
        }
    });
}