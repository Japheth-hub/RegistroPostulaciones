export function validacionPostulacion(objeto){
  const {vacante, empresa, portal} = objeto;
  const error = [];
  if(vacante.length === 0)error.push('Campo vacio (vacante)')
  if(empresa.length === 0)error.push('Campo vacio (empresa)')
  if(portal === 'default')error.push('Campo vacio (portal)')

  return error;
}

export function validacionPortal(string){
  if(string.length === 0){
    return ['Campo vacio (Nombre)']
  } else {
    return [];
  }
}