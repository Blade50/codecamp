#!/bin/bash

# Program that counts down to zero from a given argument
echo -e "\n~~ Titulo del script ~~\n"

# Condicional 
if [[ $1 == arg1 ]]
then
    echo true
else
    echo false
fi

# Ciclo for
for (( i = $1; i > 0; i--))
do
    echo $i
    # pausa mostrar el contador durante 1 segundo
    sleep 1 
done

# Ciclo While
# Variable contador
I=$1
while [[ $I -ge 0 ]]
do
    echo $I
    sleep 1
    # decrementamos la variable contador
    (( I--))
done
