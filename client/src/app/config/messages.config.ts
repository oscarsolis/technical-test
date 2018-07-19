/**
 * Constante con todos los mensajes
*/
export const MESSAGES = {

  /* Mensajes de estado para los registros*/
  registerSuccess: model => `${model} Registrado Correctamente`,
  registerError: 'No Se Pudo Completar El Registro',
  registerNotFound: 'Este Registro No Existe',

  /* Mensajes de estado para los la eliminar registros */
  deleteRegisterWarning: '¿Está Seguro Que Desea Eliminar Este Registro?',
  deleteRegisterSuccess: 'Registro Eliminado Correctamente',
  deleteRegisterError: 'No Se Pudo Eliminar El Registro',

  /* Mensajes de estado para la edición de registros */
  editRegisterSuccess: 'Registro Actualizado Correctamente',
  editRegisterError: 'No Se Pudo Actualizar El Registro',

  /* Mensajes para el error de conexión al socket */
  errorConnectSocket: 'Error Al Intentar Conectarse Con El Socket',

  /* Mensajes para el error para la descarga de cualquier cosa */
  downloadError: 'No Fue Posible Realizar La Descarga',

  unknownError: 'Lo Sentimos, Algo Salió Mal',

  emptyCollection: 'No Se Encontraron Registros En El Sistema',

  loadingMessage: 'Cargando Datos Del Servidor...'

}
