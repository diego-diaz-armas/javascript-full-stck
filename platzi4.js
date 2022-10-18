
let jugador =0;
function aliatorio(min,max){
 return Math.floor(Math.random()* (max-min+1) +min);
}


function eleccion(jugada){

         let resultado="";

         if(jugada == 1 ){
             resultado ="piedra";

           }else if(jugada == 2 ){
             resultado ="papel";

           }else if(jugada == 3 ){
             resultado ="tijera";

           }else{
             resultado ="no elejistes ninguna opcion";
           }
               return resultado;
}

let pc = 0;
let triunfo=0;
let perdida=0;

while(triunfo < 3 && perdida < 3 ){

   pc=aliatorio (1,3);


jugador = prompt("1= piedra, 2 =papel, 3= tijera" );
//alert("elegistes: " + jugador);

alert("jugador elige:" + eleccion(jugador));


//eleccion pc 
   
   alert("jugador elige:" + eleccion(pc));

//combate
if(pc == jugador){
 alert("empate");
}else if(jugador == 1 && pc== 3){
 alert("ganaste");
 triunfo = triunfo +1 ;
}else if(jugador==2 && pc==1){
 alert("ganaste");
 triunfo = triunfo +1 ;
}else if(jugador==3 && pc==2){
 alert("ganaste");
 triunfo = triunfo +1 ;
}else{
 alert("perdiste");
 perdida = perdida +1;
}
   alert("ganastes:" + triunfo +"perdistes:"+ perdida);
}

