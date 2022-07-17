import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Any(props) {
    return (
        <div>
            <Head title={props.title} />
            <div className="flex justify-center items-center min-h-screen bg-neutral-600 text-white">
                <img />
                <h1 style={{ fontSize: "30px" }}>You Enter Wrong Domain Sir</h1>
            </div>
        </div>
    );
}
