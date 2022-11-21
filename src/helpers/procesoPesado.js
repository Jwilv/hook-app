export  const procesoPesado = (iteraciones)=>{
    for(let i = 0; i < iteraciones; i++){
        console.log('esperando...')
    }
    return `las ${iteraciones} vueltas estan listas`
}