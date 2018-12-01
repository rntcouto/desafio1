window.onload = function () {

	var valorcep = getParameter('cep');

	$('#cep').val(valorcep);

	//Preenche os campos com "..." enquanto consulta webservice.
	$("#rua").val("...");
	$("#bairro").val("...");
	$("#cidade").val("...");
	$("#uf").val("...");

	//Consulta o webservice viacep.com.br/
	$.getJSON("https://viacep.com.br/ws/" + valorcep + "/json/?callback=?", function (dados) {

		if (!("erro" in dados)) {
			//Atualiza os campos com os valores da consulta.
			$("#rua").val(dados.logradouro);
			$("#bairro").val(dados.bairro);
			$("#cidade").val(dados.localidade);
			$("#uf").val(dados.uf);
		} //end if.
		else {
			//CEP não Encontrado.
			alert("CEP não encontrado.");
			window.location.href = 'pagina_1.html';
		}
	});

	function getParameter(theParameter) {

		var params = window.location.search.substr(1).split('&');

		for (var i = 0; i < params.length; i++) {
			var p = params[i].split('=');
			if (p[0] == theParameter) {
				return decodeURIComponent(p[1]);
			}
		}
		return false;
	}
};