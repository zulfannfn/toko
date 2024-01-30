import { Link, Head } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/Navbar";
import Heading from "@/Components/Heading";
import SectionProduct from "@/Components/SectionProduct";

export default function Home({ auth, produk }) {
    return (
        <div className="container m-auto">
            <Head title="Home" />

            <Navbar user={auth.user} />
            <Heading />
            <SectionProduct produk={produk} />
        </div>
    );
}
