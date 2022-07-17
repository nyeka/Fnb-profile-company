import React from "react";

export default function Reservation() {
    return (
        <div className="Reservation conta">
            <h1>Make A Reservation</h1>
            <p>Get In Touch With Restaurant</p>
            <form>
                <input type="Text" value="8/12/2021" disabled />
                <input type="Text" value="8:00 PM" disabled />
                <input type="Text" value="2 Person" disabled />
            </form>
            <div className="booking">Book Now</div>
        </div>
    );
}
