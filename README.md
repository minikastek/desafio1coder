## Tienda para coleccionistas CTG Black Onyx

La base de una tienda online (con referencias a juegos de cartas) con usos varios. Botones en navbar que filtran la base segun que categoria coincide con el boton 
y muestra en pantalla todos los elementos, el logo tiene la ruta del home. 

El objetivo del proyecto es meramente educativa.

## Navegacion

https://media.giphy.com/media/Km6GfWDrG7z1Qq9sWa/giphy.gif

Recorremos cada boton en el navbar para filtrar lo que estamos buscando en la web usando Params, podemos clickear el logo de la tienda para volver al inicio, cada uno de los botones del navbar filtran por categoria y los muestran
Tambien podremos clickear el footer donde estan las categorias para cumplir la misma funcion junto con informacion extra

## Cart y Checkout

En el cart tendremos todos los items que queremos cargar cuando estemos generando la orden de compra, podremos eliminar o limpiarlo por completo. y en el checkout generaremos la orden con los datos del comprador (buyer) que el usuario llenara en un formulario
validado en formik y yup

## Organizacion del proyecto

El proyecto esta organizado en una carpeta general llamada "src" dentro de ella encontraremos 3 carpetas importantes:  
-Assets, es el lugar donde dejaremos todos los elementos estaticos como imagenes o logos 
-Service, en esta carpeta tendremos las referencias a la base de datos, con sus propias configuraciones y funciones
-Components, donde tendremos todos los componentes de nuestro proyecto, en la carpeta de cada uno de los componentes, en caso de ser necesario tendran su propio archivo .css para sus respectivos estilos


## Como correr el codigo y como ver el funcionamiento 

En el modo desarollador la app corre con npm start (una vez realizado el propio npm install), para verlo en tu navegador [http://localhost:3000](http://localhost:3000) 

## Librerias extras que use 

-npm i react-router-dom 
-npm i react-bootstrap
-npm i formik
-npm i yup 
-npm i firebase
-npm i react-fontawesome

## Logo y marca BlackOnyx registrada
