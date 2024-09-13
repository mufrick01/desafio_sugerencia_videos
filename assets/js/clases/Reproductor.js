import { Multimedia } from "./Multimedia.js";

export class Reproductor extends Multimedia {
    
    constructor(id,url){
        super(url)
        this.id = id;
    }

    playMultimedia(){
        let idSelector=`#${this.id}`
        let iframe = document.querySelector(idSelector)
        if(!iframe) return;
        iframe.src = this.url;
    }

    setInicio(seconds){
        this.url=`${this.url}&amp;start=${seconds}`
        if(isNaN(seconds)) throw new Error(`setInicio(seconds:number) el argumento debe ser un numero`)
    }
}