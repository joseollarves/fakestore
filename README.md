# Fake Store - Prueba Tecnica Vue

## Instrucciones de instalacion

1. Tener Node.js y pnpm instalado.

2. Descargar el proyecto, dentro de la carpeta usar el comando pnpm install.

3. Una vez instaladas las dependencias ejecutar el comando pnpm dev, al hacerlo en la terminal se mostrara una url local en la cual podra acceder al proyecto desde el navegador.

## Decisiones tecnicas relevantes

Ademas de utilizar Vue, las apis de Fakestore y pyDolar, Axios y Tailwind use a su vez otras tecnologias relacionadas a las mismas.

En el caso de Vue utilice la libreria conocida como Pinia para el manejo de estados, ademas de usar un plugin conocido como pinia-plugin-persistedstate, para poder almacenar
estados en localStorage, concretamente lo utilice para guardar la informacion de las apis y que esta persista de forma local sin necesidad de llamar a las apis cada vez que se
recarga el proyecto o se realiza un cambio.

Para Tailwind utilice un plugin llamado DaisyUI para simplificar el proceso de diseñar la interfaz de la tienda, sin perder los beneficios de utilizar Tailwind.

El proyecto contiene varias subcarpetas dentro de la carpeta src, la carpeta components contiene los componentes de la tienda, la mayoria de ellos interactuan entre si
gracias a los estados de Pinia. 

La carpeta services donde defino cada una de las apis (con Axios) en diferentes archivos, en el caso de requerir usarlas se importan esos servicios y se puede llamar a la api y 
agregar los parametros necesarios a la url.

La carpeta stores donde se definen los estados de Pinia, en algunos de ellos se llaman a los servicios definidos anteriormente y se guarda la informacion en localStorage.

Dentro de la carpeta src queda es el archivo styles.css donde importo a Tailwind como parte de su configuracion y declaro el plugin de DaisyUi, en ambos casos para que
los estilos funcionen de forma global en el proyecto.

Tambien esta el archivo App.vue donde importo todos los componentes y estados del proyecto y ya en el arhivo main.ts importo App.vue y a su vez importo a Pinia y al plugin de 
localStorage como parte de su configuracion.
