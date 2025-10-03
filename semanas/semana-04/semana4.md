Ley de Fitts y Ley de Hick
La Ley de Fitts y la Ley de Hick-Hyman son dos modelos matemáticos predictivos que surgieron de la psicología experimental y que fueron cruciales para la HCI al modelar el comportamiento humano como una actividad de procesamiento de información.
Ley de Fitts (Fitts’ Law)
La Ley de Fitts es uno de los modelos más ampliamente utilizados en HCI.
1. Concepto y Base Teórica:
    ◦ Fue desarrollada por el psicólogo experimental Paul Fitts en 1954 como un modelo del movimiento motor humano.
    ◦ La ley se aplica a movimientos rápidos y dirigidos (rapid-aimed movements).
    ◦ Establece que el tiempo requerido para moverse hacia un objetivo (MT) está determinado por la distancia (D o A) al objetivo y el tamaño del objetivo (W).
    ◦ Existe una compensación velocidad-precisión (speed-accuracy trade-off): cuanto más rápido sea el movimiento y más pequeño el objetivo, mayor será la tasa de error.
2. Formulación y Medición:
    ◦ La relación entre la dificultad de la tarea (ID) y el tiempo de movimiento (MT) es lineal.
    ◦ La fórmula utilizada para predecir el tiempo de movimiento es una ecuación lineal simple, donde $a$ y $b$ son coeficientes empíricos: $$\mathbf{MT} = \mathbf{a} + \mathbf{b} \times \mathbf{ID}$$
    ◦ Fitts propuso un Índice de Dificultad (ID), medido en "bits", basándose en la analogía de la teoría de la información, donde la amplitud ($A$) se asemeja a la señal y el ancho del objetivo ($W$) al ruido.
3. Aplicaciones en HCI:
    ◦ El modelo se usa para predecir el tiempo para tareas de selección por puntero.
    ◦ Ayuda a los diseñadores a definir la ubicación y el tamaño de los botones y otros elementos en pantalla.
    ◦ Posicionar un control a lo largo de un borde o en una esquina de la pantalla reduce los movimientos de ajuste fino (homing movements), lo que se traduce en menos errores y adquisiciones más rápidas. El movimiento de puntería consiste en un movimiento balístico seguido de movimientos de ajuste fino, siendo estos últimos responsables de la mayoría de los errores y del tiempo de movimiento.
Ley de Hick (Ley de Hick-Hyman)
1. Concepto y Base Teórica:
    ◦ La Ley de Hick, o Ley de Hick-Hyman, se originó en la investigación sobre el tiempo de reacción de elección (choice reaction time).
    ◦ Demuestra que el tiempo que se tarda en tomar una decisión (RT) aumenta en función del número de opciones ($n$).
    ◦ Una sobreestimulación (demasiadas opciones) puede perjudicar o conducir a la parálisis de decisión.
2. Formulación y Contexto:
    ◦ La formulación matemática de la ley es: $$\mathbf{RT} = \mathbf{a} + \mathbf{b} \log_2(\mathbf{n})$$
    ◦ La constante $b$ representa el tiempo de procesamiento cognitivo para cada opción, con un valor aproximado de 150 ms/bit para humanos.
3. Aplicaciones y Limitaciones:
    ◦ La aplicación práctica sugiere reducir el número de opciones a través de subdivisiones categóricas para facilitar la selección (por ejemplo, en menús).
    ◦ La ley es más aplicable a tareas de toma de decisiones simples donde hay una respuesta única para cada estímulo.
    ◦ No se aplica a decisiones que involucren niveles significativos de búsqueda, lectura o resolución de problemas complejos.

--------------------------------------------------------------------------------
Atención, Memoria y Percepción
Estos son componentes centrales de la cognición humana que definen las capacidades y limitaciones que los diseñadores deben considerar en HCI.
Percepción
La percepción es la primera etapa de procesamiento en el cerebro que ocurre cuando se reciben señales sensoriales del entorno.
• En esta etapa, las asociaciones y los significados toman forma. La capacidad humana para interpretar rápidamente la información sensorial hace posibles los sistemas informáticos modernos.
• La visión es el sentido más importante, ya que la mayoría de las personas obtienen alrededor del 80% de su información a través de la vista.
• La visión opera mediante:
    ◦ Fijaciones: Cuando los ojos están quietos, captando detalles ($\geq 200$ ms).
    ◦ Sacadas: Movimiento rápido para reposicionar el ojo (30-120 ms).
• La visión periférica es importante para captar la idea general (gist) de lo que se ve, y el centro de la pantalla es importante para la visión central.
Atención
La atención es una propiedad del comportamiento humano que es limitada. Al concentrarse en una cosa, la persona no puede atender a otra.
• Atención Dividida: Ocurre al concentrarse en más de una tarea a la vez (ej., enviar mensajes de texto mientras se conduce).
• Atención Selectiva (o Focalizada): Es la capacidad de ignorar eventos extraños y mantener el foco en la tarea primaria. Las personas tienden a prestar atención a la información que es intrínsecamente importante para ellas.
• Diseño: Debido a que la atención es limitada y selectiva, los diseñadores no deben asumir que los usuarios prestarán atención a la información. Si es crucial, la información debe resaltar 10 veces más de lo que se cree necesario (mediante color, tamaño, animación o sonido). La atención sostenida suele durar aproximadamente diez minutos.
Memoria
1. Memoria a Corto Plazo (MCP) / Memoria de Trabajo (Working Memory):
    ◦ Es una de las capacidades más limitadas del ser humano, siendo el foco de la Ley de Miller.
2. Memoria a Largo Plazo y Reconocimiento:
    ◦ Los humanos utilizan esquemas (schemata) para almacenar y recuperar información; es más fácil recordar nueva información si se puede conectar a un esquema ya existente.
    ◦ El diseño debe favorecer el reconocimiento sobre el recuerdo (recall). El reconocimiento (como elegir una opción de un menú) es más fácil y rápido, ya que reduce la carga cognitiva en comparación con el recuerdo libre (como escribir comandos).
3. Efectos en la Interfaz:
    ◦ Efectos de Posición Serial: Los elementos presentados al principio (primacy effect) y al final (recency effect) de una lista son más fáciles de recordar que los elementos intermedios.
    ◦ Profundidad de Procesamiento: La información que es distintiva, relevante y requiere elaboración se recuerda y retiene mejor que la información procesada superficialmente.

--------------------------------------------------------------------------------
Carga Cognitiva
La carga cognitiva se refiere al grado de esfuerzo mental, incluyendo percepción, memoria y resolución de problemas, requerido para lograr un objetivo.
1. Definición y Costo:
    ◦ La carga cognitiva es el tipo de carga que requiere la mayor cantidad de recursos mentales y se considera la más "costosa" en comparación con la carga visual o motora.
    ◦ La primera norma de usabilidad, "¡No me hagas pensar!", busca eliminar o reducir esta carga.
2. Causas de la Sobrecarga Cognitiva:
    ◦ Un número excesivo de opciones donde elegir.
    ◦ Demasiada reflexión requerida.
    ◦ Falta de legibilidad.
    ◦ Diseños que son tan impactantes que merman la legibilidad o que introducen patrones inusuales o iconografía difícil de memorizar.
    ◦ Cuando se obliga al usuario a pensar o recordar.
3. Estrategias para Reducir la Carga Cognitiva:
    ◦ Eliminar elementos (incluyendo tareas) que no ayuden al usuario a conseguir su objetivo.
    ◦ Agrupar (chunking) información que debe ser recordada (si la eliminación no es posible).
    ◦ Aprovechar los patrones de diseño comunes para que los usuarios no tengan que aprender de nuevo.
    ◦ Automatizar tareas intensivas en memoria y cálculo.
    ◦ Los sistemas con conciencia de contexto (context-aware systems) pueden reducir la carga filtrando la información relevante.

--------------------------------------------------------------------------------
Ley de Miller
1. Concepto y Origen:
    ◦ Postulada por George Armitage Miller en 1956.
    ◦ La ley establece que la memoria a corto plazo de los seres humanos tiene una capacidad limitada: solo pueden recordar siete objetos o entidades, más o menos dos ($\mathbf{7 \pm 2}$).
    ◦ El límite (5 a 9 elementos) se relaciona con la capacidad del canal (capacidad de la memoria inmediata). Investigaciones posteriores sugieren que el límite de la memoria de trabajo podría ser aproximadamente cuatro elementos.
2. Fragmentación (Chunking):
    ◦ El agrupamiento o fragmentación (chunking) es una función cognitiva que permite a los humanos establecer relaciones semánticas y aumentar la capacidad de la memoria a corto plazo al agrupar múltiples ítems de bajo nivel en un solo ítem de alto nivel.
    ◦ Este incremento solo es notable si cada fragmento es significativo para el individuo.
3. Aplicación Práctica:
    ◦ La ley es fundamental para evaluar la carga cognitiva.
    ◦ Si existen más de 7 posibilidades para elegir en un menú, es probable que los usuarios se frustren o bloqueen. Esto puede conducir a la parálisis de decisión.
    ◦ Si no es posible eliminar opciones, se debe recurrir a la agrupación, ya que importa el número de opciones, no el número de niveles.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Fitts, P. M. (1954). The information capacity of the human motor system in controlling amplitude of movement. Journal of Experimental Psychology, 47, 381–391.
Hick, W. E. (1952). On the rate of gain of information. Quarterly Journal of Experimental Psychology, 4, 11–36.
Hyman, R. (1953). Stimulus information as a determinant of reaction time. Journal of Experimental Psychology, 45, 188–196.
Keele, S. W. (1973). Attention and Human Performance. Pacific Palisades, CA: Goodyear Publishing Company, Inc..
Kantowitz, B. H., & Sorkin, R. D. (1983). Human factors: Understanding People-System Relationships. New York: Wiley.
MacKenzie, I. S. (1992). Fitts’ law as a research and design tool in human-computer interaction. Human-Computer Interaction, 7, 91–139.
MacKenzie, I. S. (2013). Human-Computer Interaction: An Empirical Research Perspective. Elsevier Inc..
Miller, G. A. (1956). The magical number seven plus or minus two: Some limits on our capacity for processing information. Psychological Review, 63, 81–97.
Norman, D. A. (1988). The Psychology of Everyday Things. Basic Books.
Shneiderman, B., & Plaisant, C. (2004). Designing the User Interface: Strategies for Effective Human Computer Interaction (4th ed.). Pearson Education, Inc..
Williams, R. (2008). 100 Things Every Designer Needs to Know About People. Peachpit Press.
Fuente sin autor/fecha: Excerpts from "01 UX Design hazlo fácil pensando en el usuario.pdf".
Fuente sin autor/fecha: Excerpts from "11 Universal Principles of Design, Revised and Updated.pdf".
Fuente sin autor/fecha: Excerpts from "Todas las notas, 1/10/2025".
