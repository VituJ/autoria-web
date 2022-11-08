var contapessoas = 0
function gravar(){
    var nomepessoa  ="";
    var idadepessoa = 0;
    nomepessoa  = document.getElementById("nome").value;
    idadepessoa = document.getElementById("idade").value;
    if (nomepessoa != "" && idadepessoa != 0){
        divinfogravadas.innerHTML = `${nomepessoa + " tem " + idadepessoa + " anos"}`;
        contapessoas = contapessoas + 1;
        divcontapessoas.innerHTML = `${contapessoas + " foram contabilizadas"}`;
    }
    else{
        window.alert("Faltou informar nome e/ou a idade")
    }

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('msg').value = '';
    document.getElementById('nome').focus();
}