import { Link, Head } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/Navbar";
import CardProduct from "@/Components/CardProduct";

export default function Product({ produk, auth }) {
    return (
        <div className="container m-auto">
            <Head title="Home" />
            <Navbar user={auth.user} />
            <div className="flex flex-row flex-wrap justify-center gap-6">
                {produk.map((item, i) => {
                    return (
                        <CardProduct
                            key={i}
                            namaProduct={item.nama_produk}
                            harga={item.harga}
                            kategori={item.kategori}
                            ukuran={item.ukuran}
                        />
                    );
                })}
            </div>
        </div>
    );
}
