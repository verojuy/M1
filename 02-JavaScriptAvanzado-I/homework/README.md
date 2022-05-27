
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
//  var a=8,  var b=9, var c=10
  var x = 10;
  console.log(x);// 10
  console.log(a);// 8
  var f = function(a, b, c) {
     //a=8, b=9, c=10
    b = a;//b=8
    console.log(b);// 8
    b = c;// b=10
    var x = 5;
  }
  f(a,b,c);
  console.log(b);// 9
}
c(8,9,10);
console.log(b);//10
console.log(x);//1
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor);// Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);// Franco
   }
})();
console.log(instructor);// Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);// the flash
    console.log(pm);// reverse flash
}
console.log(instructor);//the flash
console.log(pm);// franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"      //--> 6 / 3 = 2
"2" * "3"    // 2 * 3
4 + 5 + "px"// suma de derecha a izquierda suma 4+5 =9 despues 9+"px" no suma numero +string , pasa el 9 a string y los concatena = "9px"
"$" + 4 + 5 // suma de izquierda a derecha y no puede sumar string con el 4 pasa el 4 a string y concatena $4 y hace lo mismo con el 5 //=$45
"4" - 2 // tiene mas prioridad el string que el numero pero no hay resta para string y su para numeros por eso lo pasa a numeros  = 2
"4px" - 2 // esta operacion no la puede pasar a numero por eso es NAN no la puede hacer
7 / 0 // tiene a infinito todo numero /0 = infinito
{}[0]
parseInt("09") // si hay una parte que puede convertir en numero lo hacer pero tiene que estars el numero adelante
5 && 2 //2 los dos numeros tiene que ser true y muestra el segundo porque necesita que los dos sean positivos
2 && 5// 5 porque necesita que las dos condiciones sean true evalua las dos 
5 || 0 // si una es true ya no me interesa la segunda porque solo necesita una  por eso es 5
0 || 5// 5 porque 0 es false 
[3]+[3]-[10]// los pasa a string porque no tiene suma de arrays "3" + "3"-->pero no hay suma de string asi que lo concatena 33 -[10] --> hace lo mismo 33 - "10"--> lo pasa a numero porque tiene suma para numeros y no string 33 - 10 =23
3>2>1//3>2 -->true y true>1?-->true =1 entonces 1>1= false
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);//undefine porque esta definida pero el valor esta abajo
   console.log(foo());//2 por hoisting lleva para arriba la funcion y la puede usar

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {                 //retorna undefined porque por hoisting lleva la   variable hacia arriba pero no su valor porque no entra en el if porque es false
    
        var snack = 'Friskies';// si fuera true entraria y me devuelve friskies//
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());// aurelio de rosas

var test = obj.prop.getFullname;

console.log(test());juan perez porque esta invocando al objeto global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```  orde de ejecucion 
1
4
3
2

