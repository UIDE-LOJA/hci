Compendio de Temas de Diseño y Psicología en HCI
Don Norman (Diseño Centrado en el Usuario)
Donald Norman es una figura central en el diseño y la usabilidad, conocido por sus contribuciones a la conceptualización de la Experiencia del Usuario (UX) y los modelos cognitivos que sustentan el diseño centrado en el ser humano.
Origen de la Experiencia del Usuario (UX)
El término experiencia del usuario (UX) probablemente se originó a principios de la década de 1990 en Apple, cuando Norman se unió al equipo como psicólogo cognitivo. Norman ostentó el título de Arquitecto de Experiencia del Usuario, y lo inventó porque consideraba que los términos Interfaz Humana y usabilidad eran demasiado estrechos. Norman quería cubrir todos los aspectos de la experiencia de una persona con un sistema, lo que incluye el diseño industrial, los gráficos, la interfaz, la interacción física y el manual.
El Diseño de las Cosas de Todos los Días (The Design of Everyday Things)
El libro de Norman de 1988, inicialmente publicado como The Psychology of Everyday Things y luego reimpreso como The Design of Everyday Things, es un análisis refrescante sobre los temas psicológicos en el diseño de la tecnología cotidiana. En este libro, Norman popularizó el concepto de affordances percibidas.
Modelo Cognitivo: Etapas de Acción y Diseño
Norman (1988) propuso un modelo explicativo de la interacción persona-Computador basado en siete etapas de acción dispuestas en un patrón cíclico (Formar el objetivo, Formar la intención, Especificar la acción, Ejecutar la acción, Percibir el estado, Interpretar el estado y Evaluar el resultado).
Este modelo dinámico condujo a la identificación de dos fallas clave en la interacción:
1. Golfo de Ejecución: La falta de coincidencia entre las intenciones del usuario y las acciones permitidas por el sistema.
2. Golfo de Evaluación: La falta de coincidencia entre la representación del sistema y las expectativas del usuario (lo que espera ver basado en su modelo mental).
Norman sugiere cuatro principios de buen diseño derivados de este modelo:
1. El estado y las alternativas de acción deben ser visibles.
2. Debe haber un buen modelo conceptual con una imagen de sistema consistente.
3. La interfaz debe incluir buenos mapeos (mappings) que revelen las relaciones entre las etapas.
4. Los usuarios deben recibir retroalimentación continua (feedback).
Niveles de Procesamiento Emocional (Emotional Design)
En Emotional Design (2005), Norman introdujo la idea de que el diseño debe abordar tres niveles diferentes de procesamiento cognitivo y emocional:
1. Visceral: Nivel más inmediato, relacionado con la respuesta emocional y las reacciones a los aspectos sensoriales antes de la interacción. El diseño visceral busca el afecto (la respuesta psicológica o emocional apropiada).
2. Conductual (Behavioral): Nivel medio que gestiona comportamientos cotidianos simples, históricamente abordado por la usabilidad. Corresponde a las Metas Finales del usuario (lo que quiere lograr).
3. Reflexivo (Reflective): Nivel más alto que implica la consideración consciente de las experiencias, asociando significado y valor al artefacto (Metas de Vida).
Norman también defiende el Diseño Centrado en la Actividad (ACD), basado en la Teoría de la Actividad, que se enfoca primordialmente en la comprensión de las actividades que las personas realizan con un conjunto de herramientas para influir favorablemente en el diseño de esas herramientas.

--------------------------------------------------------------------------------
Psicología del Color
El color es un elemento visual fundamental que se utiliza en el diseño para atraer la atención, agrupar elementos, indicar significado y mejorar la estética. Sin embargo, su uso indebido puede dañar gravemente la forma y función de un diseño.
Componentes del Color y Usos
Los diseñadores piensan en el color en términos de valor, matiz (hue) y saturación:
• Valor (Value): Lo claro u oscuro que es un color. Los usuarios perciben rápidamente los contrastes de valor para diferenciar elementos y es útil para llamar la atención.
• Matiz (Hue): El color puro (rojo, verde, azul). Usar demasiados matices puede provocar el "efecto carnaval" que abruma al usuario.
• Saturación (Saturation): La pureza del color. Los colores altamente saturados se usan para atraer atención.
Si dos objetos en la interfaz comparten el mismo color, los usuarios asumen que están relacionados o son similares; los colores contrastantes sugieren una diferencia categórica.

### Ejemplos Prácticos Visuales

**Ejemplo 1: Botones de Acción**
```css
/* Botón primario - verde saturado para acción principal */
.btn-primary {
    background-color: #28a745; /* Verde saturado */
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
}

/* Botón secundario - gris con menos saturación */
.btn-secondary {
    background-color: #6c757d; /* Gris medio */
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
}

/* Botón de peligro - rojo saturado para alertas */
.btn-danger {
    background-color: #dc3545; /* Rojo saturado */
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
}
```

**Ejemplo 2: Sistema de Estados**
```html
<!-- Mensajes de estado usando color como indicador -->
<div class="alert-success">
    ✅ Operación completada exitosamente
</div>
<div class="alert-warning">
    ⚠️ Advertencia: Revise los datos ingresados
</div>
<div class="alert-error">
    ❌ Error: No se pudo procesar la solicitud
</div>
```

```css
.alert-success { 
    background-color: #d4edda; /* Verde claro */
    border-left: 4px solid #28a745; /* Verde saturado */
    color: #155724; /* Verde oscuro */
}
.alert-warning { 
    background-color: #fff3cd; /* Amarillo claro */
    border-left: 4px solid #ffc107; /* Amarillo saturado */
    color: #856404; /* Amarillo oscuro */
}
.alert-error { 
    background-color: #f8d7da; /* Rojo claro */
    border-left: 4px solid #dc3545; /* Rojo saturado */
    color: #721c24; /* Rojo oscuro */
}
```

**Ejemplo 3: Agrupación Visual por Color**
```html
<!-- Categorías de productos usando color para agrupar -->
<div class="product-category">
    <div class="product tech">📱 Smartphone</div>
    <div class="product tech">💻 Laptop</div>
    <div class="product clothing">👕 Camiseta</div>
    <div class="product clothing">👖 Pantalón</div>
    <div class="product home">🛋️ Sofá</div>
    <div class="product home">🪑 Silla</div>
</div>
```

```css
.product {
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    display: inline-block;
}

/* Tecnología - Azul */
.tech { 
    background-color: #e3f2fd; /* Azul claro */
    border: 2px solid #2196f3; /* Azul */
}

/* Ropa - Verde */
.clothing { 
    background-color: #e8f5e8; /* Verde claro */
    border: 2px solid #4caf50; /* Verde */
}

/* Hogar - Naranja */
.home { 
    background-color: #fff3e0; /* Naranja claro */
    border: 2px solid #ff9800; /* Naranja */
}
```

**Ejemplo 4: Valor y Contraste para Jerarquía**
```css
/* Títulos con diferentes valores para crear jerarquía */
.title-primary {
    color: #212529; /* Negro intenso - valor muy oscuro */
    font-size: 32px;
    font-weight: bold;
}

.title-secondary {
    color: #495057; /* Gris oscuro - valor medio-oscuro */
    font-size: 24px;
    font-weight: 600;
}

.text-body {
    color: #6c757d; /* Gris medio - valor medio */
    font-size: 16px;
    font-weight: normal;
}

.text-muted {
    color: #adb5bd; /* Gris claro - valor claro */
    font-size: 14px;
    font-style: italic;
}
```
Implicaciones Cognitivas y Culturales
• Emoción y Estado de Ánimo: No hay evidencia sustancial que respalde efectos generales del color sobre la emoción o el estado de ánimo si solo se mira en una pantalla (solo si la persona está rodeada por el color).
• Simbolismo Cultural: No existe un simbolismo universal para los colores, ya que diferentes culturas les adjuntan distintos significados. Por ejemplo, en algunos círculos de inversión, rojo es una pérdida financiera.
Accesibilidad y Mejores Prácticas
1. Codificación Redundante: El color no debe utilizarse como el único medio visual para transmitir información, indicar una acción o distinguir un elemento visual.
2. Daltonismo: Debe considerarse el daltonismo (ceguera al color), una condición común que afecta aproximadamente a 1 de cada 12 hombres y 1 de cada 200 mujeres.
3. Consistencia: Debe haber consistencia en el uso del color en todo el sistema.
4. Monocromo: Se recomienda diseñar primero en monocromo para asegurar que el contenido esté organizado lógicamente antes de depender del color.
5. Combinaciones de Color: Se debe evitar poner azul y rojo o verde y rojo cerca uno del otro en una pantalla, ya que esto puede ser difícil de mirar y puede causar cromostereopsis (el efecto de que líneas de diferentes colores parezcan estar a diferentes profundidades).

### Ejemplos Prácticos de Accesibilidad

**Ejemplo 1: Codificación Redundante - Estados de Formulario**
```html
<!-- INCORRECTO: Solo color -->
<div class="form-field">
    <label>Email:</label>
    <input type="email" class="error">
    <span class="error-text">Email inválido</span>
</div>

<!-- CORRECTO: Color + texto + icono -->
<div class="form-field">
    <label>Email:</label>
    <input type="email" class="error" aria-describedby="email-error">
    <span id="email-error" class="error-text">
        ❌ Error: Formato de email inválido
    </span>
</div>
```

```css
/* Solo color - problemático */
.error { border: 2px solid #dc3545; }
.error-text { color: #dc3545; }

/* Color + iconos + texto - accesible */
.error { 
    border: 2px solid #dc3545; 
    background-image: url('error-icon.svg');
}
.error-text { 
    color: #dc3545;
    font-weight: bold;
}
```

**Ejemplo 2: Diseño Amigable para Daltonismo**
```html
<!-- Gráfico accesible con patrones además de color -->
<div class="chart-legend">
    <div class="legend-item">
        <span class="indicator success pattern-dots"></span>
        Completado (Verde con puntos)
    </div>
    <div class="legend-item">
        <span class="indicator warning pattern-lines"></span>
        En progreso (Amarillo con líneas)
    </div>
    <div class="legend-item">
        <span class="indicator error pattern-solid"></span>
        Error (Rojo sólido)
    </div>
</div>
```

```css
/* Colores + patrones para daltonismo */
.success { background-color: #28a745; }
.warning { background-color: #ffc107; }
.error { background-color: #dc3545; }

.pattern-dots { 
    background-image: radial-gradient(circle, white 20%, transparent 20%);
    background-size: 4px 4px;
}
.pattern-lines { 
    background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, white 2px, white 4px);
}
.pattern-solid { /* Sin patrón adicional */ }
```

**Ejemplo 3: Ratios de Contraste Adecuados**
```css
/* INCORRECTO: Contraste insuficiente */
.bad-contrast {
    color: #999999; /* Gris claro */
    background-color: #ffffff; /* Blanco */
    /* Ratio de contraste: 2.85:1 - No cumple WCAG */
}

/* CORRECTO: Contraste adecuado */
.good-contrast {
    color: #212529; /* Gris muy oscuro */
    background-color: #ffffff; /* Blanco */
    /* Ratio de contraste: 16.73:1 - Cumple AAA */
}

/* CORRECTO: Alternativa con fondo oscuro */
.dark-theme {
    color: #f8f9fa; /* Gris muy claro */
    background-color: #212529; /* Gris muy oscuro */
    /* Ratio de contraste: 16.73:1 - Cumple AAA */
}
```

**Ejemplo 4: Diseño Monocromo Primero**
```css
/* Paso 1: Diseño en escala de grises */
.card-monochrome {
    border: 2px solid #6c757d;
    background-color: #f8f9fa;
    color: #212529;
}

.primary-action-mono {
    background-color: #495057;
    color: #ffffff;
    font-weight: bold;
}

.secondary-action-mono {
    background-color: #adb5bd;
    color: #212529;
}

/* Paso 2: Agregar color manteniendo la jerarquía */
.card-color {
    border: 2px solid #0d6efd;
    background-color: #e7f3ff;
    color: #212529;
}

.primary-action-color {
    background-color: #0d6efd;
    color: #ffffff;
    font-weight: bold;
}

.secondary-action-color {
    background-color: #6c757d;
    color: #ffffff;
}
```

**Ejemplo 5: Evitar Combinaciones Problemáticas**
```html
<!-- INCORRECTO: Combinaciones que causan cromostereopsis -->
<div class="problematic-colors">
    <span style="color: #ff0000; background-color: #0000ff;">Texto rojo sobre azul</span>
    <span style="color: #00ff00; background-color: #ff0000;">Verde sobre rojo</span>
</div>

<!-- CORRECTO: Combinaciones seguras -->
<div class="safe-colors">
    <span class="safe-combo-1">Azul sobre blanco</span>
    <span class="safe-combo-2">Verde sobre gris claro</span>
    <span class="safe-combo-3">Rojo sobre gris muy claro</span>
</div>
```

```css
.safe-combo-1 {
    color: #0d6efd;
    background-color: #ffffff;
}

.safe-combo-2 {
    color: #198754;
    background-color: #f8f9fa;
}

.safe-combo-3 {
    color: #dc3545;
    background-color: #f8f9fa;
}
```

**Ejemplo 6: Sistema de Colores Consistente**
```css
/* Variables CSS para consistencia */
:root {
    /* Colores primarios */
    --primary: #0d6efd;
    --secondary: #6c757d;
    --success: #198754;
    --warning: #ffc107;
    --danger: #dc3545;
    --info: #0dcaf0;
    
    /* Variaciones para accesibilidad */
    --primary-dark: #0b5ed7;
    --primary-light: #cfe2ff;
    --text-primary: #212529;
    --text-secondary: #6c757d;
    --text-light: #adb5bd;
}

/* Uso consistente en toda la aplicación */
.button-primary { background-color: var(--primary); }
.alert-success { background-color: var(--success); }
.text-muted { color: var(--text-secondary); }
```

--------------------------------------------------------------------------------
Gestalt
La Teoría de la Gestalt es un conjunto de principios de percepción que describe cómo el sistema perceptual humano organiza los elementos visuales. Según esta teoría, las personas perciben algo no como un conjunto de características y atributos individuales, sino como un todo unificado en relación con su entorno.
Las fuentes identifican varios principios clave de la Gestalt:
• Ley de Pragnanz (o Simplicidad): Es la tendencia a interpretar imágenes ambiguas como simples y completas en lugar de complejas e incompletas, basándose en una preferencia innata por la simplicidad y los patrones.
• Cierre (Closure): La tendencia a percibir un conjunto de elementos individuales como un único patrón reconocible, rellenando la información faltante o cerrando huecos si es necesario.
• Proximidad: Los elementos que están cercanos entre sí se perciben como más relacionados y se agrupan en un solo chunk o grupo.
• Similitud (Similarity): Los elementos que son similares (en color, tamaño y forma) se perciben como más relacionados que los elementos disímiles.
• Relación Figura-Fondo (Figure-Ground Relationship): El sistema perceptual humano separa los estímulos en figuras (objetos de enfoque) y fondo (el trasfondo indiferenciado).
• Conexión Uniforme (Uniform Connectedness): Los elementos conectados por propiedades visuales uniformes (como líneas o regiones comunes) se perciben como un solo grupo. Este principio es muy poderoso y generalmente supera a la proximidad o la similitud.

--------------------------------------------------------------------------------
Affordances y Señalizadores
El concepto de affordance es una piedra angular de la usabilidad y el diseño de interacción, proporcionando pistas sobre cómo usar un objeto o interfaz.
Definición y Evolución del Concepto
1. Affordance (Gibson): James Gibson (1979) lo definió originalmente como las posibilidades de acción que el entorno ofrece. Cuando el affordance de un objeto corresponde con su función prevista, el diseño es más eficiente y fácil de usar.
2. Affordance Percibida (Norman): Don Norman modificó la idea original centrándose en las affordances percibidas. En el diseño, el affordance se considera un concepto puramente cognitivo, que se refiere a lo que creemos que el objeto puede hacer, no necesariamente lo que realmente hace.
Affordances como Pistas Visuales
Las affordances son las pistas visuales en el diseño de un objeto que sugieren cómo podemos usarlo. Para el diseñador, la meta es asegurar que los usuarios puedan percibir, descifrar e interpretar fácilmente qué es el objeto y qué deben hacer con él.
• Pistas Claras: Cuanto más claras sean las pistas visuales, más inequívoca será la señal.
• Ejemplos en la Interfaz: El estilo tridimensional (sombras y contornos) de algunos botones sugiere claramente que están destinados a ser pulsados (clicked). De manera similar, un cuadro rectangular con un borde sugiere que se puede hacer clic en él y escribir algo; el borde actúa como el affordance que aclara su función.
• Affordance Manual: Se refiere al entendimiento instintivo de cómo se manipulan los objetos con las manos (por ejemplo, la urgencia de empujar un objeto redondo, cóncavo y del tamaño de un dedo).
El Rol de los Señalizadores (Signifiers)
Norman ha propuesto que las pistas visuales sean llamadas "señalizadores" (signifiers) en la nueva edición de The Design of Everyday Things. Esta propuesta surgió porque el uso popular de affordance se había desviado de su intención original (la propiedad física real).
Sin embargo, el término affordance sigue siendo el uso predominante en el mundo del diseño para referirse a estas pistas visuales. La tendencia actual de diseño "plano" (flattening) en interfaces móviles puede reducir las affordances virtuales al eliminar las sombras y los contornos, amenazando la facilidad de uso en favor de la simplificación visual.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Norman, D. A. (1988). The Psychology of Everyday Things. Basic Books.
Norman, D. A. (2005). Emotional Design. New York: Basic Books.
Shneiderman, B., & Plaisant, C. (2004). Designing the User Interface: Strategies for Effective Human Computer Interaction (4th ed.). Pearson Education, Inc.
Krug, S. (2006). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. New Riders.
Díaz, S. (s.f.). UX Design hazlo fácil pensando en el usuario. Ediciones de la U / Editorial Ra-ma.
MacKenzie, I. S. (2013). Human-Computer Interaction: An Empirical Research Perspective. Elsevier Inc.
Fernández Casado, P. E. (2021). UX Design: Hazlo fácil pensando en el usuario. (Capítulos seleccionados).
Cooper, A., Reimann, R., Cronin, D., & Verplank, B. (2014). About Face: The Essentials of Interaction Design (4th ed.). Wiley.
Williams, R. (2008). 100 Things Every Designer Needs to Know About People. Peachpit Press.
Hanington, B. & Martin, B. (2012). Universal Principles of Design. Rockport Publishers.
