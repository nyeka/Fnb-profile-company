import Navbar from "@/Components/navbar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Menu(props) {
    return (
        console.log(props.line),
        (
            <div>
                <Head title={props.title} />
                <Navbar />
            </div>
        )
    );
}
