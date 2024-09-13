// main.js

import { Reproductor } from "./clases/Reproductor.js";

const Main = (() => {
    const sugerencias = {
        película: 'https://www.youtube.com/embed/hX-NHafvY5I?si=mQng7bKx8bnMLd9A',
        serie: 'https://www.youtube.com/embed/uDIoEbbFKAY?si=iTBQfiLHBbOrB-Tc',
        musica: 'https://www.youtube.com/embed/B2DnxwR045s?si=IRx6wjBxd47CGOpb',
    };

    const inicializarReproductores = (value) => {
        const reproductorList = [
            new Reproductor('peliculas', sugerencias.película),
            new Reproductor('series', sugerencias.serie),
            new Reproductor('musica', sugerencias.musica),
        ];

        reproductorList.map(
            (reproductor) => {
                if(value){
                    reproductor.setInicio(value)
                }
                reproductor.playMultimedia()
            }
        );
    };

    return {
        iniciar: (value) => {
            document.addEventListener("DOMContentLoaded", () => {
                inicializarReproductores(value);
            });
        }
    };
})();

// Main.iniciar();
Main.iniciar(30);
