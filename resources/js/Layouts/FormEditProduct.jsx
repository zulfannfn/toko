import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const FormEditProduct = (props) => {
    const { produk } = props;

    console.log(props);

    const [produkId, setprodukId] = useState(0);
    const [namaProduk, setnamaProduk] = useState("");
    const [harga, setharga] = useState(0);
    const [stock, setstock] = useState(0);
    const [kategori, setkategori] = useState("");
    const [ukuran, setukuran] = useState("");
    const [warna, setwarna] = useState("");
    const [deskripsi, setdeskripsi] = useState("");
    const [notif, setNotif] = useState(false);

    const handelSubmit = () => {
        if (
            !produkId ||
            !namaProduk ||
            !harga ||
            !stock ||
            !kategori ||
            !ukuran ||
            !warna ||
            !deskripsi
        ) {
            setNotif(false);
            return;
        }

        const data = {
            id: produk.id,
            produkId,
            namaProduk,
            harga,
            stock,
            kategori,
            ukuran,
            warna,
            deskripsi,
        };
        setNotif(true);
        Inertia.post("/admin/product/update", data);
    };

    return (
        <div className="p-4 bg-slate-50 rounded-lg">
            <div className="text-center">
                <p>Edit Product</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Produk</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Product ID"
                                name="product_id"
                                defaultValue={
                                    produk && produk.produk_id
                                        ? produk.produk_id
                                        : ""
                                }
                                onChange={(produkId) =>
                                    setprodukId(produkId.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Nama Produk</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Nama Product"
                                name="nama_product"
                                defaultValue={
                                    produk && produk.nama_produk
                                        ? produk.nama_produk
                                        : ""
                                }
                                onChange={(namaProduk) =>
                                    setnamaProduk(namaProduk.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Harga</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Harga"
                                name="harga"
                                defaultValue={
                                    produk && produk.harga ? produk.harga : ""
                                }
                                onChange={(harga) =>
                                    setharga(harga.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Stock</span>
                            </div>
                            <input
                                type="text"
                                placeholder="stock"
                                name="stock"
                                defaultValue={
                                    produk && produk.stock ? produk.stock : ""
                                }
                                onChange={(stock) =>
                                    setstock(stock.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Kategori</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Kategori"
                                name="kategori"
                                defaultValue={
                                    produk && produk.kategori
                                        ? produk.kategori
                                        : ""
                                }
                                onChange={(kategori) =>
                                    setkategori(kategori.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Ukuran</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Ukuran"
                                name="ukuran"
                                defaultValue={
                                    produk && produk.ukuran ? produk.ukuran : ""
                                }
                                onChange={(ukuran) =>
                                    setukuran(ukuran.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Warna</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Warna"
                                name="warna"
                                defaultValue={
                                    produk && produk.warna ? produk.warna : ""
                                }
                                onChange={(warna) =>
                                    setwarna(warna.target.value)
                                }
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Deskripsi</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Deskripsi"
                                name="deskripsi"
                                defaultValue={
                                    produk && produk.deskripsi
                                        ? produk.deskripsi
                                        : ""
                                }
                                onChange={(deskripsi) =>
                                    setdeskripsi(deskripsi.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className="py-2 flex flex-row justify-end">
                    <button
                        className="btn hover:btn-primary"
                        onClick={() => handelSubmit()}
                    >
                        Sumbmit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormEditProduct;
