# Presentación Semana 4: Modelos Predictivos y Carga Cognitiva en HCI
## Caso de Uso Conductor: App de Pedidos para Restaurante

---

## 🎯 Objetivos de la Presentación

- Aplicar las **leyes de Fitts y Hick** al flujo de pedidos mesa→cocina
- Integrar principios de **percepción, atención y memoria** para camareros y chefs
- Disminuir la **carga cognitiva** durante horas pico
- Usar la **Ley de Miller** para agrupar estados y órdenes sin saturar a la brigada

---

## 📊 Agenda

1. **Contexto del Caso**
2. **Ley de Fitts y acciones clave**
3. **Ley de Hick en elección de platos**
4. **Percepción, Atención y Memoria**
5. **Carga Cognitiva y Ley de Miller**
6. **Implicaciones y Referencias**

---

## 🍽️ Caso de Uso: App de Pedidos Mesa→Cocina

> *"En el servicio de un restaurante, cada interacción debe convertir pedidos complejos en platos servidos sin errores."*

- **Escenario**: App móvil para meseros que envían pedidos al sistema de cocina; panel táctil en cocina para marcar cada pedido como *en proceso*, *preparado* o *servido*.
- **Usuarios**: Meseros, jefe de cocina y estaciones (parrilla, barra fría, postres).
- **Reto**: Evitar errores de captura, coordinar múltiples pedidos y mantener visibilidad del estado de cada mesa.

---

## 🎯 Ley de Fitts en la App

### Conceptos Clave
- La ley modela el tiempo de movimiento: `MT = a + b × ID`, donde `ID = log₂(2A/W)`.
- Movimientos balísticos + ajustes finos determinan precisión en selecciones críticas.

### Aplicación en el Restaurante
- **Botones primarios** (enviar pedido, marcar entregado) se ubican en esquinas del dispositivo para aprovechar bordes como objetivos infinitos.
- **Áreas táctiles grandes** para estados (*en proceso*, *preparado*, *servido*) minimizan `ID` cuando la cocina opera con manos ocupadas o guantes.
- **Matriz fija de mesas** proxémica: mesas vecinas en planta se reflejan adyacentes en app, reduciendo desplazamientos balísticos al tomar varios pedidos.
- **Resultado**: menos toques erróneos, envío más rápido de combinaciones y transición fluida entre estaciones.

---

## ⚖️ Ley de Hick para Decidir Platos

### Recordatorio
- `RT = a + b log₂(n)`: cada opción extra agrega ~150 ms de procesamiento.
- La sobreestimulación lleva a parálisis decisional.

### En el Flujo Mesa→Cocina
- **Menús jerárquicos**: primero categoría (entradas, fondos, bebidas), luego variación (clásica, especial, vegana) para mantener `n` manejable por nivel.
- **Modificadores frecuentes** (sin gluten, término de cocción, extras) se presentan como presets priorizados por popularidad en lugar de listas largas.
- **Recomendaciones inteligentes**: al seleccionar un combo, la app propone automáticamente guarniciones compatibles, reduciendo decisiones redundantes para el mesero.

---

## 👀 Percepción y Atención Dirigidas

### Percepción Visual
- Alterna entre **fijaciones** (≥200 ms) y **sacadas** rápidas (30–120 ms).
- La visión periférica captura el *gist*; la central valida el detalle.

### Diseño guiado por Atención
- **Codificación redundante** en estados: amarillo (*en proceso*), verde (*preparado*), azul (*servido*), acompañados de íconos y sonidos discretos para priorizar órdenes calientes.
- **Visión periférica**: tiras laterales muestran tiempos promedio de espera por mesa para que el jefe de sala perciba demoras sin revisar cada detalle.
- **Atención dividida**: badges persistentes recuerdan cuentas abiertas o alergias especiales cuando el mesero cambia entre mesas.

---

## 🧠 Memoria y Reconocimiento

### Memoria de Trabajo
- Limitada; foco de la Ley de Miller y vulnerable a interrupciones.

### Estrategias en la App
- **Iconografía gastronómica estándar** (parrilla, barra, bebidas) facilita reconocimiento instantáneo de responsables.
- **Tarjetas de pedido** mantienen jerarquía consistente: mesa → comensal → platos → notas; activa schemata previos de los meseros.
- **Efectos seriales**: listas de preparación resaltan el primer y último pedido de cada cola para aprovechar primacía y recencia durante mise en place.

---

## 🧮 Gestión de la Carga Cognitiva

### Factores de Sobrecarga
- Exceso de opciones, reflexión prolongada, legibilidad deficiente y patrones inusuales.

### Respuestas de Diseño
- **Eliminar ruido**: ocultar ingredientes raros tras un botón “ver más” y destacar solo alergias críticas en el primer plano.
- **Agrupar (chunking)** pedidos por estación (parrilla, wok, postres) y por mesa para que cada chef procese bloques coherentes.
- **Automatizar** cálculos repetitivos (por ejemplo, costeo o división de cuentas) y usar reglas context-aware que alertan si una mesa espera más del tiempo objetivo.

---

## 7 ± 2: Ley de Miller en Pedidos

### Principios
- La memoria inmediata retiene ~5–9 elementos; investigaciones recientes apuntan a ≈4 cuando no hay chunking.
- El chunking solo funciona si los fragmentos son significativos.

### Aplicación en el Restaurante
- **Máximo siete pedidos visibles por columna** en la pantalla de cocina; el resto se colapsa en grupos por mesa o prioridad.
- **Estados chunked**: solo tres estados globales (*en proceso*, *preparado*, *servido*) con sub-etiquetas opcionales (ej. “esperando entrega”) para no saturar memoria.
- **Acciones limitadas** por tarjeta (duplicar, modificar, cancelar, marcar listo, notificar) ≤5 para mantener la carga dentro del rango 7 ± 2.

---

## ✨ Implicaciones para el Caso de Uso

1. **Controles estratégicos**: bordes y esquinas reservados para acciones críticas (Fitts).
2. **Menús escalonados** y presets para combos y modificadores (Hick).
3. **Codificación multisensorial** y jerarquía visual clara para guiar atención.
4. **Chunking por estación y estado** para mantener la carga cognitiva sostenible.
5. **Limitación consciente de opciones visibles** según la Ley de Miller.

---

## 📚 Referencias Clave

- Fitts, P. M. (1954). *The information capacity of the human motor system in controlling amplitude of movement.*
- Hick, W. E. (1952). *On the rate of gain of information.*
- Hyman, R. (1953). *Stimulus information as a determinant of reaction time.*
- Keele, S. W. (1973). *Attention and Human Performance.*
- MacKenzie, I. S. (1992, 2013). Investigaciones sobre la ley de Fitts y HCI.
- Miller, G. A. (1956). *The magical number seven, plus or minus two.*
- Norman, D. A. (1988). *The Psychology of Everyday Things.*
- Shneiderman, B., & Plaisant, C. (2004). *Designing the User Interface.*
- Williams, R. (2008). *100 Things Every Designer Needs to Know About People.*

---

*Presentación elaborada a partir del compendio de Semana 4 - Leyes de Fitts y Hick, Atención, Memoria, Percepción, Carga Cognitiva y Ley de Miller.*
