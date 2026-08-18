## Logica de objetos

- definimos constructor de libro con argumentos: nombre, autor, fecha, genero.
- definimos array de libreria.
- definimos funcion que haga push de libro al crear.

## Logica de DOM

- creamos modal x (usamos dialog)
- enlazamos cada input del modal a un argumento de constructor
- enlazamos boton de submit del modal a funcion push de libro
- renderizamos nueva tarjeta de libro en el DOM

## Tarjeta

- div grid con dos contenedores, uno para el titulo y otro para los otros datos y el boton de eliminar
- el div del titulos debe ser azul oscuro con el texto blanco
- div de datos debe ser celeste claro con texto en negro
- div de datos grid con 1fr para cada dato y 2fr donde va el boton de eliminacion

## Logica de insercion de tarjeta

- creamos elementos en script
- funcion para renderizar la tarjeta en el contenedor
- la funcion debe tomar el array library y renderizar
  cada objeto en una tarjeta distinta
