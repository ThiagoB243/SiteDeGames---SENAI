//Mascara
$(function() {
    $(".cpf_mask").mask('999.999.999-99');
    $(".cep_mask").mask('99999-999');
});


//Limpa valores do formulário de cep.
function limpa_formulário_cep() {
    document.getElementById('cep').value = ("");
    document.getElementById('endereco').value = ("");
}

//Atualiza os campos com os valores.
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('endereco').value = (conteudo.logradouro);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

//Pesquisa de CEP
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('endereco').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

//GERAR JSON
function gerar_json() {
    var obj_form = {
        name: "",
        email: "",
        cep: "",
        endereco: "",
        numero: ""
    }

    var el_name = document.getElementById("name");
    obj_form.name = el_name.value;

    var el_email = document.getElementById("email");
    obj_form.email = el_email.value;

    var el_cep = document.getElementById("cep");
    obj_form.cep = el_cep.value;

    var el_endereco = document.getElementById("endereco");
    obj_form.endereco = el_endereco.value;

    var el_numero = document.getElementById("numero");
    obj_form.numero = el_numero.value;

    //Exibir JSON
    var json = JSON.stringify(obj_form);
    console.log(json);
    document.write("<h1>Dados em Json</h1>");
    document.write(json);

    return json;
}