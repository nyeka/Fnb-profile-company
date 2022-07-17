import React from "react";
import "../../css/./navbar/style.css";

export default function Navbar() {
    return (
        <nav className="conta">
            <div className="contain ">
                <i>Apiemas.</i>
                <div className="content">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/menu">Our Menu</a>
                        </li>
                        <li>
                            <a href="/feature">Features</a>
                        </li>
                        <li>
                            <a href="/FAQ">FAQ</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                    <div className="bt conta">Reservations</div>
                </div>
            </div>
        </nav>
    );
}
