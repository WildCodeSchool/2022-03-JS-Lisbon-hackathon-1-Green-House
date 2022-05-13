import React from "react";
import './info.css';
import tiago from '../../media/tiago.png';
import juan from '../../media/juan.png';
import chico from '../../media/chico.png';
import nuno from '../../media/nuno.png';
import melly from '../../media/melly.png';

export default function Info() {
    return(
        <div className="info-container container">
            <h1>The Team</h1>

            <div className="info-team-container ">
                <div className="img-container">
                    <img className="img-info" src= {tiago} alt="Tiago Jacinto" />
                    <p>Tiago Jacinto</p>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {juan} alt="Juan Pablo Giménez" />
                    <p>Juan Pablo Giménez</p>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {chico} alt="Francisco Pereira" />
                    <p>Francisco Pereira</p>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {nuno} alt="Nuno Moniz" />
                    <p>Nuno Moniz</p>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {melly} alt="Melisandra Gonçalves" /> 
                    <p>Melisandra Gonçalves</p>
                </div>
            </div>

            

        </div>
    )
}
