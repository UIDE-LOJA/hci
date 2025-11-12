# 🎨 Demos Interactivas para HCI Semana 3

## 📋 Contenido

Este paquete incluye **4 demos interactivas** para mejorar la presentación de HCI:

1. **Psicología del Color** - Experimenta con HSL y ve el impacto emocional
2. **Principio de Proximidad (Gestalt)** - Visualiza cómo el espaciado agrupa elementos
3. **Affordances 3D vs Plano** - Compara diseños skeuomorphic y flat
4. **Verificador de Contraste WCAG** - Prueba accesibilidad de colores en tiempo real

## 🚀 Cómo Agregar las Demos a tu Presentación

### Opción 1: Agregar Todas las Demos (Recomendado)

1. Abre `presentacion.html`
2. Busca la línea que dice `<!-- Slide 10: Ejemplos Prácticos - Botones de Acción -->`
3. Reemplaza esa slide completa con el contenido de `slides-interactivas.html`
4. Agrega la referencia al script de demos en el `<head>`:

```html
<!-- Presentation JavaScript -->
<script src="presentacion.js" defer></script>
<script src="demos-interactivas.js" defer></script>
```

### Opción 2: Agregar Demos Selectivamente

Copia solo las slides que necesites de `slides-interactivas.html` y pégalas donde desees en tu presentación.

## 📊 Descripción de Cada Demo

### 1. Demo de Psicología del Color

**Características:**
- Sliders para ajustar Matiz, Saturación y Valor
- Vista previa en tiempo real en un botón de contexto
- Feedback automático sobre el impacto psicológico del color
- Muestra códigos HSL y HEX

**Conceptos que enseña:**
- Componentes del color (HSL)
- Impacto emocional de diferentes matices
- Efecto de saturación y valor en la percepción

### 2. Demo de Proximidad (Gestalt)

**Características:**
- Slider para ajustar espaciado entre grupos
- Visualización con canvas que muestra círculos agrupados
- Actualización en tiempo real

**Conceptos que enseña:**
- Principio de Proximidad de Gestalt
- Cómo el espaciado crea agrupaciones visuales
- Aplicación práctica en diseño de interfaces

### 3. Demo de Affordances

**Características:**
- Toggle para cambiar entre diseño 3D y Plano
- Tres botones de ejemplo (Primario, Secundario, Peligro)
- Transiciones suaves entre estilos

**Conceptos que enseña:**
- Affordances visuales en diseño 3D (sombras, gradientes)
- Desafíos del diseño plano
- Importancia de pistas visuales para interacción

### 4. Verificador de Contraste WCAG

**Características:**
- Selectores de color para texto y fondo
- Cálculo automático del ratio de contraste
- Evaluación según estándares WCAG (AAA, AA, AA Large)
- Vista previa de legibilidad en tiempo real

**Conceptos que enseña:**
- Importancia del contraste para accesibilidad
- Estándares WCAG 2.1
- Cómo verificar legibilidad de combinaciones de colores

## 🎯 Beneficios de las Demos Interactivas

✅ **Aprendizaje Activo**: Los estudiantes experimentan directamente con los conceptos
✅ **Comprensión Visual**: Ver cambios en tiempo real refuerza el aprendizaje
✅ **Engagement**: Las demos mantienen la atención y participación
✅ **Práctica Inmediata**: Aplican teoría de forma práctica
✅ **Memorable**: La interacción hace que los conceptos sean más memorables

## 🔧 Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- JavaScript habilitado
- No requiere conexión a internet (excepto Font Awesome CDN)

## 📝 Notas de Implementación

- Las demos usan JavaScript vanilla (sin dependencias)
- Estilos inline para facilitar la integración
- Responsive y adaptable a diferentes tamaños de pantalla
- Optimizado para rendimiento

## 🎨 Personalización

Puedes personalizar fácilmente:
- Colores iniciales de las demos
- Rangos de los sliders
- Textos y mensajes de feedback
- Estilos visuales (modificando los estilos inline)

## 📚 Recursos Adicionales

Para más información sobre los conceptos:
- **Don Norman**: "The Design of Everyday Things"
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **Gestalt Principles**: https://www.interaction-design.org/literature/topics/gestalt-principles

## 🐛 Solución de Problemas

**Las demos no funcionan:**
1. Verifica que `demos-interactivas.js` esté cargado
2. Abre la consola del navegador (F12) para ver errores
3. Asegúrate de que los IDs de los elementos coincidan

**Los sliders no responden:**
- Verifica que estés en la slide correcta
- Recarga la página (F5)

**Los colores no se actualizan:**
- Asegúrate de que el script se carga después del DOM
- Verifica que el atributo `defer` esté en el script tag

## 💡 Sugerencias de Uso en Clase

1. **Introducción**: Muestra la demo antes de explicar la teoría
2. **Exploración Guiada**: Pide a los estudiantes que predigan resultados
3. **Ejercicio Práctico**: Deja que experimenten libremente
4. **Discusión**: Pregunta qué observaron y por qué
5. **Aplicación**: Conecta con ejemplos reales de interfaces

## 📧 Soporte

Si tienes problemas o sugerencias, revisa:
- La consola del navegador para errores
- Que todos los archivos estén en la misma carpeta
- Que las rutas de los scripts sean correctas

---

**¡Disfruta de las demos interactivas y mejora tu enseñanza de HCI!** 🚀
