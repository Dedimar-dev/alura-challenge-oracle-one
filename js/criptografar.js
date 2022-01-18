
const criptografar = (texto) => {
  const arrayLetras = texto.split('');
  
  let novoArrayLetras = arrayLetras.map(letra => {
    if (letra === 'e') {
      letra = 'enter'
    }

    if (letra === 'i') {
      letra = 'imes'
    }

    if (letra === 'a') {
      letra = 'ai'
    }

    if (letra === 'o') {
      letra = 'ober'
    }

    if (letra === 'u') {
      letra = 'ufat'
    }
    return letra
  })

  let novoTexto = novoArrayLetras.join('');

  return novoTexto;
}