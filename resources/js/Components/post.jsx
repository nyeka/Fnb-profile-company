import React from "react";
import sop from "../../../public/assets/Feature image.png";
import kentang from "../../../public/assets/kentang.png";
import Tauge from "../../../public/assets/Tauge.png";
import Udang from "../../../public/assets/Udang.png";
import tomat from "../../../public/assets/tomat.png";
import fresh from "../../../public/assets/fresh.png";

export default function Post() {
    return (
        <div className="Post conta">
            <ul>
                <li>All</li>
                <li>Starter</li>
                <li>Launch</li>
                <li>Dinner</li>
                <li>Drink</li>
                <li>Sweat</li>
                <li>Fruit</li>
            </ul>
            <div className="kontainer-img">
                <div className="card-1">
                    <img src={sop} />
                    <div className="absol-text">
                        <h2>Premium Salmon With Yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
                <div className="card-2 card-img">
                    <img src={kentang} />
                    <div className="absol-text">
                        <h2>Premium salmon with yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
            </div>
            <div className="kontainer-img">
                <div className="card-3 card-img">
                    <img src={Tauge} />
                    <div className="absol-text1">
                        <h2>Premium salmon with yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
                <div className="card-4">
                    <img src={tomat} />
                    <div className="absol-text2">
                        <h2>Premium Salmon With Yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
            </div>
            <div className="kontainer-img">
                <div className="card-1">
                    <img src={Udang} />
                    <div className="absol-text">
                        <h2>Premium Salmon With Yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
                <div className="card-2 card-img">
                    <img src={fresh} />
                    <div className="absol-text">
                        <h2>Premium salmon with yellow curry sauce</h2>
                        <p>IDR 349K</p>
                    </div>
                </div>
            </div>
            <div className="btn">
                <p>Show More</p>
            </div>
        </div>
    );
}
