# Análisis de código estático

## Definición
El análisis de código estático, también conocido como análisis de código fuente, es una técnica clave para garantizar la seguridad en el desarrollo de software. A través de herramientas automatizadas, se examina el código sin necesidad de ejecutarlo.

Aunque se espera que estas herramientas identifiquen vulnerabilidades de seguridad con precisión, en la práctica suelen actuar como asistentes para los analistas. Ayudan a focalizarse en las secciones críticas del código y a detectar errores de manera más eficiente. Algunas de estas herramientas están integradas en los entornos de desarrollo (IDE), proporcionando retroalimentación en tiempo real a los desarrolladores durante el proceso de desarrollo, lo que es esencial para detectar problemas de seguridad en las etapas iniciales del ciclo de vida del software [1].

El objetivo principal del análisis de código estático es identificar errores que puedan causar el fallo prematuro o comportamientos inesperados en el programa, como:
- Acceder a elementos fuera de los límites de una matriz
- Referenciar punteros nulos o causar pérdidas de memoria (memory leaks)
- Desbordamientos o subdesbordamientos de búfer
- Uso de variables o punteros sin inicializar
- Operaciones aritméticas inválidas
- Bucles infinitos
- Llamadas a funciones que no retornan

Aunque muchas de estas fallas pueden ser descubiertas a través de pruebas de software, el análisis de código estático ofrece un enfoque prometedor para mejorar la confiabilidad y corrección del software. Sin embargo, las pruebas continúan siendo un componente crucial en el desarrollo [2].

## Ventajas y desventajas
Ventajas:
- No requiere la ejecución del código
- Puede aplicarse en etapas tempranas del desarrollo
- Los resultados no dependen de datos de entrada específicos
- Los hallazgos pueden aplicarse a futuras ejecuciones
- Es más económico y rápido

Desventajas:
- Alta tasa de falsos positivos
- Usa aproximaciones que no garantizan precisión total
- No corrige funcionalmente el programa

## Técnicas

- **Análisis de sintaxis:** Verifica que el código cumpla con las reglas del lenguaje de programación, detectando errores como paréntesis o llaves mal colocadas, declaraciones incorrectas de variables o el uso inadecuado de palabras clave.
  
- **Análisis de datos y flujo de control:** Examina cómo se manejan los datos y el flujo de ejecución en el programa, buscando problemas como variables sin inicializar, condiciones redundantes o bucles infinitos.

- **Análisis de seguridad:** Identifica vulnerabilidades en el código frente a problemas como inyecciones SQL, desbordamientos de búfer o la falta de validación de datos.

- **Análisis de dependencias:** Identifica las relaciones entre módulos, clases o componentes del código, promoviendo una mejor modularidad y detectando acoplamientos excesivos.

- **Análisis de calidad del código:** Evalúa la calidad del código a través de métricas como la complejidad ciclomática, la duplicación de código o la profundidad de anidación.

## Experimentación
  - Sonarqube Local.
  - SonarCloud de forma manual.
  - SonarCloud en Github Actions simulando CI/CD.

## Referencias
1. https://owasp.org/www-community/controls/Static_Code_Analysis
2. Static Analysis: A Survey of Techniques and Tools
3. https://docs.sonarcloud.io/