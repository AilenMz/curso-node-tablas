# Información

Éste es mi primer programa en Node
Práctica de bases de Node utilizando yargs y colors

A partir de comandos por consola, la aplicación creará archivos .txt en la carpeta "Salida" con la tabla de multiplicar con base x

### Primer paso

```
npm i
```

### Opciones de consola:


```
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     es la base de la tabla                     [número] [requerido]
  -l, --listar   Es la opción para mostrar o no en consola la tabla
                                                     [booleano] [defecto: false]
  -h, --hasta    es el límite de múltiplicaciones         [número] [defecto: 10] 
```

### Ejemplos

[] node app -b 10 (node app --base 10 )

```
tabla-10.txt  creada
```

En la carpeta "Salida", verá el archivo creado con la tabla del 10 con limite 10 (valor por default)

[] node app -b 8 -l (node app --base 8 --listar)

```
==================
Tabla del 8
==================
8 x 1 = 8
8 x 2 = 16
8 x 3 = 24
8 x 4 = 32
8 x 5 = 40
8 x 6 = 48
8 x 7 = 56
8 x 8 = 64
8 x 9 = 72
8 x 10 = 80

tabla-8.txt  creada
```

En la carpeta "Salida", verá el archivo creado con la tabla del 8 con limite 10 (valor por default) y por consola se imprimirá tambien la tabla

[] node app -b 5 -l -h 20 (node app --base 8 --listar --hasta 20)

```
==================
Tabla del 5
==================
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
5 x 11 = 55
5 x 12 = 60
5 x 13 = 65
5 x 14 = 70
5 x 15 = 75
5 x 16 = 80
5 x 17 = 85
5 x 18 = 90
5 x 19 = 95
5 x 20 = 100

tabla-5.txt  creada
```

En la carpeta "Salida", verá el archivo creado con la tabla del 5 con limite en 20 y por consola se imprimirá tambien la tabla