var agora = new Date() // Exemplo de hora para teste
var hora = agora.getHours() // hora atual do sistema

console.log(`Agora são exatamente ${hora} horas.`);

if (hora < 5) {
    console.log('Boa madrugada!');
} else if (hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
}