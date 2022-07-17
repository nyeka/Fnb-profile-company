import React from "react";

export default function Section(props) {
    return (
        <div className="conten conta">
            {props.data ? (
                props.data.map((i, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={i.img} />
                            <h1>{i.title}</h1>
                            <p>{i.desc}</p>
                        </div>
                    );
                })
            ) : (
                <div className="flex justify-center items-center min-h-screen bg-dark">
                    Data Not Found
                </div>
            )}
        </div>
    );
}
