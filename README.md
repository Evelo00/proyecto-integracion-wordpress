# Prueba Tecnica - Integración Wordpress - PHP - MySQL

## Descripción
 Una pagina de wordpress que se conecta a una base de datos externa y muestra los datos de una tabla en una pagina.

## Instalación
1. Clonar el repositorio de ReactJS
2. Instalar dependencias con `npm install`
3. Ejecutar el proyecto con `npm start`


## Inicio a WordPress y MySQL
1. Instalar XAMPP
2. Iniciar los servicios de Apache y MySQL
3. Ingresar a phpMyAdmin
4. Crear una base de datos llamada `PruebaTecnica_db`
    - El usuario es `UserTest_wp`
    - La contraseña es `PasswordTest`
    - El host es `localhost`
5. Importar el archivo `PruebaTecnica_db.sql` que se encuentra en la carpeta `database` del proyecto
6. Ingresar a la carpeta `htdocs` de XAMPP
7. Crear una carpeta llamada `PruebaTecnica`
8. Copiar los archivos de la carpeta `wordpress` del proyecto a la carpeta `PruebaTecnica` que se creo en el paso anterior
9. Ingresar a la carpeta `PruebaTecnica` y abrir el archivo `wp-config.php`
10. Cambiar los valores de las variables `DB_NAME`, `DB_USER` y `DB_PASSWORD` por los valores que se indican en el paso 4

