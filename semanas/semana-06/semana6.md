Interfaces Naturales (NUI)
El concepto de Interfaces Naturales (NUI) está intrínsecamente ligado a la visión de la Computación Ubicua (UbiCom) y la migración de la interacción explícita a la interacción implícita.
Contexto y Objetivos (Interacción Implícita - iHCI)
1. Fundamento UbiCom: La Interacción Persona-Ordenador Implícita (iHCI) es uno de los pilares que distingue a los sistemas UbiCom.
2. Meta de Visibilidad: El objetivo de UbiCom es que la tecnología sea altamente accesible y utilizable, y que parezca invisible para el usuario. El NUI busca que los artefactos digitales imiten la interacción física y la interacción natural humana.
3. Razón de la Implicitud: La iHCI surge porque la gran cantidad de interacción explícita (basada en sintaxis de bajo nivel) puede distraer, interrumpir y abrumar a los usuarios. La iHCI es una acción realizada por el usuario que no está primariamente dirigida a interactuar con un sistema, pero que este interpreta como input.
4. Mecanismo: La iHCI se basa en la suposición de que el sistema tiene una cierta comprensión del comportamiento del usuario en una situación dada, adaptándose porque es consciente del contexto del usuario.
5. Modalidades: La interacción natural puede involucrar gestos, tacto, control por voz, control por la mirada (eye gaze control), entre otros.
6. Desafío del Contexto: A pesar de que la UbiCom busca hacer las actividades más naturales, inherentemente las convierte en más artificiales. El desafío es que los gestos y acciones naturales pueden ser ambiguos (ej., un aplauso puede ser una emoción o un comando) si el contexto no está definido y compartido.
Gestos y Háptica
Gestos (Gestures)
1. Definición: Los gestos son movimientos corporales significativos que involucran el movimiento físico de dedos, manos, brazos, cabeza, cara o cuerpo con la intención de transmitir información.
2. Clasificación y Detección:
    ◦ Existen gestos de mano/brazo, cabeza/cara y movimiento corporal completo.
    ◦ Pueden ser contactuales (como la entrada táctil en pantalla o un apretón de manos) o sin contacto (contactless) (como saludar o a una cámara).
    ◦ Se detectan usando dispositivos vestibles (guantes), sensores adheridos (acelerómetros, giroscopios) o mediante cámaras y visión por computadora.
3. Uso en Dispositivos:
    ◦ En dispositivos móviles, la inclinación (tilt) puede usarse para desplazarse hacia arriba o abajo en una lista, y el volteo (flipping) para rotar una vista 90 grados.
    ◦ Los gestos de rotar, inclinar y estirar pueden usarse para controlar una pantalla.
    ◦ Los gestos físicos entre humanos (ej., un apretón de manos en un contexto específico) pueden desencadenar automáticamente acciones en un sistema virtual, como una autenticación o una orden de compra digitalmente firmada.
4. Desafíos: Los gestos son ambiguos, incompletamente especificados, varían entre individuos y culturas, y pueden tener mapeos de muchos a uno con los conceptos. El input gestual es una modalidad relativamente lenta en comparación con la entrada directa de texto o la manipulación directa para acciones repetitivas. Además, la selección por gestos puede requerir buenas habilidades motoras y carecer de precisión.
Háptica (Haptics) y Retroalimentación Táctil
1. Definición: La háptica es la modalidad sensorial humana del tacto. La retroalimentación táctil se refiere a la información proporcionada a través del sistema somatosensorial cuando una parte del cuerpo está en contacto con un objeto físico, incluyendo información sobre temperatura, forma, textura o posición.
2. Retroalimentación Activa: La retroalimentación táctil activa (ej. un pin accionado por solenoide en un ratón) puede informar y guiar la interacción, reduciendo potencialmente la demanda en el canal visual.
3. Uso Común: El uso más común de la retroalimentación táctil en teléfonos móviles es la vibración, que señala llamadas o mensajes entrantes. Los dispositivos inteligentes modernos incluyen actuadores vibrotáctiles para mejorar la experiencia.
4. Interfaces Tangibles (TUI): Los objetos físicos utilizados en interfaces tangibles ofrecen affordances más fuertes que los virtuales, permitiendo a las personas usar habilidades hápticas adicionales para manipularlos, más allá de señalar y hacer clic (ej. rotar, agarrar).
5. Tecnología Avanzada: Los dispositivos de puntero con retroalimentación háptica (como la resistencia sentida al cruzar una frontera de ventana) son una dirección de investigación, aunque los dispositivos que usan solo vibraciones simples se han vuelto principales en los controladores de juegos.
Voz y Asistentes
Interfaz de Voz (Auditory Interfaces y Speech)
1. Beneficios: Los interfaces de voz soportan entrada y salida con manos libres. Son valiosos cuando los sentidos visuales están ocupados conscientemente, como al conducir un automóvil. También son importantes para los usuarios con discapacidades visuales.
2. Tecnología y Reconocimiento:
    ◦ El sistema interpreta palabras habladas como si fueran tipeadas en un teclado.
    ◦ El reconocimiento de voz de palabra discreta (discrete-word recognition) funciona bien para aplicaciones de propósito especial.
    ◦ Los sistemas de Voz Interactiva (IVR) pueden ofrecer barge-in (interrumpir la instrucción para hablar) para usuarios recurrentes.
3. Desafíos Cognitivos:
    ◦ El mayor obstáculo para la aceptación de las interfaces de voz es la carga cognitiva que imponen. La voz es más exigente para la memoria de trabajo del usuario que la coordinación ojo-mano.
    ◦ Hablar comandos o escuchar interrumpe la planificación y la resolución de problemas más que seleccionar acciones con un ratón.
4. Obstáculos de la Salida de Voz: La salida de voz tiene tres obstáculos principales: el ritmo lento en comparación con las pantallas visuales, la naturaleza efímera del habla y la dificultad para escanear/buscar.
5. Voz No Verbal (NVVI): Es posible el input mediante sonidos vocalizados no verbales. Esta modalidad mide parámetros acústicos (tono, volumen) para especificar parámetros análogos, como el "joystick vocal" para controlar un cursor.
Lenguaje Natural (NLI) y Asistentes
1. Interacción de Lenguaje Natural (NLI): Permite a los usuarios conversar con la máquina utilizando su lenguaje familiar. Esto evita que los usuarios tengan que aprender una sintaxis de comandos específica.
2. Limitaciones de Habitabilidad: El problema clave del NLI es la habitabilidad de la interfaz (es decir, saber qué objetos y acciones son apropiados). Las interfaces visuales proporcionan estas pistas semánticas, pero el NLI generalmente depende de un modelo mental asumido del usuario.
3. Asistentes y Capitalismo de Vigilancia: Los dispositivos de hogar inteligente (como Amazon Echo o Google Home) convierten la charla casual en "excedente conductual" (behavioral surplus) para generar predicciones.
    ◦ La conversación es una fuente de materia prima para el mercado, y la facilidad sin fricciones de una expresión para desencadenar una acción (ej., una compra) es altamente valorada.
    ◦ Google Assistant, por ejemplo, está integrado en todos los dispositivos y servicios de la compañía, buscando entender el contexto del usuario (ej., geolocalización) para responder preguntas.
Multitáctil, Pantallas Táctiles, Smartphones, Efecto Parallax
Smartphones y Pantallas Táctiles
1. Cambio de Paradigma Móvil: El lanzamiento del iPhone en 2007 y dispositivos posteriores (tabletas) generó un cambio dramático en la HCI, pasando de estiletes y teclados a acciones con los dedos como deslizar (swiping), pellizcar (pinching) y tocar (tapping).
2. Postura Transitoria: Las aplicaciones móviles (en handhelds y smartphones) tienen una postura transitoria (transient posture), lo que significa que aparecen rápidamente para una función única y luego desaparecen, ya que el uso es intermitente y breve.
3. Diseño del Factor de Forma:
    ◦ Los smartphones deben ser pequeños, ligeros, robustos y fáciles de manipular en situaciones de distracción.
    ◦ Debido al factor de forma, la densidad de información y control en pantallas móviles es similar a la de los cuadros de diálogo (dialogs) en el escritorio, requiriendo controles grandes (tamaño de dedo).
    ◦ Las aplicaciones móviles están generalmente optimizadas para la exploración (browsing) debido a las limitaciones en la entrada de datos.
4. Tecnología Táctil: Las pantallas táctiles son duraderas, fáciles de aprender y no requieren partes móviles, por lo que son populares en quioscos y puntos de venta. Los diseños de alta precisión utilizan una estrategia de "levantamiento" (lift-off strategy) donde el usuario toca, ajusta la posición del cursor, y selecciona al levantar el dedo.
Multitáctil y Affordances
1. Multitáctil: Las pantallas multitáctiles permiten que múltiples dedos o usuarios interactúen simultáneamente. Los gestos multitáctiles (pellizcar, deslizar) son el corazón de la experiencia móvil, y se recomienda un vocabulario de gestos pequeño para que sean fáciles de aprender.
2. Ausencia de Hover: Una limitación de las pantallas táctiles es que no soportan el estado de hover (pasar el dedo sin tocar). Esto elimina características útiles como las tool tips y los cambios de forma/color de los botones para indicar que son pulsables.
3. Diseño Plano (Flat Design): La tendencia actual hacia el diseño plano o minimalista puede reducir las affordances virtuales al eliminar las sombras y los contornos que tradicionalmente sugerían que un elemento es pulsable. Esto amenaza la facilidad de uso en favor de la simplificación visual.
Efecto Parallax y Animación
1. Movimiento y Animación: El movimiento y las transiciones animadas son fundamentales para las interfaces móviles, ayudando a los usuarios a crear un fuerte modelo mental de cómo se relacionan las vistas (por ejemplo, al pasar de un listado a un elemento individual).
2. Uso Judicioso: El movimiento debe usarse con moderación y de manera juiciosa. Una sobreabundancia de animación puede ser confusa, irritante e incluso causar malestar en algunas personas.
3. Efecto Parallax: Este efecto, donde diferentes elementos responden al desplazamiento (scrolling) a distintas velocidades, es un patrón común. Se informó que la versión iOS 7 de Apple causó este malestar debido a sus "animaciones de parallax y zoom-in/zoom-out un tanto excesivas".

--------------------------------------------------------------------------------
Referencias Bibliográficas
Abowd, G. D. & Mynatt, E. D. (2000). Charting past, present, and future research in ubiquitous computing. ACM Transactions on Computer Human Interaction (TOCHI), 7(1), 29–58.
Balakrishnan, R. & Patel, P. (1998). The PadMouse: Facilitating selection and spatial positioning for the non-dominant hand. Proceedings of the ACM SIGCHI Conference on Human Factors in Computing Systems—CHI ‘98. New York: ACM. 9–16.
Christian, K., Kules, B., Shneiderman, B., & Youssef, A. (2000). A comparison of voice controlled and mouse controlled web browsing. Proc. 4th International ACM Conference on Assistive Technologies (ASSETS). ACM Press, New York. 72–79.
Díaz, S. (s.f.). UX Design: Hazlo fácil pensando en el usuario.
Goldberg, D. & Richardson, C. (1993). Unistrokes: A stroke alphabet for pen-based input. Proceedings of the ACM SIGCHI Conference on Human Factors in Computing Systems—CHI ‘93. New York: ACM. 17–24.
Igarashi, T. & Hughes, J. F. (2001). Voice as sound: Using non-verbal voice input for interactive control. Proceedings of the ACM Symposium on User Interface Software and Technology—UIST 2001. New York: ACM. 155–156.
Jacob, R. J. K., Girouard, A., Hirshfield, L. M., Horn, M. S., Shaer, O., & Solovey, E. T., et al. (2008). Reality-based interaction: A framework for post-WIMP interfaces. Proceedings of the ACM SIGCHI Conference on Human Factors in Computing—CHI 2000. New York: ACM. 201–210.
Krug, S. (2006). Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability. New Riders.
Lindholm, C., Keinonen, T., & Kiljander, H. (2003). Mobile Usability: How Nokia Changed the Face of the Mobile Phone. New York: McGraw Hill.
MacKenzie, I. S. (2013). Human-Computer Interaction: An Empirical Research Perspective. Elsevier Inc..
Norman, D. A. (1988). The Psychology of Everyday Things. Basic Books.
Norman, D. A. (2005). Emotional Design. New York: Basic Books.
Oviatt, S. (2000). Taming speech recognition errors within a multimodal interface. Communications of the ACM, 43(9), 45-51.
Pickering, J. A. (1986). Touch sensitive screens: the technologies and their applications. International Journal of Man Machine Studies, 25, 249–269.
Poslad, S. (2009). Ubiquitous Computing: Smart Devices, Environments and Interactions. John Wiley & Sons, Ltd..
Shneiderman, B. (1991). High precision touchscreens: Design strategies and comparison with a mouse. International Journal of Man-Machine Studies, 34, 593–613.
Shneiderman, B. & Plaisant, C. (2004). Designing the User Interface: Strategies for Effective Human Computer Interaction (4th ed.). Pearson Education, Inc..
Villar, N., Izadi, S., Rosenfeld, D., Benko, H., Helmes, J., & Westhues, J., et al. (2009). Mouse 2.0: Multi-touch meets the mouse. Proceedings of the ACM Symposium on User Interface Software and Technology—UIST 2009. New York: ACM. 33–42.
Weiser, M. (1991, Septiembre). The computer for the twenty first century. Scientific American, 265(3), 94–104.
Williams, R. (2008). 100 Things Every Designer Needs to Know About People. Peachpit Press.
Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power. PublicAffairs.