## Operadores de comparacion

-eq -> igual
-ne -> no igual
-lt -> menor que
-gt -> mayor que
-le -> menor o igual que
-ge -> mayor o igual que

### Con dobles parentesis

== -> Igual
< -> Menor que  
\> -> Mayor que
\<= -> Menor o igual
\>= -> Mayor o igual

## Operadores de Fichero

Devolvera True

-a fichero -> Si el fichero existe
-e fichero -> Igual que el anterior
-s fichero -> Si el fichero existe y no esta vacio
-f fichero -> Si el fichero existe y es regular
-d fichero -> Si existe y es un directorio
-h fichero -> Si existe y es un enlace simbolico
-L fichero -> Igual que el anterior
-r fichero -> Si el fichero es de lectura para el usuario
-w fichero -> Si el fichero es de escritura para el usuario
-x fichero -> Si el fichero es ejecutable para el usuario

## String

-z <fichero> -> True si la cadena esta vacia
-n <fichero> -> True si la cadena no esta vacia

## Crear variables

Para la crear una variable se identificara con un nombre que no podra empezar por numeros y sin espacios  
en blanco se le asignara un valor.

    <nombre>=<valor>
    numero=2

Para llamar o hacer uso de una variable se usara el nombre dado anteponiendo en simbolo de dolar ($)

    $<nombre>
    $numero

## Leer entradas de usuario

Para leer entradas por teclado se utiliza la expresion "read" en la cual se alamacena el valor ingresado  
por el teclado o entrada exterior

    read <valor>
    echo $valor
