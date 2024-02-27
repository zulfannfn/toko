import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const FormInputProduct = (props) => {
    const { produk } = props
    const [foto, setfoto] = useState("");
    const [produkId, setprodukId] = useState(produk.reduce((prev, current) => (current.produk_id > prev ? current.produk_id + 1 : prev), 0)
    );
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
            !foto ||
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
            foto,
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
        Inertia.post("/admin/product", data);
    };

    return (
        <div>
            <div className="mb-2">
                <p>Input Product</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg mb-2 ">
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
                                value={produkId}
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
                                value={namaProduk}
                                onChange={(namaProduk) =>
                                    setnamaProduk(namaProduk.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            /></label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Harga Produk</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Harga"
                                name="harga"
                                value={harga}
                                onChange={(harga) => setharga(harga.target.value)}
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
                                value={stock}
                                onChange={(stock) => setstock(stock.target.value)}
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
                                value={kategori}
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
                                value={ukuran}
                                onChange={(ukuran) => setukuran(ukuran.target.value)}
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
                                value={warna}
                                onChange={(warna) => setwarna(warna.target.value)}
                                className="input input-bordered w-full "
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
                                value={deskripsi}
                                onChange={(deskripsi) =>
                                    setdeskripsi(deskripsi.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Gambar Produk</span>
                        </div>
                        <input
                            type="file"
                            placeholder="Foto"
                            name="foto"
                            value={foto}
                            onChange={(foto) => setfoto(foto.target.value)}
                            className="file-input file-input-ghost w-full  input-bordered w-full mb-2"
                            required
                        />
                    </label>
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handelSubmit()}
                    >
                        Sumbmit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default FormInputProduct;
