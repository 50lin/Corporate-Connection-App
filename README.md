# Corporate-Connection-App

1. creamos un repositorio en github, en este caso fue nombre "Corporate-Connection-App"
  - Y hacemos un clone y abrimos la carpeta en el visual studio code

2. creamos la carpeta "server" se puede usar el codigo desde consola "mkdir server"    
  - Y entramos a la carpeta server en la consola, con el codigo "cd server"

3. lo primero es instalar las dependendencias nesesarias para la app.
  - comenzamos con "nodemon en modo global" con el codigo "sudo npm i -g nodemon"para refrescar automaticamente el servidor.
  - luego instalamos las demas dependecias que vamos a usar:
    *express para crear el servidor
    *bcrypt para encriptacion de contraseñas
    *cors peticiones entre servidores
    *dotenv para las variables de entorno
    *gridfs-stream para subir archivos
    *multer para subir archivos
    *multer-gridfs-storage subir nuestros archivos de forma local
    *helmet para mejorar la seguridad de las peticiones
    *morgan para el login funciona como middleware
    *jsonwebtoken para la autentificacion de usuarios
    *mongoose para la base de datos MongoDB
  con el siguiente codigo instalamos las dependencias "npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose"

4. ahora escribiremos un comando para crear nuestro "package.json" con nuestras deendencias instaladas: "npm init -y"

5. por ultimo vamos instalar "eslint" que sirve de estandar de escritura de codgio para mantener una escructura correcta en toda la app, usaremos la¡ configuracion mas popular llamada standard:
  - codigo para instalar: "npm install eslint -d" para modo de desarrollo unicamente
  - codigo para el standard en modo global: "sudo npm install standard --global"
  - codigo para configurar e iniciar: "npm init @eslint/config" 
  - luego completar la configuracion es muy intuitiva, elegir cuando pregunte "standard"

6. abrimos nuestro packag.json y agregamos la siguiente propiedad puede ser debado de main...: "type": "module",

7. hasta esta parte ya hemos instalado lo basico nesesario para que funcione nuestro backend y "eslint" nos ayudara a mantener una estructura de codigo limpia.

8. Crear la estructura de carpetas dentro de la carpeta server para organizar nuestra app de forma correcta. 
* Creamos la carpeta "test" donde estaran nuetras pruebas unitarias. 
* Creamos la carpeta "src" que tendra las carpetas y archivos de nuestra app.
  Dentro de esa carpeta creamos:
  - carpeta "controllers" para los controladores y funciones de nuestra app.
  - carpeta "model" para nuestros modelos de la base de datos.
  - "db" para la configuracion de la base de datos.
  - "routes" para las rutas de nuestra app.
  - "middlewares" para nuestras funcionalidades middleware. 
  - "public" donde estaran nuestros assets, entre otros

9. Creamos nuestro archivo ".env" para las variables de entorno, y lo ponemos en la carpeta "server" y en la "raiz"

10. Lo siguiente sera crear nuestro archivo principal index.js en la carpeta server donde estara el codigo principal de nuestra app.
  - Dentro debemos importar todas las dependencias que vamos a usar
  - 

  falta terminar de explicar el backened

  ------

  inicio del frontEnd

npx create-react-app client

instalar dependencias para react => npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material

----------

* react-redux : para manejo de estados
* @reduxjs/toolkit : simplifica y mejora la experiencia de trabajar con Redux
* redux-persist : utilizada para persistir el estado de una aplicación Redux en el almacenamiento local del navegador o en otros sistemas de almacenamiento
* react-dropzone : para controlar la subida de archivos y enviar al backend
* dotenv : para las variables de entorno 
* formik : para getionar los formularios
* yup : para las validaciones
* react-router-dom@6 : para el control de rutas de la app
* @mui/material : es un paquete de componentes de interfaz de usuario (UI) 
* @emotion/react : permite definir estilos CSS directamente en tu código JavaScript
* @emotion/styled : ermite definir componentes React con estilos CSS directamente en tu código JavaScript
* @mui/icons-material : Contiene una colección de iconos de Material Design que puedes usar en tus aplicaciones de React para mejorar la interfaz de usuario y la experiencia del usuario.




- crear carpeta en la carpeta "public" llamda "assets" : para nuestros assets del frontEnd

- borrar algunos arhivos para limpieza y organizacion de react
  *app.css, app.test.js, logo.svg, reportWebVital.js, setupTest.js

- eliminar del index.js lo relacionado con "reportWebVitals();"

- limpiar el App.js eliminando el codigo predeterminado "header", quitamos la importacion del logo y cambiamos el classname "App" por minusculas "app" 

- limpiamos el index.css. quitamos todo el codigo predeterminado 
  * importamos la tipografia que vamos a usar 

- creamos un archivo dentro de client llamado "jsconfig.json" y agregamos el codigo para convertir la ruta a la carpota "src" como nuestra principal para las rutas

- creamos la carpeta "scenes" dentro de "src" donde estaran nuestros componentes y dentro:
  * carpeta "homePage", "loginPage", "profilePage", "navbar", "widgets",  



  