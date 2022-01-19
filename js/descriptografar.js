const descriptografar = (texto) => {
  const arrayPalavras = texto.split(' ');

  let novoTexto = arrayPalavras.map(palavra => {
    palavra =  palavra.replace(/enter/g, 'e');
    palavra = palavra.replace(/imes/g, 'i');
    palavra = palavra.replace(/ai/g, 'a');
    palavra = palavra.replace(/ober/g, 'o');
    palavra = palavra.replace(/ufat/g, 'u');
    return palavra
  })
  return novoTexto.join(' ');
}
