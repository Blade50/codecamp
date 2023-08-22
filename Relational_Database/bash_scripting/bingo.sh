#!/bin/bash
# Bingo Number Generator
echo -e "\n~~Bingo Number Generator~~\n"
# Random genera un numero entre 0 y 32767
# Number tendra un numero aleatorio entre 1 y 75
NUMBER=$(( RANDOM % 75 + 1 ))
TEXT="The next number is, "

# Condicional que comprueba cada uno de los numeros aleatorios
# para mostrar un mensaje segun corresponda
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
elif  [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
else 
  echo $TEXT O:$NUMBER
fi

