# 🏦 Caso de Uso: Rediseño de BancoApp

## 📋 Resumen Ejecutivo

**BancoApp** es una aplicación de banca móvil ficticia que sirve como hilo conductor para toda la presentación de HCI Semana 3. A través de este caso real y relatable, los estudiantes aprenden cómo aplicar principios de psicología y diseño para resolver problemas concretos de usabilidad.

## 🎯 Objetivos Pedagógicos

1. **Contextualización**: Dar contexto real a conceptos teóricos abstractos
2. **Aplicación Práctica**: Mostrar cómo cada principio resuelve un problema específico
3. **Engagement**: Mantener el interés con un caso coherente y progresivo
4. **Transferencia**: Facilitar que los estudiantes apliquen lo aprendido a sus propios proyectos

## 📊 Situación Inicial

### Métricas del Problema
- **Tasa de abandono**: 45% (usuarios que no completan tareas)
- **Satisfacción**: 2.8/5 estrellas
- **Tiempo promedio**: 8 minutos para completar una transferencia

### Quejas Principales de Usuarios
1. "No encuentro el botón de transferencia"
2. "Los colores me confunden"
3. "No sé si hice clic o no"
4. "Todo se ve igual"
5. "Es difícil de leer"

## 🔍 Análisis por Principio HCI

### 1. Don Norman - Diseño Centrado en el Usuario

**Problema Identificado**: "No encuentro el botón de transferencia"
- Falta de visibilidad
- Sin feedback visual
- Modelo conceptual confuso

**Solución Aplicada**:
- ✅ **Visibilidad**: Mostrar saldo actual, opciones disponibles claramente
- ✅ **Modelo Conceptual**: Iconos consistentes, flujo lógico
- ✅ **Mappings**: Botón → Formulario → Confirmación → Comprobante
- ✅ **Feedback**: Animaciones de carga, confirmaciones visuales

**Resultado**: Usuarios encuentran funciones en < 2 segundos

### 2. Psicología del Color

**Problema Identificado**: "Los colores me confunden"
- Todos los botones grises
- Sin jerarquía visual
- Sin diferenciación de acciones

**Solución Aplicada**:
- ✅ **Matiz**: Verde para "Transferir" (acción positiva), Rojo para "Cancelar"
- ✅ **Saturación**: Alta saturación para botón principal
- ✅ **Valor**: Contraste para crear jerarquía

**Demo Interactiva**: Experimentar con HSL para encontrar el color perfecto del botón "Transferir"

**Resultado**: Identificación de acción principal en < 2 segundos

### 3. Principios de Gestalt

**Problema Identificado**: "Todo se ve igual"
- Sin agrupación de funciones relacionadas
- Elementos dispersos sin organización
- Difícil escanear la interfaz

**Solución Aplicada**:
- ✅ **Proximidad**: Agrupar "Transferir", "Pagar", "Recargar" como "Operaciones"
- ✅ **Similitud**: Mismo estilo para operaciones financieras
- ✅ **Conexión Uniforme**: Líneas que conectan pasos de transferencia
- ✅ **Figura-Fondo**: Modal de confirmación sobre fondo oscurecido

**Demo Interactiva**: Ajustar espaciado entre grupos del menú

**Resultado**: Usuarios identifican grupos de funciones inmediatamente

### 4. Affordances y Señalizadores

**Problema Identificado**: "No sé si hice clic o no"
- Botones sin pistas visuales
- Sin estados hover
- Diseño plano extremo sin affordances

**Solución Aplicada**:
- ✅ **Sombras sutiles**: Sugieren elevación y clickeabilidad
- ✅ **Estados hover**: Feedback visual inmediato
- ✅ **Gradientes**: Indican profundidad y presionabilidad
- ✅ **Cursor pointer**: Cambia sobre elementos interactivos

**Demo Interactiva**: Comparar diseño 3D vs Plano

**Resultado**: 100% de usuarios identifican elementos clickeables

### 5. Accesibilidad (WCAG)

**Problema Identificado**: "Es difícil de leer"
- Contraste insuficiente
- Texto gris sobre fondo gris claro
- No cumple estándares WCAG

**Solución Aplicada**:
- ✅ **Contraste AAA**: Ratio ≥ 7:1 para texto principal
- ✅ **Contraste AA**: Ratio ≥ 4.5:1 para texto secundario
- ✅ **Tamaños adecuados**: Texto legible en diferentes dispositivos

**Demo Interactiva**: Verificador de contraste en tiempo real

**Resultado**: 100% cumplimiento WCAG 2.1 AA

## 📈 Resultados del Rediseño

### Métricas Finales
| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tasa de abandono | 45% | 18% | ↓ 60% |
| Satisfacción | 2.8/5 | 4.6/5 | ↑ 64% |
| Tiempo promedio | 8 min | 2.8 min | ↓ 65% |

### Impacto Cualitativo
- ✅ Usuarios completan tareas más rápido
- ✅ Menos errores y frustración
- ✅ Mayor confianza en la aplicación
- ✅ Accesible para todos los usuarios
- ✅ Cumplimiento de estándares internacionales

## 🎓 Estructura de la Presentación

### Flujo Narrativo

1. **Introducción** (Slide 1-2)
   - Presentar BancoApp y sus problemas
   - Establecer métricas iniciales
   - Mostrar mockup problemático

2. **Objetivos** (Slide 3)
   - Vincular cada principio HCI con un problema específico
   - Establecer metas medibles

3. **Don Norman** (Slides 4-5)
   - Teoría: Los 4 principios
   - Aplicación: Cómo resolver "No encuentro el botón"

4. **Psicología del Color** (Slides 6-7)
   - Teoría: Valor, Matiz, Saturación
   - **Demo Interactiva**: Diseñar botón de transferencia

5. **Gestalt** (Slides 8-9)
   - Teoría: Proximidad, Similitud, Conexión
   - **Demo Interactiva**: Organizar menú con espaciado

6. **Affordances** (Slides 10-11)
   - Teoría: Affordances percibidas
   - **Demo Interactiva**: Comparar 3D vs Plano

7. **Accesibilidad** (Slide 12)
   - Teoría: WCAG 2.1
   - **Demo Interactiva**: Verificador de contraste

8. **Resultados** (Slides 13-14)
   - Comparación Antes/Después
   - Métricas de mejora
   - Lecciones aprendidas

## 💡 Ventajas Pedagógicas del Caso de Uso

### 1. Coherencia Narrativa
- Historia continua que mantiene el interés
- Cada concepto se construye sobre el anterior
- Progresión lógica de problemas a soluciones

### 2. Relevancia
- Todos usan apps bancarias
- Problemas reconocibles
- Soluciones aplicables a otros dominios

### 3. Concreción
- Ejemplos específicos vs teoría abstracta
- Visualizaciones claras del antes/después
- Métricas reales de impacto

### 4. Interactividad
- 4 demos hands-on
- Experimentación directa con principios
- Aprendizaje activo

### 5. Transferibilidad
- Principios aplicables a cualquier interfaz
- Metodología replicable
- Herramientas prácticas (verificador de contraste, etc.)

## 🔄 Cómo Adaptar el Caso de Uso

### Para Otros Dominios

**E-commerce**:
- Problema: Carrito de compras confuso
- Aplicar mismos principios a checkout

**Salud**:
- Problema: Portal de pacientes complejo
- Aplicar a agendamiento de citas

**Educación**:
- Problema: LMS difícil de navegar
- Aplicar a entrega de tareas

### Para Otros Niveles

**Principiantes**:
- Enfocarse en 1-2 principios
- Demos más guiadas
- Menos métricas

**Avanzados**:
- Agregar testing con usuarios
- Análisis de eye-tracking
- A/B testing

## 📚 Recursos Adicionales

### Para Estudiantes
- Figma/Sketch files del caso
- Código fuente de las demos
- Checklist de principios HCI

### Para Profesores
- Guía de facilitación
- Preguntas de discusión
- Ejercicios adicionales
- Rúbrica de evaluación

## 🎯 Ejercicios Sugeridos

### Durante la Clase
1. **Análisis**: Identificar problemas en apps reales
2. **Diseño**: Proponer soluciones usando principios HCI
3. **Evaluación**: Usar demos para verificar decisiones

### Tarea
1. **Proyecto**: Rediseñar una app existente
2. **Documentación**: Justificar decisiones con principios HCI
3. **Presentación**: Mostrar antes/después con métricas

## 🏆 Conclusión

El caso de BancoApp transforma una presentación teórica en una experiencia de aprendizaje práctica y memorable. Los estudiantes no solo aprenden principios de HCI, sino que ven exactamente cómo aplicarlos para resolver problemas reales y medibles.

**Resultado**: Estudiantes capaces de aplicar principios HCI en sus propios proyectos con confianza y competencia.

---

**Creado para**: PP-07-HCI-ASC Semana 3  
**Profesor**: Mgs. Charlie Alexander Cárdenas Toledo  
**Universidad**: UIDE - Universidad Internacional del Ecuador
