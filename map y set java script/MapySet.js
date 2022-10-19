const map=new Map();

map.set(1,'lunes');
map.set('2',3);
map.set(10,false);

console.log(map);
console.log("");
/* has comprueba un elemento basado en la clave*/
console.log(map.has(1));
console.log("has devuelve true si el elemento existe con ese indice");
console.log(map.has(9));
console.log("");
/*saber la cantidad de elementos que posee el map*/
console.log("map size nos devuelve la cantidad de elementos en el map");
console.log(map.size);
console.log("");

map.delete(10);
console.log(map);
console.log("map.delete (10) borra el indice 10 y su contenido");

/*si agregamos un set con un id ya existente al map sobrescribira el dato*/
map.set(1,"martes");
map.set('2',4);
map.set(3,"mañana");
console.log(map);
console.log("");

console.log("para recorrer un map se usa for off por que no es lo mismo que un arreglo");
for(const item of map){
console.log(item);
}
console.log("");
console.log("tambien se puede recorrer en forma independiente para obtener la clave como el valor");
for(const [key,value]of map){
    console.log(key,value);
}
console.log("");

console.log("map no es un objeto es la instancia de un objeto ");
console.log(map instanceof Object);
console.log("");

console.log("para obtener el valor de una entrada usamos get y el la clave");
console.log(map.get ('2'));

console.log("Set es una estructura de dato que nos permite colecciones de informacion especificamente valores que n se van a repeti");
console.log("");
const set=new Set();
//creamos una nueva instancia y le agregamos item con add para la coeccion
set.add(1);
set.add(false);
set.add([1,3,4]);
set.add(4);
console.log(set.has(true));
console.log(set.has(1));//has buscara un valor dentro de nuestra coleccion
//si buscamos el arreglo de [1,3,4] no podremos buscarlo conhas por que lo tendremos que buscaar por su referencia
console.log(set.has([1,3,4]));
console.log("");
//para buscarlo por su referencia en un set 
//para hacerlo hay que guardar el arreglo en una variable por fuera y luego buscar esa variable en el set
const arr=[2,5,6];
set.add(arr);
console.log(set.has(arr));
console.log("se puede usar size en un set para obtener la cantidad de elementos");
console.log(set.size);
console.log("");
console.log("se puede usar el set.delete para borrar una entrada especifica");
set.delete(false);
console.log(set.size);
console.log("");

console.log("para recorrer o iterar el set tambien podemos usar el for off");
for(const item of set){
    console.log(item);
}
console.log("");
console.log("la caracteristica mas importante de los set es que podemos junto con los array para saber si tiene item");
console.log("repetidos podremos generar un set apartir de ese array y quitarle los valores repetidos");
const repeated=[1,1,2,2,3,4,5,7,7];
const set2= new Set(repeated);
console.log(set2);
//el resultado sera de tipo set no de tipo arreglo
console.log("pero podemos transformarlo enun array");
const arr2=[ new Set(repeated)];
console.log(arr2);
console.log("");
console.log("casos de uso mas eficientes MAP  en ves de usar un array de objetos para buscar solo un valor por su clave ");

console.log("array de objetos");
const item=[
{key:"0", value:"valor0" },
{key:"1", value:"valor1" },
{key:"2", value:"valor2" },
];
console.log("");
//asi se busca en un array de objetos por su valor
console.log(item.find((item)=> item.key === "1").value);
console.log("el valor devuelto es valor1 es correcto pero es mas sencillo con map");
console.log("");
console.log("AHORA CON MAP");
const itemMap=new Map([
   ["0","valor0" ],
   ["1","valor1" ],
   ["2","valor2" ],
]);
console.log(itemMap.get("1"));
console.log("es mas sencillo con map");
console.log("");
console.log('otro ejemplo de cuando usar map es cuando nosotros necesitemos utilizar objetos que sean dinamicos');
console.log('osea cuando necesitemos que se incrementen el numero de objetos que vamos almacenando:');
console.log("dinamic objet no es lo mas recomendable que los objetos sean dinamicoas");
console.log("");

const dynamicObjects={
    clave1:"valor1",
};//esto es un objet literal y abajo le agregamos mas opciones 
//los objetos dynamicos no son muy recomendables por que la forma general es que no sean dynamicos
dynamicObjects["id01"]=23;
dynamicObjects[false]= true;
console.log(dynamicObjects);
console.log("");

console.log("ahora con Map");
const dynamicMap= new Map([["clave1","valor1"]]);
dynamicMap.set("id01",23);
dynamicMap.set(false,true);
console.log(dynamicMap);
console.log("");

console.log("SET CUANDO DEBERIMOS USARLO:");
console.log("");
console.log("LA FORMA MAS SIMPLE DE DARSE CUENTA CUANDO USARLO ES CUANDO QUEREMOS GUARDAR VALOSRES UNICOS");
console.log("sin set: ahriamos");
let itemarr=[1,1,1,2,2,3,4,4];
let temp=[];
//aca deberiamos recorrer el arreglo y guardar solo una vez cuandose repiten en un nuevo array temp
for(let i=0;i<itemarr.length;i++){
    const find= temp.find((titem)=>titem === itemarr[i]);
    if(!find){
        temp.push(itemarr[i]);
    }
}
itemarr=[temp];
console.log(itemarr);
console.log("");
console.log("es mucho mas simple usando set");
const setRepeated =new Set([1,1,1,2,2,3,4,4]);
console.log(setRepeated);
console.log("por definicion l set borrara los valores repetidos");