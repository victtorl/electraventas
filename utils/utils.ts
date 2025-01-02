 function goTo(link:string) {
    // //el 96 es el tamaño del header
    const position = document.getElementById(link).offsetTop - 96;
    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
    console.log(position);
}


 function goToM(link:string) {
    // //el 98 es el tamaño del header
    const position = document.getElementById(link).offsetTop - 98;
    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
    console.log(position);
}

 function goToInicio() {
    // //el 98 es el tamaño del header
    const position = 0;
    // smooth scroll
    window.scrollTo({ top: position, behavior: "smooth" });
    console.log(position);
}

 function getPosition(link:string) {
    // //el 98 es el tamaño del header
    const position = document.getElementById(link).offsetTop - 96;
    // smooth scroll
    return position
}


function isActiveOffer(){
    const infopST=useProductStore()
    if(infopST.infopage.contacto?.fechaloferta){
    const fechaProporcionada = new Date(infopST.infopage.contacto?.fechaloferta);
    const fechaActual = new Date();
    const diferencia = fechaProporcionada+21600000 - fechaActual;  // dif en milisegundos
    diferencia>0?true:false
     }
}


export {goTo,goToM,goToInicio,getPosition,isActiveOffer}
