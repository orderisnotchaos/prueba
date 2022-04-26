function agregarHttp(array){
   for (i=0; i<array.length;i++){
   array[i] = "http://" + array[i]
   }
   return array
}
function largoStrings(array){
   for (i=0; i<array.length;i++){
       array[i] = array[i].length
       }
   return array
   }
function procesar(array,callback){
   return callback(array)
}