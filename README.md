# CRUD fRONT

El proyecto incluye una interfaz sencilla donde conecta con dos API para consultar frases random en el footer y datos curiosos sobre gatos en una ventana flotante al entrar en la página.

Adicionalmente cuenta con una tabla central en la cúal debe mostrar información de productos, editarlos y eliminarlos, aunque aún en desarrollo.

## Inicialización

1) Descargar e instalar node 20.
2) Descargar el proyecto, inicializarlo con el editor de código de preferencia y ejecutar `npm install` para agregar los módulos de dependencia y seguido `npm start` para compilar el proyecto por defecto en la ruta `http://localhost:3000`.

## Consideraciones

- En el archivo package.json se incluyó `http://localhost:5001` para dar manejo a la restricción de CORS en el mismo dominio. En caso de que el puerto 5001 esté ocupado puede cambiarlo desde esta configuración.

- La url que conecta con el con API Rest se encuentra en la ruta `crud_front\src\components\table\table.component.jsx` , línea 8, desde ahí se puede modificar inicialmente por si debe dirigirse a otro dominio o apuntar a otro puerto.
