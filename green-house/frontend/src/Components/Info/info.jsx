import React from "react";
import './info.css';
import tiago from '../../media/tiago.png';
import juan from '../../media/juan.png';
import chico from '../../media/chico.png';
import nuno from '../../media/nuno.png';
import melly from '../../media/melly.png';
import { LinkedIn } from '../../media/exportMedia';

export default function Info() {
    return(
        <div className="info-container container">
            <h1>The Team</h1>

            <div className="info-team-container ">
                <div className="img-container">
                    <img className="img-info" src= {tiago} alt="Tiago Jacinto" />
                    <p>Tiago Jacinto  </p>
                    <a href="https://www.linkedin.com/in/tiago-v-jacinto/">
                    <LinkedIn className="icon"/>
                    </a>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {juan} alt="Juan Pablo Giménez" />
                    <p>Juan Pablo Giménez </p>
                    <a href="https://www.linkedin.com/in/juan-pablo-gim%C3%A9nez-481b83236/">
                    <LinkedIn className="icon"/>
                    </a>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {chico} alt="Francisco Pereira" />
                    <p>Francisco Pereira </p>
                    <a href="https://www.linkedin.com/in/francisco-ceriaco-pereira/">
                    <LinkedIn className="icon"/>
                    </a>
                </div>

                <div className="img-container">
                    <img className="img-info" src= {nuno} alt="Nuno Moniz" />
                    <p>Nuno Moniz </p>

                    <a href="https://www.linkedin.com/in/nunomoniz100/">
                    <LinkedIn className="icon"/>
                    </a>

                </div>

                <div className="img-container">
                    <img className="img-info" src= {melly} alt="Melisandra Gonçalves" /> 
                    <p>Melisandra Gonçalves </p>
                    <a href="https://www.linkedin.com/in/melisandra-gon%C3%A7alves-76a8b9227/">
                    <LinkedIn className="icon"/>
                    </a>
                </div>
            </div>

            

        </div>
    )
}
