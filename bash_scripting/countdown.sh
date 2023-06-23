#!/bin/bash

# Program that counts down to zero from a given argument
# Operador de Comparacion
# -eq -> igual
# -ne -> no igual
# -lt -> menor que
# -gt -> mayor que
# -le -> menor o igual que
# -ge -> mayor o igual que


if [[ $1 == arg1 ]]
then
    echo true
else
    echo false
fi