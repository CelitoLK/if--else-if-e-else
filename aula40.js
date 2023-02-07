/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa Noite
*/


const hora = 23;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
}else {
    console.log ('Olá');
}


/*if (hora <= 12) {
    console.log('Bom dia');
} 

*/

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não sair de casa');
}