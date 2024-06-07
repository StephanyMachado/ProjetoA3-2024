const form = document.querySelector('form');
const nomeCompletoInput = document.querySelector('.nome-completo');
const cpfInput = document.querySelector('.cpf');
const modeloCarroInput = document.querySelector('.modelo-carro');
const marcaInput = document.querySelector('.marca');
const problemaInput = document.querySelector('.problema');
const quilometragemInput = document.querySelector('.quilometragem');

 form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita o envio padrão do formulário

  const nomeCompleto = nomeCompletoInput.value.trim();
  const cpf = cpfInput.value.trim();
  const modeloCarro = modeloCarroInput.value.trim();
  const marca = marcaInput.value.trim();
  const problema = problemaInput.value.trim();
  const quilometragem = parseInt(quilometragemInput.value.trim());

  // Validação básica
  if (!nomeCompleto) {
    alert('Preencha o nome completo');
    return;
  }

  if (!cpf) {
    alert('Preencha o CPF');
    return;
  }

  if (!modeloCarro) {
    alert('Preencha o modelo do carro');
    return;
  }

  if (!marca) {
    alert('Preencha a marca do carro');
    return;
  }
  
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    const formData = new FormData(form);
  
    fetch('/cars', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Processo a resposta JSON do servidor
        // ...
      })
      .catch((error) => {
        console.error('Erro ao enviar o formulário:', error);
      });
  });
  
  fetch('/cars', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Processo a resposta JSON do servidor (por exemplo, atualizar a interface do us
      // ...
    })
    .catch((error) => {
      console.error('Erro ao enviar o formulário:', error);
    });
  
  // Envie o formulário para o servidor usando AJAX ou submit nativo
  // ...
});
