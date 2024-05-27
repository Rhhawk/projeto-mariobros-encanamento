/* 

Variaveis
um espaço de memoria reservado para guardar oque vc quiser dentro

- var - cod antigo - nao use
- let - voce pode alterar o valor depois 
- const -> constante segurança para nao mudar o codigo

*/

/* FUNÇÃO = UM TREXO DE CODIGO SO EXECUTADO SO QUANDO FOR CHAMADO 

*/

const form = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"
}

function cliqueiNaMascara() {
   mascara.style.visibility = "hidden"
   form.style.left = "-300px"

}
