const seletorDeElementoHTML = (seletor) => {
  const elementoHTML = document.querySelector(seletor);
  return elementoHTML;
}

const btnCriptografar = seletorDeElementoHTML("#criptografar");
const btnDescriptografar = seletorDeElementoHTML("#descriptografar");
const divSemTexto = seletorDeElementoHTML(".div-sem-texto");
const divCopiar = seletorDeElementoHTML(".div-copiar");
const btnCopiar = seletorDeElementoHTML("#btn-copiar");
const inputCriptoDescripto = seletorDeElementoHTML("#input-criptografar-descriptografar");
const inputCopiar = seletorDeElementoHTML("#input-copiar");

btnCriptografar.addEventListener('click', event => {
  event.preventDefault();
  inputCopiar.value = criptografar(inputCriptoDescripto.value);
  mostrarTextoParaCopiar();
  inputCriptoDescripto.value = ''
})

btnDescriptografar.addEventListener('click', event => {
  event.preventDefault();
  inputCopiar.value = descriptografar(inputCriptoDescripto.value)
  mostrarTextoParaCopiar();
  inputCriptoDescripto.value = ''
})

btnCopiar.addEventListener('click', event => {
  event.preventDefault();
  copiarTexto();
})


const mostrarTextoParaCopiar = () => {
  if (inputCopiar.value) {
    divSemTexto.classList.add('hidden')
    divCopiar.classList.remove('hidden')
  }

  if (!inputCopiar.value) {
    divSemTexto.classList.remove('hidden')
    divCopiar.classList.add('hidden')
  }
}

const copiarTexto = () => {
  inputCopiar.select();
  inputCopiar.setSelectionRange(0, 99999)
  document.execCommand('copy')
}
