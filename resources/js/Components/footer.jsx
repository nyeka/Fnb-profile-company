import React from "react";

export default function Footer(props) {
    return (
        <footer>
            <div className="footer conta">
                <i>Apiemas.</i>
                <div className="social">
                    Social Media
                    <div className="img">
                        <img src={props.ig} />
                        <img src={props.in} />
                        <img src={props.fb} />
                    </div>
                </div>
                <div className="social">
                    Social Media
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tortor Donec sit placerat velit
                    </p>
                </div>
                <div className="social">
                    Contact
                    <p>
                        +62 852 346 000 <br /> info@apiemas.
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={props.gmbr} />
                <p>&copy; 2022 apiemas. All rights Reserved</p>
            </div>
        </footer>
    );
}
