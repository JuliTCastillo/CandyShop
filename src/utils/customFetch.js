/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
let is_ok = true;
let customFetch = (time, array) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(is_ok){
                resolve(array);
            }
            else{
                reject("Error de datos");
            }
        }, 2000)
    })
}
/************************************
 * Autor: Julieta Tatiana Castillo  *
 ************************************/
export default customFetch;