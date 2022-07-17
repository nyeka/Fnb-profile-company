import React from "react";

export default function Menu(props) {
    return (
        <div className="Menu-content conta">
            <div className="Menu">
                <div className="tulis">You Are What You Eat</div>
                <p>Show More</p>
            </div>
            <div className="gmbr">
                {props.data ? (
                    props.data.map((i, index) => {
                        return (
                            <div className="gmbr-1" key={index}>
                                <img src={i.img} className="img-1" />
                                <div className="pembungkus">
                                    <div className="txt">
                                        <p>Article</p> <span></span>
                                        <p>{i.date}</p>
                                    </div>
                                    <p className="title">{i.title}</p>
                                    <img src={i.line} className="img-1" />
                                    <p className="pdes">{i.desc}</p>
                                    <div className="arrow">
                                        Read More
                                        <img src={i.arrow} />
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="flex justify-center items-center min-h-screen bg-dark">
                        Data Not Found
                    </div>
                )}
            </div>
        </div>
    );
}
