function onClick(valor) {

	//Verifica se campo cep possui valor informado.
	if (valor != "") {

		//Nova variável "cep" somente com dígitos.
		var cep = valor.replace(/\D/g, '');

		//Expressão regular para validar o CEP.
		var validacep = /^[0-9]{8}$/;

		//Valida o formato do CEP.
		if (validacep.test(cep)) {

			window.location.href = "pagina_2.html?cep=" + cep;

		} else {
			//cep é inválido.
			alert("Formato de CEP inválido.");
		}

	} else {
		//cep vazio.
		alert("Preencher CEP");
	}
	
}

