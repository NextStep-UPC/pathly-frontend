#!/bin/bash

# Verificar si json-server está instalado
if ! command -v json-server &> /dev/null
then
    echo "json-server no está instalado. Instálalo con 'npm install -g json-server'."
    exit 1
fi

# Iniciar el servidor JSON
echo "Iniciando JSON Server..."
json-server --watch ./db.json --port 3001