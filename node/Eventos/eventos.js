/*
 * Emmitters (emisores)
 * Son los ojetos que emiten eventos nombrados y llaman a las funciones
 * Son instalacias de la clase EventEmitter
*/

/* 
 * Event Handler son las  functiones que manejan los eventos
*/

/* 
 * Para manejar eventos se utiliza el modulo events, el cual sirve para definir, 
 * emitir y escuchar eventos, el modulo events no es globla por lo cual se tendra
 * que importar para su uso, este modulo devolvera la  clase "EventEmitter" 
*/
const EventEmitter = require('events')

// Se crea una instanacia de la clase EventEmitter

const elementoRealizar = new EventEmitter();

/* evento.on(nombre, funcion)
 * Es la funcion que sera llamada cuando el evento sea llamado por una accion
*/
elementoRealizar.on('buscar', () => console.log('Se esta buscado algo'))

/* evento.emit(nombre)
 * Eventos que llamara al evento handler
*/
elementoRealizar.emit('buscar')
