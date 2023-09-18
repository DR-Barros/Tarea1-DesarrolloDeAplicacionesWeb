# Tarea1-DesarrolloDeAplicacionesWeb
## Tarea 1 del curso de Desarrollo de Aplicaciones Web

Se agrega un menu en la parte superior de la pagina web para que se pueda ir navegando de forma fluida por la pagina web. 
Ademas de este menu, se agregan los links cuando el enunciado de la tarea lo requiere.


## Pagina de inicio:
En la pagina de inicio se pone una imagen que represente los deportes de los panamericanos. Despues de esto se hacen secciones que puedan servir para redireccionar a las secciones de registro y de visualizacion de los artesanos e hinchas.


## Registro de hinchas
Para la seleccion de los deportes de interes se considero que un select option puede llegar a ser dificil de manejar cuando se quieren seleccionar diferentes deportes. Es por esto que se implementa un fieldset con multiples checkbox. para asegurarnos que solo se puedan seleccionar maximo 3 deportes se usa JS que al llegar a 3 deportes inhabilita el resto. Es importante recalcar que esta inhabilitacion es independiente de la posterior validación.
## Registro de artesanos
Al igual que en la seleccion de deportes para hinchas se implementa un fieldset con multiples checkbox para elegir el tipo de artesanias


## Ver hinchas
En ver hinchas para hacer un simil a la llamada a una base de datos de hinchas se hace un JSON con la información de estos y luego mediante JS se extrae la lista de hinchas y se renderiza en la tabla. al pinchar sobre el nombre de uno de estos se va a la informacion detallada de este.

### Información hincha
Se pasa por parametros de link el nombre del hincha que se va a buscar y se muestra la información de este.

## Ver artesanos
Es similar a ver hincha se guarda la info en un JSON de artesanos, este contiene el nombre de la imagen que le corresponde mostrar.

## Información artesano
Similar a información hincha tambien recibe el nombre del artesano a buscar como parametro del link. 