Estados de Carga, Vacíos y Error
El diseño de la interfaz debe gestionar activamente los estados transitorios, incluyendo la latencia y la ausencia de contenido, para asegurar que el usuario mantenga el flujo de interacción.
A. Gestión de la Latencia y el Umbral de Doherty
La latencia o tiempo de espera en una interacción es un factor crítico.
• Umbral Crítico: El Umbral de Doherty establece que el tiempo de espera en una interacción Persona-Ordenador no debe superar los 396 ms. La razón de este valor es que, superado ese lapso, la capacidad de atención del usuario se va perdiendo.
• Impacto en la Productividad: Mantener los tiempos de respuesta por debajo de este umbral hace que la interacción sea fluida, lo que genera un clima óptimo para que aumente la productividad y el usuario no se frustre.
• Aplicación en Carga: El tiempo invertido en la carga de la página (el primer renderizado) o el lapso que transcurre desde que el usuario interactúa con un elemento hasta que se muestra el resultado en pantalla tampoco debería superar este umbral.
• Expectativas Elevadas: Los usuarios se acostumbran a esperar menos tiempo debido al aumento constante de potencia y velocidad (Ley de Moore). Si un sistema no evoluciona para reducir los tiempos, los usuarios dejarán de usar el producto porque no cumplirá sus expectativas de Usabilidad y Experiencia de Usuario.
• Límites de Tiempo de Respuesta:
    ◦ Hasta 0.1 segundos (100 ms), los usuarios perciben la respuesta como instantánea y sienten que manipulan la interfaz directamente.
    ◦ Hasta 1 segundo, los usuarios notan un retraso, pero sus procesos de pensamiento permanecen ininterrumpidos.
    ◦ Hasta 10 segundos, el usuario nota que el sistema es lento y su mente puede divagar, pero puede mantener la atención si se proporciona una barra de progreso. Después de 10 segundos, es probable que se pierda la atención del usuario.
B. Estados Vacíos (Blank States) y Modo
• Diseño para la Iniciativa: En lugar de darle al usuario una pizarra en blanco (blank slate) y desafiarlo, la aplicación debe tomar un primer paso que tenga una probabilidad de ser correcto. Las pizarras en blanco intimidan a la mayoría de las personas.
• Visibilidad del Estado (Modo): La falta de retroalimentación sobre el modo o estado actual del sistema puede provocar errores de modo (mode errors). Por ejemplo, los botones pueden tener foco (focus) y recibir eventos de teclado, y si el foco avanza de manera inconsistente, la atención del usuario debe cambiar, lo que interrumpe la transparencia y el flujo.
• Comunicación de Estado: Cuando un producto está inactivo (asleep), despierto (awake) o ocupado (busy), debe parecerlo. Si está realizando una tarea compleja, debe ser obvio para el usuario que la capacidad de respuesta será menor.
Rendimiento Percibido (Optimistic UI, Placeholders)
El objetivo central del diseño es la transparencia de la interacción, donde la mecánica del software se vuelve invisible para que el usuario se concentre en sus objetivos (mantener el estado de flujo).
• Feedback Continuo: Es fundamental proporcionar retroalimentación continua (continuous feedback) para cada acción del usuario. Para acciones frecuentes y menores, el feedback puede ser modesto; para acciones mayores e infrecuentes, debe ser más sustancial.
• Indicadores de Progreso: Los usuarios responden mejor a indicadores de progreso dinámicos y gráficos que a mensajes estáticos o numéricos (como un contador de segundos). Estos indicadores dan seguridad al usuario de que el proceso está en curso. Las animaciones y las barras de progreso pueden usarse para que el tiempo pase rápido para el usuario.
• Pre-visualización (Placeholders): Los elementos visuales deben utilizarse para transmitir a los usuarios cuál será el resultado de una función, en lugar de depender únicamente de palabras.
    ◦ Esto se extiende a los hints o pistas: texto pequeño, a menudo grisáceo, que proporciona breves direcciones o ejemplos de uso dentro de los campos de entrada.
    ◦ El diseño debe evitar el reporte innecesario de eventos que no le importan al usuario (ej. "conexión realizada," "transacción registrada").
• Diseño Pliant: Los elementos plásticos (pliant), que reaccionan a la entrada y pueden ser manipulados, deben comunicar visualmente cómo pueden ser utilizados, idealmente mediante affordances visuales estáticas o dinámicas.
Mensajería y Recuperación de Errores
El manejo de errores es una de las áreas más críticas de la interfaz, ya que los errores hacen que los usuarios se sientan confundidos, inadecuados y ansiosos.
A. Prevención y Responsabilidad
1. Principio Cero (Prevención): La mejor solución de error es que no haya error. Como principio, se debe diseñar el sistema de modo que los usuarios no puedan cometer errores graves.
    ◦ La prevención se logra al desactivar ( graying out ) las opciones de menú que no son apropiadas o al no permitir la entrada de caracteres inválidos (ej. letras en campos numéricos).
    ◦ Si la aplicación sabe lo que el usuario debe teclear, ¿por qué no lo hace por sí misma y le evita la reprimenda?.
    ◦ Muchos errores son, de hecho, errores inducidos por el diseño (design-induced errors).
2. Responsabilidad y Tono: Los usuarios ven los mensajes de error como si alguien les dijera que son estúpidos.
    ◦ Un error no es culpa de la aplicación, pero es su responsabilidad.
    ◦ La mayoría de los mensajes de error son una admisión de estupidez por parte de la aplicación, reportando su incapacidad para trabajar flexiblemente.
3. Reversibilidad y Perdón: El diseño debe incorporar el principio de perdón (forgiveness).
    ◦ La fácil reversibilidad de las acciones (Undo) alivia la ansiedad y permite la exploración. La reversibilidad es un método preferido para lograr el perdón.
    ◦ El sistema de Deshacer (Undo) debe ser robusto y capaz de revertir múltiples operaciones consecutivas (Múltiple Undo).
B. Mensajería de Último Recurso (Directrices)
Cuando el error es inevitable, la mejora de los mensajes es esencial para aumentar las tasas de éxito en la reparación de errores.
• Evitar Interrupciones (Excise): Los diálogos de boletín (errores, alertas y confirmaciones) detienen el flujo y deben eliminarse o reemplazarse por feedback modeless (sin detener la acción) siempre que sea posible. Preguntar al usuario que confirme sus acciones es un tipo de excise que debe evitarse.
• Especificidad: El mensaje debe ser lo más específico y preciso posible. Los mensajes vagos ("SYNTAX ERROR") frustran al usuario. Si la entrada es inaceptable, los mensajes deben indicar los valores permisibles.
• Tono y Contenido: Debe ser constructivo (indicando qué hacer) y positivo (evitando palabras hostiles como ILLEGAL, ERROR, INVALID). El mensaje debe ser cortés y evitar culpar al usuario.
• Formato Físico: El mensaje debe estar escrito en lenguaje sencillo (plain language) y usar voz activa. Es recomendable el uso de mayúsculas y minúsculas combinadas ( mixed uppercase and lowercase ).
• Evaluación: Es crucial registrar la frecuencia de ocurrencia de cada error para saber dónde los usuarios tienen dificultades y modificar el software, la formación o la documentación.
Métricas Básicas de UX
Para enfocarse en la usabilidad, es indispensable medir el rendimiento del usuario. La usabilidad se define por la eficacia, eficiencia y satisfacción con la que los usuarios pueden lograr metas específicas en un contexto determinado.
Las cinco medidas de usabilidad utilizadas para la evaluación práctica (basadas en los criterios de Shneiderman) son:
1. Tiempo de aprendizaje (Time to learn): Cuánto tiempo tarda un usuario típico en aprender las acciones relevantes para un conjunto de tareas.
2. Velocidad de rendimiento (Speed of performance): Cuánto tiempo se tarda en llevar a cabo las tareas de referencia (benchmark tasks), lo que mide la eficiencia.
3. Tasa de errores por los usuarios (Rate of errors by users): Cuántos y qué tipos de errores cometen las personas.
    ◦ La tasa de error por cada 1,000 acciones debe utilizarse como una métrica de la calidad de la interfaz.
    ◦ La tasa se informa típicamente como la relación entre los ensayos completados incorrectamente y el total de ensayos.
4. Retención a lo largo del tiempo (Retention over time): Qué tan bien mantienen los usuarios su conocimiento (ej. comandos) después de un periodo.
5. Satisfacción subjetiva (Subjective satisfaction): Cuánto le gustó a los usuarios el uso de varios aspectos de la interfaz, lo cual se determina mediante entrevistas o encuestas.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Casey, S. P. (2006). The design of the common sense.
Casey, S. P. (1998). Set phasers on stun: And other true tales of design technology, and human error (2nd ed.).
Díaz, S. (s.f.). UX Design: Hazlo fácil pensando en el usuario. Ediciones de la U / Editorial Ra-ma..
Goodman, D., & Spence, R. (1981). The psychology of computer programming.
Krug, S. (2006). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. New Riders..
Liang, J., Shaw, C., & Green, M. (1991). On temporal latency and rendering quality in 3D user interfaces.
MacKenzie, I. S. (2013). Human-Computer Interaction: An Empirical Research Perspective. Elsevier Inc..
Miller, G. A. (1956). The magical number seven plus or minus two: Some limits on our capacity for processing information. The Psychological Review, 63, 81–97.
Norman, D. A. (1983). Categorization of action slips. Psychological Review, 90(1), 1–15..
Norman, D. A. (1988). The Psychology of Everyday Things. Basic Books..
Shneiderman, B. (1982). System message design: Guidelines and experimental results. Proceedings of the 1982 ACM annual conference. New York: ACM, 583–586.
Shneiderman, B., & Plaisant, C. (2004). Designing the User Interface: Strategies for Effective Human Computer Interaction (4th ed.). Pearson Education, Inc..
Smith, S. L., & Mosier, J. N. (1986). Guidelines for designing user interface software.
Williams, R. (2008). 100 Things Every Designer Needs to Know About People. Peachpit Press..
Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power. PublicAffairs.
Cooper, A., Reimann, R., Cronin, D., & Verplank, B. (2014). About Face: The Essentials of Interaction Design. Wiley..
Hart, S. & Staveland, L. (1988). Development of NASA-TLX.
Hanington, B., & Martin, B. (2012). Universal Principles of Design, Revised and Updated. Rockport Publishers..
Doherty, W. J., & Chakraborty, A. (1982). The myth of the two-second response time.
Jacob, R. J. K. et al. (2008). Reality-based interaction: A framework for post-WIMP interfaces. Proceedings of the ACM SIGCHI Conference on Human Factors in Computing.
Nielsen, J. (1993). Usability Engineering. AP Professional.
Weiser, M. (1991). The computer for the twenty first century. Scientific American, 265(3), 94–104.
