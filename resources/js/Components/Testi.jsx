import React from "react";
import arrow from "../../../public/assets/arrow.png";
import left from "../../../public/assets/left.png";
import avatar from "../../../public/assets/Avatar.png";
import line from "../../../public/assets/garis.png";

export default function Testi() {
    return (
        <div className="content-testi conta">
            <div className="text">
                <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat ad culpa quo beatae quam ut voluptatum qui optio
                    expedita minima iste mollitia, ipsum debitis cupiditate!
                    Amet odit optio in sapiente.""
                </p>
            </div>
            <div className="img-space">
                <img src={arrow} />
                <img src={left} />
            </div>
            <div className="card-img">
                <img src={avatar} />
                <div className="card-txt">
                    <h2>James Swith</h2>
                    <p>Food Vlogger</p>
                </div>
            </div>
            <div className="img-line">
                <img src={line} />
            </div>
        </div>
    );
}
