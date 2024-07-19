const reproductorMusica = {

    estado: "apagado",

    play : function(cancion) {
        if(this.estado === "apagado"){
            console.log(`Reproduciendo cancion ${ cancion }...`)
            //cambiar el estado
            this.estado = "play"
        }else{
            console.log(`...cancion en freproduccion: stop para terminar`)
        }
    },
    stop: function(){
        if(this.estado === "apagado"){
            console.log(`Reproductor ya esta apagado`)
        }else{
            console.log(`Apagando reproductor...`)
            this.estado = "apagado"
        }
    },

    getEstado : function(){
            return this.estado
    },
    setEstado : function(estado){
        this.estado = estado
    }
}

reproductorMusica.play("Himno Nacional");
//reproductorMusica.stop();
//reproductorMusica.stop();