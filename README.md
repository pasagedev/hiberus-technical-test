# Prueba técnica Hiberus


## Arrancar la aplicación

En el directorio del proyecto ejecutar:

* Instalar paquetes necesarios con
### `npm install`

Arrancar la aplicación con:
### `npm start`

## Decisiones tomadas durante el desarrollo de la prueba


### Estratégia de trabajo

Para resolver la prueba me propuse ir desde lo más general a lo más específico, de esta forma seguí los siguientes pasos:

1. Identificar las páginas principales y su responsabilidad
2. Identificar condiciones que deberían cumplir para mostrarse
3. Identificar si existe un estado global
3. Crear cada página con su funcionamiento mínimo especificado
4. Crear el enrutado
5. Refactorizar sobre cada componente página, para separarlo en componentes más pequeños con responsabilidades más concretas
6. Iterar para agregar funcionalidades extras y/o opcionales

#### Framework utilizado

Para esta prueba decidí utilizar *ReactJs* ya que es un framework que conozco, me siento cómodo trabajando con él y cumple con las necesidades a resolver de los pasos anteriores.


### Arquitectura de carpetas

Para organizar las carpetas de forma que el proyecto sea escalable, decidí separar los elementos identificados: "Paginas", "Componentes", "Context" (estado global) y "Services".

```.
├── src
│ ├── components
│ │ └── /componentes a usar por páginas
│ ├── context/
│ │ └── /estado global
│ ├── services/
│ │ └── /servicios para obtención de datos
│ └── pages/
│ └── /páginas para mostrar según el routing
└── app.js (componente principal)
```

### Estado global
Para poder gestionar la visualización de una u otra página en función de si el usuario está logueado, decidí manejarlo en un estado global, de manera que cualquier componente que necesite consultar o actualizar dicho estado, pudiera hacerlo fácilmente y no tener que depender de props. Utilizar un esta forma permite concentrar en un único punto la forma de consumir y actualizar el estado y optimizar la mantención de código.
<br/>

Para la gestión de estado, decidí usar *Context* en contraposición a otro que conozco como *Redux* por dos razones principales:

* Es fácilmente configurable y de utilizar (a diferencia de Redux)
* Viene incorporado en las dependencias de React

___

### Estilos
Para poder maquetar de manera rápidamente y enfocarme en lo solicitado en la prueba, decidí utilizar *Bootsrap* a través de su paquete para React, el cual me permitió reemplazar `JSX por componentes del paquete `react-bootstrap`

## Tiempo dedicado

Completar la prueba me requirió entre 6 a 8 horas.

## Problemas/Dificultades encontrados

* La gestión de mensajes al usuario está condicionado por el estado de "mensaje" del componente que necesite mostrar el mensaje. Un problema que tuve, fue que si mostraba un mensaje y seguidamente, quería mostrar el mismo, no se actualizaba la vista.

	- Para resolverlo intenté creando un nuevo Objeto para usarlo en el useState y forzar el re-renderizado del componente, pero aún así no funcionaba. Aprovechando que el componente encargado de mostrar el mensaje de alerta funciona con un setTimeout, resolví que lo más sencillo era que luego mostrar cada mensaje, setear el estado mensaje a su estado original (false), de manera que al siguiente mensaje, setearía un nuevo estado y generaría el renderizado buscado.
* A pesar de tener un estado global, si se recargaba la página, se perdía token del usuario guardado (el cual permite identificar que está logueado)
    -    Para resolver esto, además de guardar el token en un estado del Context, lo guardo también en una key del localstorage. Cuando el usuario cierra sesión, además de borrar cambiar el estado, se elimina la key del localstorage.