# Cajero Web
### PROYECTO EN FASE BETA
Cajero Web, es el nombre de esta aplicación web. Consiste en una emulación de un cajero automático virtual. Dicho en la descripción del repositorio de este proyecto, Cajero Web es el remake del pasado proyecto llamado Cajero Automático realizado en Java y MySQL.

Este proyecto está realizado con las siguientes librerías/framework:
- Angular
- Typescript
- Javascript
- Express

Como base de datos usaremos MongoDB

El proyecto sigue con la siguiente arquitectura:
![Arquitectura](https://user-images.githubusercontent.com/56442732/110158196-5ca37400-7de9-11eb-906f-391e2a838c29.png)

También contiene una guia de como se desarrollará el proyecto:
![Esquema del proyecto](https://user-images.githubusercontent.com/56442732/110158344-88265e80-7de9-11eb-88eb-657c3320e9a7.png)

A su vez, contiene un esquema sobre cómo será la base de datos en MongoDB:
![Base de datos - Cajero Web](https://user-images.githubusercontent.com/56442732/110158537-c91e7300-7de9-11eb-90ed-3c1432fadae8.png)

A continuación se detallarán las siguientes funcionalidades: (PROVISIONAL)
- 1- Registro/ inicio de sesión
- 2- Creación/eliminación de cuentas bancarias (Alertar al usuario de en caso de eliminar la cuenta retirar el dinero)
- 3- Acción de Ingresar/retirar/transferir dinero
- 4- Envío por correo electrónico al usuario del movimiento realizado: Acción (ingreso , retirada o transferencia (en el último caso, especificar a que cuenta realizó el usuario la transferencia), cantidad, fecha (DD/MM/YYY/h/m/s))
- 5- Mostrar dinero Cartera virtual/cuenta corriente
- 6- Ultimos movimientos: Acción (ingreso , retirada o transferencia (en el último caso, especificar a que cuenta realizó el usuario la transferencia), cantidad, fecha (DD/MM/YYYY/h/m/s))
 
# Links:
### Trello: https://trello.com/b/Z1qKVa1E/proyecto-entorno-cliente
### Figma: https://www.figma.com/file/FmNnpavDY00xsBe5SwybsF/Banco-Hispalis?node-id=0%3A1
### Netlify: https://cajeroweb.netlify.app/