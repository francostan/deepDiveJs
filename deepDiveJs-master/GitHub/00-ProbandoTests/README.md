<<<<<<< HEAD
![Plataforma 5](./img/plataforma5.png)

### Code Ramp - Plataforma 5

# Java Script Deep Dive

En este modulo vamos a ver lo fundamentos sobre los que se basa JavaScript, con ellos vamos a ganar un mejor entendimiento del funcionamiento de las herramientas que el lenguaje nos provee.

Pero no solo vamos a trabajar con teoría, le vamos a agregar ejercicios para que ustedes hagan y puedan testear.

Los ejercicios van a estar planteados no como enunciados ordinarios, si no que van a obtener los objetivos de los ejercicios a partir de `tests`.

## Setup

Primero que nada van a tener que hacer un `fork` de este repositorio subido a GitHub, un fork es una copia del repo entero pero bajo nuestro propio usuario, de esta manera podemos modificarlo a gusto sin repercutir en el original.

Hagan click en el boton de `fork` arriba a la derecha.

![Fork button](./img/fork.png)

Una vez terminado vamos a estar en un nuevo repo de nuestra pertenencia, vamos a `clonar` dicho repositorio a nuestra computadora con lo que aprendimos en el modulo de [_git_](http://bootcamp.plataforma5.la/modules/0996821f-58f2-4d46-9fb1-c00401ce2371/contents/a49b5bce-7b21-48a9-9191-01c9a98d0969).
Cuando lo tengamos en un repositorio local, vamos a trabajar directamente en su editor de texto. Vayan avanzando en cada modulo del JSDeepDive de manera ordenada leyendo primero la teoría y luego avanzando a los Spec.

* [Usando Test](./00-ProbandoTests/)
* [Tipos de Datos y Objetos (Repaso)](./01-Objetos/)
* [JavaScript Teorico](./02-JsTeorico/)
* [Intro a Functions](./03-Funciones1/)
* [Advanced Functions and Closures](./04-Funciones2)
* [Constructores](./05-Constructores)
* [Prototypal Inheritance](./06-Prototype)
* [Functional Programing](./07-ParadigmaFunctional)
* [Recursion](./08-Recursion)
=======
## Testing

### ¿Que es un  test?

Un test es un programa que valida que algún otro programa o script realice las acciones que debería hacer.

Constantemente estamos probando si nuestro código funciona como debería de manera manual, la idea de un test es que se realicen automáticamente y a partir de ellos poder modificar o agrandar nuestra trabajo sin arruinar las funcionalidades que ya estaban implementadas.

> Siempre que hagamos un test vamos a buscar la operación mas pequeña o básica de cada función y asegurarnos que la cumpla.

Un test manual podría ser del estilo:

```javascript
// Dada la siguiente función
function suma(a, b) {
  return a + b;
}

// TEST:
// Ejecutando suma con `1` y `2` como argumento
var result = suma(1, 2);

// el resultado debería ser 3
console.log(result === 3)
```

Pero lógicamente no vamos a tener que hacer todo el trabajo nosotros, porque se imaginan que cuando las cosas se compliquen los test no van a ser tan fáciles.

Vamos a usar un framework de testing que nos va a facilitar la estructuración de los test y agrega una visualización mas amigable de los resultados.

### Software

Para correr los test a lo largo del prep vamos a necesitar instalar un par de programas que nos van a acompañar a lo largo del Bootcamp.

#### NodeJS

Node es un motor de JavaScript que nos va a permitir correrlo fuera del browser, por ahora no se preocupen mucho por que hace, lo vamos a ver mas adelante.

Para instalar Node vamos a ir a su [pagina](https://nodejs.org/en/) y seguir las instrucciones según el sistema operativo que estés usando.

#### Npm

Npm es un servicio de paquetes que nos va a permitir usar código de otras personas, al igual que Node no vamos a entrar más en detalle todavía.

Este servicio viene incluido en NodeJS.

#### Testem

Testem es una pequeña librería de testeo que nos va a permitir validar fácilmente y de manera dinámica si un programa hace lo que esperamos.

para instalarlo vamos a entrar en la consola correr el comando:

```bash
$ sudo npm install testem -g
```

Recuerden que el signo `$` es solo el prompt de su consola, el comando empieza en el sudo.

### Archivos

Si entran al repositorio que clonaron 
Como pueden ver los ejercicios se distribuyen en 3 archivos.

* Los archivos `.js` que tengan la palabra Spec, en este caso `testSpec.js` es donde van a estar los test propiamente dichos.
* El otro archivo `.js`, en este caso `test.js` es donde las funciones a testear van a estar, ahí es donde van a escribir su codigo generalmente.
* Los archivos `testem.json` son archivos de configuración para el test, dejemoslos así como están.

### Estructura

Para poder sacar información de los test vamos a tener que entender como están estructurados.

Los tests están encerrados dentro de unos bloques  (_funciones_) de nombre __*describe*__, que sirven para dar contexto a lo que se testeara ahí dentro. Sirven principalmente para agrupar tests que trabajen sobre el mismo tema.

El test propiamente dicho lo declaramos en la función __*it*__, especificando que se va a testear en cada oportunidad. Cada uno de los __*it*__ va a representar una acción que hay que validar, y puede o no tener un setup previo.

La operación a comprobar, que da la naturaleza de test, esta en los __*expect*__. Esta expresión cuenta con 2 partes, veamoslas con un ejemplo: 

Una primera donde planteamos la situación a evaluar

```javascript
expect(funcionAEjecutar())
```

Y una segunda donde chequeamos el comportamiento.

```javascript
expect(funcionAEjecutar()).toEqual('Resultado de la función')
```

Trabajar con tests no es fácil y sobre todo tener que interpretar los ajenos, así que no se preocupen si se trabajan. Estén atentos a los comentarios de los `Spec` que los van a ir guiando en que se espera de cada función.

### Corriendo Tests

Cada vez que hayamos terminado con nuestras funciones, o cuando quieran empezar a probar los test, párense en la consola, justo en la carpeta que quieran probar y corran el comando `$ testem`.

![command.png](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/command.png)

Luego de un momento vamos a ver que `Waiting for runners...` aparece en nuestra pantalla, eso significa que ya tenemos el servicio de testem corriendo.

![testem.png](https://pledu-plataforma5.s3.amazonaws.com/3a0e391b-2b89-4ae9-9bca-4544cb391a94/testem.png)

Ahora solo hace falta entrar a `localhost:7357` (*leet anyone?*) en el browser y ver el resultado de los test.

Una vez que todas sus funciones estén bien testeadas vamos a ver todos los puntos en verde y podemos seguir adelante con los ejercicios.

### A trabajar

Ahora que tenemos una idea basica vamos al repositorio que clonaron con los ejercicios y empiecen a trabajar desde el archivo `testSpec.js` en la carpeta `00-ProbandoTests`.

###### No se olviden de leer los comentarios!
>>>>>>> b47c56a (primer test)
