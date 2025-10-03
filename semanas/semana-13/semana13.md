Compendio de Métodos Avanzados de Investigación y Evaluación en UX/HCI
Métodos Mixtos
Los métodos mixtos implican la utilización intencional y balanceada de enfoques cualitativos y cuantitativos para lograr una comprensión integral del comportamiento del usuario.
1. Naturaleza y Complementariedad de los Métodos
1. Investigación Cualitativa (Relevancia): Los métodos cualitativos son la herramienta preferida para caracterizar los comportamientos del usuario y las necesidades latentes. Estos métodos (como las entrevistas etnográficas, la observación y los estudios de campo) alcanzan una alta relevancia ya que estudian fenómenos en un entorno natural, pero sacrifican la precisión. La investigación cualitativa ayuda a entender el dominio, el contexto, las metas que motivan a las personas y el porqué de esos comportamientos.
2. Investigación Cuantitativa (Precisión): Los métodos cuantitativos, como los experimentos controlados, aportan precisión al reducir o eliminar los factores extraños (la diversidad y el caos del mundo real), pero a menudo sacrifican la relevancia.
3. Evaluaciones Mixtas: Un estudio completo con participantes humanos debe incluir ambos tipos de métodos. Es necesario medir y analizar el rendimiento humano (cuantitativo) y, al mismo tiempo, solicitar comentarios, pensamientos y opiniones (observacional/cualitativo) para identificar cualidades de interacción como la fatiga, la frustración o el malestar, que podrían no aparecer en las cifras. Los métodos correlacionales ofrecen un equilibrio entre relevancia y precisión.
4. Uso para Modelos de Usuario: La investigación cualitativa (observación, entrevistas uno a uno) se utiliza para construir modelos de comportamiento (personas). Luego, los datos cuantitativos (como encuestas) pueden usarse para el dimensionamiento de mercado (market sizing) de esos modelos, correlacionando los tipos de usuarios definidos por comportamiento con datos demográficos tradicionales.
2. Limitaciones de la Separación
• Insuficiencia Cuantitativa: Los datos cuantitativos, como la analítica web, proporcionan respuestas al qué o cuánto del comportamiento, pero son ineficaces para definir un producto o determinar la raíz de los problemas.
• Significancia Estadística: La investigación de diseño generalmente se inclina hacia lo cualitativo, utilizando muestras pequeñas (típicamente entre seis y doce personas) para obtener una comprensión profunda (in-depth). Es difícil probar la significancia estadística con muestras pequeñas. Sin embargo, el objetivo principal es obtener detalles ricos y contextuales que disparen el pensamiento empático y la creatividad, más que influir en decisiones de negocio que requieran una representatividad de mercado.
• Diseño Experimental: Los experimentos controlados deben incluir al menos dos variables: una variable manipulada (independiente o factor) y una variable de respuesta (dependiente).
Analítica de UX y Big Data
La analítica de UX y el Big Data se centran en la recolección, el análisis y la predicción del comportamiento del usuario, actuando como un sensor amplio del comportamiento humano.
1. Métricas, Logging y Pruebas
1. Analítica de Uso (Site Usage Analytics): Se refiere al monitoreo continuo de datos clave de uso ( key usage data ) para determinar cómo las personas están utilizando el producto e identificar oportunidades de mejora.
2. Análisis de Flujo de Clics (Clickstream Analysis): Analiza el registro de las pantallas o páginas que los usuarios hacen clic y ven. Requiere que el sitio esté instrumentado apropiadamente o que la aplicación tenga la telemetría de recolección de datos habilitada.
3. Logging en Tiempo de Ejecución: El run-time logging software (software de registro en tiempo de ejecución) captura los patrones de actividad del usuario, generando informes sobre la frecuencia de mensajes de error, la selección de ítems de menú, el uso de campos de formulario o el acceso a páginas web.
4. Análisis de Embudo (Funnel Analyses): Estos reportes muestran cómo los clientes están utilizando el sitio, dónde están abandonando y cómo intentan manipular el producto para lograr sus objetivos.
5. A/B Testing (Experimentación Continua): Es una técnica utilizada para medir cuál de dos (o más) conceptos logra un objetivo de manera más efectiva.
    ◦ En el marco Lean UX, es una herramienta poderosa para determinar la validez de las hipótesis.
    ◦ El método implica liberar la experiencia propuesta a un pequeño subconjunto de usuarios y medir el criterio de éxito en comparación con un grupo de control.
    ◦ Este proceso es parte de la oportunidad de "experimentación continua" que procede de las transacciones ubicuas mediadas por ordenador.
2. Big Data y Predicción Conductual
• Excedente Conductual (Behavioral Surplus): El aparato digital ubicuo (que incluye la computación ambiental e IoT) transforma continuamente la actividad del mundo real (patrones de clic, dwell times, ubicación) en datos listos para generar predicciones. Esta materia prima conductual es convertida por la inteligencia de máquina (AI/ML) en productos algorítmicos altamente rentables diseñados para predecir el comportamiento.
• Valor Reinvertido: Históricamente, en los inicios de Google, los datos de comportamiento eran reinvertidos en el usuario para mejorar el producto (aumentar velocidad, precisión y relevancia), en lo que se llama el ciclo de reaprovechamiento del valor conductual (behavioral value reinvestment cycle).
• Predicción Avanzada: La inteligencia de máquina utiliza clasificadores de aprendizaje automático (machine learning classifiers) para predecir valores de atributos de los usuarios. Los gráficos de asociación (association graphs) pueden revelar relaciones entre usuarios, documentos, búsquedas y páginas web.
• Correlación vs. Causalidad: El Big Data y el A/B testing solo miden correlación, no causalidad. En ausencia de conocimiento causal, incluso las mejores predicciones son solo extrapolaciones del pasado.
Eye-tracking y Biometría
El eye-tracking (seguimiento ocular) es una tecnología que mide los movimientos y la atención del usuario, siendo un método de investigación y, en algunos casos, una modalidad de input.
1. Eye-Tracking (Seguimiento Ocular)
1. Definición y Mecánica: El eye-tracking es una tecnología que permite ver y registrar lo que una persona está mirando, en qué orden y por cuánto tiempo. Se basa en el reconocimiento de imágenes de video de la posición de la pupila para dar una precisión de 1 o 2 grados.
2. Investigación Visual: El seguimiento ocular mide dónde se dirige la mirada central (central gaze o foveal gaze). Los investigadores analizan el scanpath (la secuencia de fijaciones y sacadas) para determinar los patrones de visualización en las páginas web.
    ◦ Fijaciones y Sacadas: La fijación es cuando los ojos están quietos, captando detalles ($\geq 200$ ms); la sacada es el movimiento rápido para reposicionar el ojo ($30-120$ ms).
3. Eye Typing (Control por la Mirada): El ojo puede actuar como un respondedor. El eye-tracking emula a un ratón ( look-select ). En el eye typing (tecleado ocular), el usuario fija o detiene la mirada (dwelling) sobre un objetivo seleccionable (como una tecla de un teclado en pantalla) durante un tiempo predeterminado (ej., 750 ms) para realizar una selección.
4. Desafíos y Limitaciones:
    ◦ Problema del Toque de Midas (Midas touch problem): Ocurre porque cada mirada tiene el potencial de activar un comando no intencionado. Combinar el eye-tracking con la entrada manual es una forma de abordar este problema.
    ◦ Sesgo y Percepción: Los datos de eye-tracking pueden ser engañosos, ya que solo miden dónde miró alguien, no si prestó atención. El seguimiento ocular no rastrea la visión periférica, la cual es crucial para captar la idea general (gist) de lo que se ve.
    ◦ Uso: El eye-tracking sigue siendo principalmente una herramienta de investigación o una ayuda para usuarios con discapacidades motoras.
2. Biometría
• Identificación Biometríca: La identificación biométrica del usuario se considera una tecnología invasiva de la privacidad.
• Riesgos: Su uso requiere una evaluación cuidadosa de los perjuicios, ya que aumenta el riesgo de mal funcionamiento y pérdida de privacidad.
• Sensores Fisiológicos: La detección de afecto y emociones combina la expresión facial, la entonación vocal y otras señales fisiológicas.
Estudios Longitudinales
Los estudios longitudinales son un tipo de evaluación empírica utilizada para medir la adquisición de habilidades y el rendimiento a largo plazo.
1. Metodología y Aprendizaje
1. Objetivo: El estudio longitudinal es una evaluación experimental donde los participantes practican durante un período prolongado mientras se mide su mejora en el rendimiento. El objetivo es observar y medir el aprendizaje y la adquisición de habilidades, en lugar de intentar eliminar el efecto del aprendizaje, como se hace en otros experimentos de corta duración.
2. Variable Principal: La "cantidad de práctica" es la variable independiente del experimento. Cada sesión de práctica se trata como un nivel de esta variable.
3. Ley del Aprendizaje: Las tendencias de rendimiento observadas suelen ajustarse a la ley de potencia del aprendizaje (power law of learning).
4. Viabilidad de Nuevas Técnicas: Estos estudios son cruciales para comparar la viabilidad de una nueva técnica frente a la práctica actual, especialmente cuando se espera que el rendimiento inicial sea bajo porque se requiere la adquisición de una nueva habilidad.
2. El Punto de Cruce (Crossover Point)
• Medición del Éxito: Un objetivo común es observar si el rendimiento de la nueva técnica eventualmente supera el de la práctica actual. El punto donde esto sucede se llama el punto de cruce (crossover point).
• Ejemplos: Se utiliza para comparar métodos de entrada de texto en dispositivos móviles, donde las velocidades iniciales pueden ser similares, pero una técnica muestra una mejora mucho mayor con la práctica debido a la curva de aprendizaje.
3. Relevancia Cognitiva
• Los estudios longitudinales son valiosos porque permiten investigar tareas de alto nivel (que duran minutos a meses). Estas tareas incluyen comportamientos complejos como el aprendizaje, la memoria y la resolución de problemas que no pueden medirse adecuadamente en estudios de laboratorio de corta duración.
• El enfoque en el aprendizaje y el comportamiento a largo plazo fomenta una mayor atención a la observación etnográfica detallada y a los estudios de caso longitudinales.

--------------------------------------------------------------------------------
Referencias Bibliográficas
Ayyavu, N., & Jensen, M. L. (2011). Referencia incompleta.
Buxton, W., Hill, R., & Rowley, P. (1985). Referencia incompleta.
Cozby, P. C. (2000). Methods in Behavioral Research (7th ed.). McGraw-Hill.
Díaz, S. (s.f.). UX Design hazlo fácil pensando en el usuario. Ediciones de la U / Editorial Ra-ma.
Elmes, D. G., Kantowitz, B. H., & Roediger, H. L. (2002). Research Methods in Psychology (7th ed.). Wadsworth Publishing.
Erceg-Hurn, D. M., & Mirosevich, V. M. (2008). Referencia incompleta.
Gilbert, R. M. (2019). Inclusive Design for a Digital World: Designing with Accessibility in Mind. Apress.
MacKenzie, I. S. (2013). Human-Computer Interaction: An Empirical Research Perspective. Elsevier Inc.
Majaranta, P., MacKenzie, I. S., Aula, A., & Räiha, K. J. (2006). Referencia incompleta.
Nielsen, J. (1993). Usability Engineering. AP Professional.
Norman, D. A. (1988). The Psychology of Everyday Things. Basic Books.
Norman, D. A. (2005). Emotional Design. New York: Basic Books.
Poslad, S. (2009). Ubiquitous Computing: Smart Devices, Environments and Interactions. John Wiley & Sons, Ltd.
Ries, E. (2011). The Lean Startup. Crown Business.
Runyon, R. P., Haber, A., Pittenger, D. J., & Coleman, K. A. (1996). Fundamentals of Behavioral Statistics (8th ed.). McGraw-Hill.
Shneiderman, B., & Plaisant, C. (2004). Designing the User Interface: Strategies for Effective Human Computer Interaction (4th ed.). Pearson Education, Inc.
Shoshana, Z. (2019). The Age of Surveillance Capitalism. PublicAffairs.
Wobbrock, J. O., Rubinstein, J., Sawyer, M. W., & Duchowski, A. T. (2008). Referencia incompleta.
Woolery, A. (2014). The User Experience Team of One. Rosenfeld Media.
