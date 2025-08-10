# Fake Store - Prueba Técnica Vue

## Instrucciones de instalación

1. Tener Node.js y pnpm instalados.

2. Descargar el proyecto, dentro de la carpeta usar el comando pnpm install.

3. Una vez instaladas las dependencias, ejecutar el comando pnpm dev. Al hacerlo, en la terminal se mostrará una URL local en la cual podrá acceder al proyecto desde el navegador.

## Decisiones tecnicas relevantes

Además de utilizar Vue, las apis de Fakestore y pyDolar, Axios y Tailwind usé a su vez otras tecnologías relacionadas a las mismas.

En el caso de Vue utilicé la librería conocida como Pinia para el manejo de estados, además de usar un plugin conocido como pinia-plugin-persistedstate, para poder almacenar estados en 
localStorage, concretamente lo utilicé para guardar la información de las apis y que esta persista de forma local sin necesidad de llamar a las apis cada vez que se recarga el proyecto o 
se realiza un cambio.

Para Tailwind utilicé un plugin llamado DaisyUI para simplificar el proceso de diseñar la interfaz de la tienda, sin perder los beneficios de utilizar Tailwind.

El proyecto contiene varias sub carpetas dentro de la carpeta src. La carpeta components contiene los componentes de la tienda, la mayoría de ellos interactúan entre sí gracias a 
los estados de Pinia.

La carpeta services donde defino cada una de las apis (con Axios) en diferentes archivos. En el caso de requerir usarlas, se importan esos servicios y se puede llamar a la api y 
agregar los parámetros necesarios a la URL.

La carpeta stores donde se definen los estados de Pinia, en algunos de ellos se llaman a los servicios definidos anteriormente y se guarda la información en localStorage.

Dentro de la carpeta src queda es el archivo styles.css donde importo a Tailwind como parte de su configuración y declaro el plugin de DaisyUi, en ambos casos para que los estilos 
funcionen de forma global en el proyecto.

También está el archivo App.vue donde importo todos los componentes y estados del proyecto y ya en el archivo main.ts importo App.vue y a su vez importo a Pinia y al plugin de 
localStorage como parte de su configuración.
