// let a =prompt('hola')
// for(i=a;i>0;i--){
//  console.log('hello world')
// };
//----------------------------
function ejercicio6(){
let a= parseint(prompt("¿Cuantos usuarios desea registrar?"))
for (let i = 0; i < a; i++) {
  registro ()
}

function registro () {
  const linkin = []
  const registrarse={
    nombre:prompt('¿Cual es tu nombre?'),
     apellido:prompt('¿Cual es tu apellido?'),
    edad:prompt('¿Cual es tu edad?'),
    correo:prompt('Cual es tu correo electrónico')}
  linkin.unshift(registrarse)
  console.log(linkin)
}}
