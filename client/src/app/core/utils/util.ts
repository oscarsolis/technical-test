/**
 * Valida si un valor X esta definido
 * @param val valor a validar
 */
export function isDefined(val: any): boolean {
  return typeof val != 'undefined';
}

/**
 *
 * @param val
 */
export function isNull(val: any): boolean {
  return val === null;
}
