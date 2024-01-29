import { Link, Head } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/Navbar";
import Heading from "@/Components/Heading";
import SectionProduct from "@/Components/SectionProduct";

export default function Homepage(props) {
    console.log(props.produk);
    return (
        <div className="container m-auto">
            <Navbar />
            <Heading />
            <SectionProduct />
        </div>
    );
}
