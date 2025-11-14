# Presentación Semana 3: Diseño y Psicología en HCI
## Don Norman, Psicología del Color, Gestalt y Affordances

---

## 🎯 Objetivos de la Presentación

- Comprender las **contribuciones de Don Norman** al diseño centrado en el usuario
- Analizar los **principios de psicología del color** en interfaces
- Dominar los **principios de Gestalt** para organización visual
- Aplicar **affordances y señalizadores** en diseño de interacción
- Integrar **teoría psicológica** en práctica de diseño UX

---

## 📊 Agenda

1. **Don Norman: Diseño Centrado en el Usuario**
2. **Psicología del Color en Interfaces**
3. **Principios de Gestalt en HCI**
4. **Affordances y Señalizadores**
5. **Integración Práctica y Casos de Uso**

---

## 👨‍🎨 Don Norman: Pionero del UX

### Origen del Término "Experiencia del Usuario"
> *"El término experiencia del usuario (UX) probablemente se originó a principios de la década de 1990 en Apple, cuando Norman se unió al equipo como psicólogo cognitivo"*

### Motivación del Término
- **Título original**: Arquitecto de Experiencia del Usuario
- **Problema**: Términos "Interfaz Humana" y "usabilidad" eran demasiado estrechos
- **Objetivo**: Cubrir **todos los aspectos** de la experiencia con un sistema
- **Alcance**: Diseño industrial, gráficos, interfaz, interacción física y manual

---

## 📚 "The Design of Everyday Things" (1988)

### Impacto Histórico
- **Publicación original**: "The Psychology of Everyday Things"
- **Reimpresión**: "The Design of Everyday Things"
- **Análisis**: Temas psicológicos en diseño de tecnología cotidiana
- **Concepto clave**: **Affordances percibidas**

### Enfoque Revolucionario
> *"Un análisis refrescante sobre los temas psicológicos en el diseño de la tecnología cotidiana"*

---

## 🔄 Modelo Cognitivo: Las 7 Etapas de Acción

### Ciclo de Interacción (Norman, 1988)
1. **Formar el objetivo**
2. **Formar la intención**
3. **Especificar la acción**
4. **Ejecutar la acción**
5. **Percibir el estado**
6. **Interpretar el estado**
7. **Evaluar el resultado**

### Patrón Cíclico
- **Naturaleza**: Proceso dinámico y continuo
- **Aplicación**: Base para análisis de interacción persona-Computador

---

## ⚠️ Los Dos Golfos de la Interacción

### 1. Golfo de Ejecución
> *"La falta de coincidencia entre las intenciones del usuario y las acciones permitidas por el sistema"*

### 2. Golfo de Evaluación
> *"La falta de coincidencia entre la representación del sistema y las expectativas del usuario"*

### Impacto en el Diseño
- **Problema**: Desconexión usuario-sistema
- **Solución**: Principios de buen diseño

---

## ✅ Los 4 Principios de Buen Diseño (Norman)

### 1. Visibilidad
**El estado y las alternativas de acción deben ser visibles**

### 2. Modelo Conceptual
**Debe haber un buen modelo conceptual con una imagen de sistema consistente**

### 3. Mappings (Mapeos)
**La interfaz debe incluir buenos mapeos que revelen las relaciones entre las etapas**

### 4. Feedback (Retroalimentación)
**Los usuarios deben recibir retroalimentación continua**

---

## 🧠 Niveles de Procesamiento Emocional (2005)

### 1. Nivel Visceral
- **Naturaleza**: Respuesta emocional inmediata
- **Momento**: Antes de la interacción
- **Objetivo**: Buscar el **afecto apropiado**
- **Enfoque**: Aspectos sensoriales y estéticos

### 2. Nivel Conductual (Behavioral)
- **Naturaleza**: Comportamientos cotidianos simples
- **Enfoque tradicional**: Usabilidad
- **Objetivo**: **Metas Finales** del usuario
- **Función**: Lo que el usuario quiere lograr

### 3. Nivel Reflexivo
- **Naturaleza**: Consideración consciente de experiencias
- **Función**: Asociar significado y valor al artefacto
- **Objetivo**: **Metas de Vida**
- **Alcance**: Impacto a largo plazo

---

## 🎨 Diseño Centrado en la Actividad (ACD)

### Fundamento Teórico
- **Base**: Teoría de la Actividad
- **Enfoque**: Comprensión de actividades que las personas realizan
- **Herramientas**: Conjunto de instrumentos para tareas específicas
- **Objetivo**: Influir favorablemente en el diseño

### Diferencia con UCD
- **UCD**: Centrado en el usuario
- **ACD**: Centrado en la actividad y herramientas

---

## 🌈 Psicología del Color: Fundamentos

### Componentes del Color

#### Valor (Value)
- **Definición**: Lo claro u oscuro que es un color
- **Función**: Crear contrastes para diferenciar elementos
- **Uso**: Llamar la atención y establecer jerarquía

#### Matiz (Hue)
- **Definición**: El color puro (rojo, verde, azul)
- **Riesgo**: "Efecto carnaval" con demasiados matices
- **Principio**: Usar con moderación

#### Saturación (Saturation)
- **Definición**: La pureza del color
- **Uso**: Colores altamente saturados atraen atención
- **Aplicación**: Elementos de acción principal

---

## 🎨 Principios de Color en HCI

### Regla de Asociación
> *"Si dos objetos en la interfaz comparten el mismo color, los usuarios asumen que están relacionados o son similares"*

### Regla de Contraste
> *"Los colores contrastantes sugieren una diferencia categórica"*

### Implicaciones de Diseño
- **Agrupación**: Color como elemento organizador
- **Diferenciación**: Contraste para separar categorías
- **Jerarquía**: Valor para importancia relativa

---

## 💡 Ejemplos Prácticos: Botones de Acción

```css
/* Botón primario - verde saturado para acción principal */
.btn-primary {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
}

/* Botón secundario - gris con menos saturación */
.btn-secondary {
    background-color: #6c757d;
    color: white;
}

/* Botón de peligro - rojo saturado para alertas */
.btn-danger {
    background-color: #dc3545;
    color: white;
}
```

---

## 🚦 Sistema de Estados con Color

### Estados Visuales
- **✅ Éxito**: Verde para operaciones completadas
- **⚠️ Advertencia**: Amarillo para precauciones  
- **❌ Error**: Rojo para fallos del sistema

### Implementación CSS
```css
.alert-success { 
    background-color: #d4edda;
    border-left: 4px solid #28a745;
    color: #155724;
}
.alert-warning { 
    background-color: #fff3cd;
    border-left: 4px solid #ffc107;
    color: #856404;
}
.alert-error { 
    background-color: #f8d7da;
    border-left: 4px solid #dc3545;
    color: #721c24;
}
```

---

## 🌍 Implicaciones Cognitivas y Culturales

### Limitaciones Emocionales
> *"No hay evidencia sustancial que respalde efectos generales del color sobre la emoción o el estado de ánimo si solo se mira en una pantalla"*

### Relativismo Cultural
> *"No existe un simbolismo universal para los colores, ya que diferentes culturas les adjuntan distintos significados"*

### Ejemplo Cultural
- **Rojo en finanzas**: En algunos círculos, representa pérdida financiera
- **Variación regional**: Significados diferentes según contexto cultural

---

## ♿ Accesibilidad: Principios Fundamentales

### 1. Codificación Redundante
> *"El color no debe utilizarse como el único medio visual para transmitir información"*

### 2. Consideración del Daltonismo
- **Estadística**: ~1 de cada 12 hombres, ~1 de cada 200 mujeres
- **Solución**: Patrones, iconos, texto adicional

### 3. Consistencia del Sistema
- **Uso coherente**: Mismo color = mismo significado
- **Variables CSS**: Mantener paleta centralizada

### 4. Diseño Monocromo Primero
- **Metodología**: Organizar lógicamente antes de depender del color
- **Beneficio**: Asegurar funcionalidad sin color

---

## 🎯 Mejores Prácticas de Accesibilidad

### Codificación Redundante - Ejemplo
```html
<!-- CORRECTO: Color + texto + icono -->
<div class="form-field">
    <label>Email:</label>
    <input type="email" class="error" aria-describedby="email-error">
    <span id="email-error" class="error-text">
        ❌ Error: Formato de email inválido
    </span>
</div>
```

### Ratios de Contraste
```css
/* CORRECTO: Contraste adecuado */
.good-contrast {
    color: #212529; /* Gris muy oscuro */
    background-color: #ffffff; /* Blanco */
    /* Ratio de contraste: 16.73:1 - Cumple AAA */
}
```

---

## 🧩 Principios de Gestalt

### Definición Central
> *"Las personas perciben algo no como un conjunto de características individuales, sino como un todo unificado en relación con su entorno"*

### Filosofía Fundamental
- **Percepción holística**: El todo es mayor que la suma de sus partes
- **Organización visual**: Sistema perceptual busca patrones
- **Aplicación HCI**: Organización de elementos en interfaces

---

## 📏 Ley de Pragnanz (Simplicidad)

### Principio
> *"Tendencia a interpretar imágenes ambiguas como simples y completas en lugar de complejas e incompletas"*

### Características
- **Preferencia innata**: Por simplicidad y patrones
- **Aplicación**: Diseño limpio y claro
- **Beneficio**: Reducción de carga cognitiva

### Implicación para HCI
- **Interfaces simples**: Más fáciles de procesar
- **Evitar complejidad**: Innecesaria en el diseño

---

## 🔗 Cierre (Closure)

### Definición
> *"Tendencia a percibir un conjunto de elementos individuales como un único patrón reconocible"*

### Mecanismo
- **Completar información**: Rellenar huecos faltantes
- **Patrones reconocibles**: Crear formas completas mentalmente
- **Aplicación**: Iconos, logotipos, navegación

### Ejemplo en HCI
- **Iconos simplificados**: Users completar detalles faltantes
- **Botones con bordes**: Sugerir áreas clickeables

---

## 📍 Proximidad

### Principio
> *"Los elementos que están cercanos entre sí se perciben como más relacionados y se agrupan en un solo chunk"*

### Aplicaciones Prácticas
- **Formularios**: Campos relacionados cerca
- **Navegación**: Elementos del mismo nivel agrupados
- **Contenido**: Títulos cerca de su contenido

### Implementación CSS
```css
.form-group {
    margin-bottom: 24px; /* Espacio entre grupos */
}

.form-group label,
.form-group input {
    margin-bottom: 4px; /* Elementos relacionados juntos */
}
```

---

## 🎨 Similitud (Similarity)

### Principio
> *"Los elementos que son similares (en color, tamaño y forma) se perciben como más relacionados"*

### Tipos de Similitud
- **Color**: Elementos del mismo color se agrupan
- **Tamaño**: Elementos de tamaño similar se relacionan
- **Forma**: Formas similares sugieren función similar

### Ejemplo: Categorización por Color
```css
/* Tecnología - Azul */
.tech { 
    background-color: #e3f2fd;
    border: 2px solid #2196f3;
}

/* Ropa - Verde */
.clothing { 
    background-color: #e8f5e8;
    border: 2px solid #4caf50;
}
```

---

## 🖼️ Relación Figura-Fondo

### Definición
> *"El sistema perceptual humano separa los estímulos en figuras (objetos de enfoque) y fondo (el trasfondo indiferenciado)"*

### Aplicación en HCI
- **Modales**: Contenido principal vs fondo oscurecido
- **Botones**: Elemento activo vs superficie
- **Tarjetas**: Contenido vs fondo de página

### Técnicas de Implementación
- **Sombras**: Elevar elementos importantes
- **Contraste**: Diferenciar figura del fondo
- **Z-index**: Capas de profundidad visual

---

## 🔗 Conexión Uniforme

### Principio Poderoso
> *"Los elementos conectados por propiedades visuales uniformes se perciben como un solo grupo"*

### Superioridad
- **Más fuerte**: Que proximidad o similitud
- **Conexiones visuales**: Líneas, regiones comunes
- **Aplicación**: Navegación, formularios complejos

### Ejemplo: Breadcrumbs
```html
<nav class="breadcrumb">
    <span>Inicio</span> → 
    <span>Productos</span> → 
    <span>Laptops</span> → 
    <span class="current">MacBook Pro</span>
</nav>
```

---

## 🎯 Affordances: Definición y Evolución

### Affordance Original (Gibson, 1979)
> *"Las posibilidades de acción que el entorno ofrece"*

### Affordance Percibida (Norman)
> *"Se refiere a lo que creemos que el objeto puede hacer, no necesariamente lo que realmente hace"*

### Diferencia Clave
- **Gibson**: Propiedades físicas reales
- **Norman**: Percepción cognitiva del usuario

---

## 🔍 Affordances como Pistas Visuales

### Objetivo del Diseñador
> *"Asegurar que los usuarios puedan percibir, descifrar e interpretar fácilmente qué es el objeto y qué deben hacer con él"*

### Características de Buenas Affordances
- **Pistas claras**: Señales inequívocas
- **Intuitividad**: Comprensión inmediata
- **Consistencia**: Comportamiento predecible

### Ejemplos en Interfaces
- **Botones 3D**: Sombras sugieren que se pueden presionar
- **Campos de texto**: Bordes indican que se puede escribir
- **Enlaces**: Subrayado o color diferente sugiere clickeabilidad

---

## 🎨 Affordances en el Diseño Visual

### Estilo Tridimensional
> *"El estilo tridimensional (sombras y contornos) de algunos botones sugiere claramente que están destinados a ser pulsados"*

### Affordance Manual
> *"Entendimiento instintivo de cómo se manipulan los objetos con las manos"*

### Ejemplo: Botón con Affordance Visual
```css
.button-3d {
    background: linear-gradient(to bottom, #4CAF50, #45a049);
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: all 0.2s;
}

.button-3d:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.3);
}

.button-3d:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
```

---

## 🏷️ Señalizadores (Signifiers)

### Propuesta de Norman
> *"Las pistas visuales sean llamadas 'señalizadores' (signifiers) en la nueva edición de The Design of Everyday Things"*

### Razón del Cambio
- **Problema**: Uso popular de "affordance" se desvió de intención original
- **Solución**: Término más preciso para pistas visuales
- **Realidad**: "Affordance" sigue siendo predominante en diseño

### Debate Terminológico
- **Académico**: Signifiers más preciso
- **Industria**: Affordances más establecido

---

## 📱 Desafío del Diseño Plano

### Tendencia Actual
> *"La tendencia actual de diseño 'plano' en interfaces móviles puede reducir las affordances virtuales"*

### Impacto Negativo
- **Eliminación**: Sombras y contornos
- **Consecuencia**: Amenaza la facilidad de uso
- **Trade-off**: Simplicidad visual vs usabilidad

### Solución: Flat Design 2.0
- **Sombras sutiles**: Mantener affordances mínimas
- **Micro-interacciones**: Feedback visual al hover/touch
- **Consistencia**: Patrones predecibles

---

## ⚖️ Integración de Principios

### Modelo Mental Completo
1. **Norman**: Modelo cognitivo y emocional
2. **Color**: Comunicación visual efectiva
3. **Gestalt**: Organización perceptual
4. **Affordances**: Pistas de interacción

### Enfoque Holístico
- **Psicología**: Base científica
- **Estética**: Atractivo visual
- **Usabilidad**: Funcionalidad práctica
- **Accesibilidad**: Inclusión universal

---

## 🔄 Proceso de Diseño Integrado

### Fase 1: Investigación Psicológica
- **Modelo mental**: Entender usuarios
- **Contexto emocional**: Niveles de procesamiento
- **Limitaciones perceptuales**: Daltonismo, contraste

### Fase 2: Diseño Visual
- **Gestalt**: Organización de elementos
- **Color**: Comunicación y jerarquía
- **Affordances**: Pistas de interacción

### Fase 3: Validación
- **Testing**: Con usuarios reales
- **Accesibilidad**: Verificación técnica
- **Iteración**: Mejora continua

---

## 📊 Casos de Uso Práticos

### E-commerce: Botón de Compra
```css
.buy-button {
    /* Norman: Affordance clara */
    background: linear-gradient(to bottom, #ff6b35, #f7931e);
    
    /* Color: Naranja para urgencia */
    border: 2px solid #e85a00;
    
    /* Gestalt: Proximidad con precio */
    margin-top: 8px;
    
    /* Affordance: Visual 3D */
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    border-radius: 8px;
    
    /* Accesibilidad */
    font-weight: bold;
    font-size: 18px;
    color: white;
}
```

### Formulario de Contacto
- **Proximidad**: Campos relacionados agrupados
- **Color**: Estados de validación claros
- **Affordances**: Campos con bordes definidos
- **Feedback**: Retroalimentación inmediata

---

## 🎯 Síntesis: Principios Universales

### Coherencia Teórica
1. **Procesamiento cognitivo**: Base en psicología
2. **Percepción visual**: Principios de Gestalt
3. **Comunicación cromática**: Psicología del color
4. **Interacción intuitiva**: Affordances y signifiers

### Aplicación Práctica
- **Diseño sistemático**: No intuitivo o casual
- **Base científica**: Decisiones fundamentadas
- **Testing continuo**: Validación con usuarios
- **Mejora iterativa**: Refinamiento constante

---

## 📚 Referencias Clave

### Obras Fundamentales
- **Norman, D. A. (1988)**: *The Psychology of Everyday Things*
- **Norman, D. A. (2005)**: *Emotional Design*
- **Gibson, J. J. (1979)**: *The Ecological Approach to Visual Perception*

### Diseño y Usabilidad
- **Krug, S. (2006)**: *Don't Make Me Think, Revisited*
- **Cooper, A. et al. (2014)**: *About Face: The Essentials of Interaction Design*
- **Williams, R. (2008)**: *100 Things Every Designer Needs to Know About People*

---

## 💡 Reflexiones Finales

### Preguntas para Considerar
- ¿Cómo **equilibrar** estética y funcionalidad en diseños modernos?
- ¿Qué **papel** juega la cultura en la percepción del color?
- ¿Cómo **mantener** affordances en diseños minimalistas?

### Desafío Profesional
> *"El diseño exitoso requiere integrar psicología, estética y tecnología de manera coherente y accesible"*

---

## 🎯 Para Profundizar

### Herramientas Prácticas
- **Contrast checkers**: WebAIM, Colour Contrast Analyser
- **Color palette generators**: Coolors, Adobe Color
- **Gestalt examples**: Laws of UX, Gestalt principles guide

### Recursos Académicos
- **Research**: CHI Conference proceedings
- **Journals**: International Journal of Human-Computer Studies
- **Testing**: UserTesting, Maze, Hotjar

### Frameworks de Diseño
- **Design systems**: Material Design, Human Interface Guidelines
- **Accessibility**: WCAG 2.1, Section 508
- **Usability**: Nielsen's heuristics, ISO 9241

---

*Presentación basada en el Compendio de Temas de Diseño y Psicología en HCI - Semana 3, PP-07-HCI-ASC*