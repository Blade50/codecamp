Para crear el proyecto tendra que iniciar sesion en PostgreSQL con psql para crear la base de
datos los parametros de conexion son>

```
    psql --username freecodecamp --dbname postgres
```

## Copia de seguridad de la base de datos

Desde una terminal bash ejecutar

```
pg_dump --cC --inserts -U <usuario> <dbname> > fichero.sql

```

## Restaura copia de seguridad

Desde una terminal

```
psql -U postgres < fichero.sql
```

## Tareas a realizar

- Cree una base de datos llamada universe
- Se tendra que conectar usando shortcut
- La base de datos tendra las siguientes tablas
  - galaxy
  - star
  - planet
  - moon
- Todas las tablas tendran una clave primaria
- La clave primaria sera incrementable automaticamente (SERIAL)
- Cada tabla tandra una columna de nombre
- Se usara el tipo de datos INT en al menos dos columnas que no sean claves primarias o foraneas
- Se usara el tipo NUMERIC al menos una vez
- Se usara el tipo TEXT al menos una vez
- Se usara el tipo BOOLEAN al menos en dos columnas
- Cada star debe tener una clave foranea que referencie a una fila en galaxy
- Cada planet debe tener una clave forenea que referecie a una fila en star
- Cada moon debe tener una clave foranea que referencie a una fila en planet
- La base de datos tiene que tener al menos 5 tablas
- Cada tabla tiene que tener al menos tres filas
- Las tablas galaxy y star tienen que tener seis filas
- La tabla planeta tiene que tener al menos 12 filas
- La tabla moon tiene que tener al menos 20 filas
- Cada tabla tiene que tener al menos tres columnas
- Las tablas galaxy, star, planet y moon deben tener al menos 5 columnas
- Al menos dos columnas por tabla no deben aceptar valores NULL
- Una de las columnas por tabla debe ser UNIQUE
- Todas las columnas llamadas nombre seran de tipo VARCHAR
- Las claves primarias deben serguir la convencion de nomenclatura table_name_id
- Las claves foraneas tendran el mismo nombre que las columnas que hace referencia
