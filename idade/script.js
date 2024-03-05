function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res') // confirmar se está funcionando no codigo dos estudos é um ID e aqui no caso coloquei como CLASS.
    if (fano.value.length == 0 || Number(fano.value) > ano) { //AQUI A GENTE USOU A LOGICA SE O VALOR DE ENTRADA NO INPUT É IGUAL A ZERO OU NÃO CORRESPONDE O ANO QUE ESTAMOS NESSE MOMENTO ELE PEDE PARA REVISAR OS DADOS ADICIONADO NO INPUT.
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
    }


}
