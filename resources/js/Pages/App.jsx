import React from "react";
import Navbar from "../Components/navbar";
import { Link, Head } from "@inertiajs/inertia-react";
import "../../css/app.css";
import Features from "../Components/features";
import Post from "../Components/post";
import Testi from "@/Components/Testi";
import Menu from "@/Components/menu";
import Reservation from "@/Components/reservation";
import Footer from "@/Components/footer";
import Section from "../Components/section";

export default function App(props) {
    return (
        <div>
            <Head title={props.title} />
            <Navbar />
            <Features />
            <Section data={props.section} />
            <Post />
            <Testi />
            <Menu data={props.data} />
            <Reservation />
            <Footer
                gmbr={props.lin}
                fb={props.fb}
                in={props.in}
                ig={props.ig}
            />
        </div>
    );
}
