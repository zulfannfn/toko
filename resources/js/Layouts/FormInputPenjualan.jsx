import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import FormInputPelanggan from "./FormInputPelanggan";
import FormInputProduct from "./FormInputProduct";



const FormInputPenjualan = (props) => {
    const { penjualan, pelanggan, produk } = props;

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

    const [idPenjualan, setIdPenjualan] = useState(0)
    const [idPelanggan, setIdPelanggan] = useState(0);
    const [idProduk, setIdProduk] = useState(0);
    const [jumlahProduk, setJumlahProduk] = useState(0);
    const [tanggalPenjualan, setTanggalPenjualan] = useState(getCurrentDate());
    const [notif, setNotif] = useState(false);
    const [totalHarga, setTotalHarga] = useState(0);

    const hitungTotalHarga = () => {
        const produkTerpilih = produk.find(
            (data) => data.produk_id === parseInt(idProduk)
        );
        if (produkTerpilih) {
            const harga = produkTerpilih.harga;
            const totalHarga = jumlahProduk * harga;
            setTotalHarga(totalHarga);
        }
    };

    useEffect(() => {
        const maxId = penjualan.reduce((prev, current) => (current.id_penjualan > prev ? current.id_penjualan : prev), 0);
        setIdPenjualan(maxId + 1);
    }, [penjualan]);

    useEffect(() => {
        hitungTotalHarga();
    }, [idProduk, jumlahProduk]);

    

    const handelSubmit = () => {
        if (!idPenjualan || !idPelanggan || !idProduk || !jumlahProduk || !tanggalPenjualan || !totalHarga) {
            setNotif(false);
            return;
        }

        const data = {
            idPenjualan,
            idPelanggan,
            idProduk,
            jumlahProduk,
            tanggalPenjualan,
            totalHarga,
        };
        setNotif(true);
        Inertia.post("/admin/penjualan", data);
    };


    return (
        <div className="bg-slate-50 px-4 py-3 rounded-md">
            <div>
                <p className="font-bold">Penjualan</p>
            </div>
            <form className="flex flex-col gap-2 rounded-lg mb-2 ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Penjualan</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Penjualan ID"
                                name="id_penjualan"
                                value={idPenjualan}
                                onChange={(e) => setIdPenjualan(e.target.value)}
                                className="input input-bordered w-full "
                                required
                            /></label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Pelanggan</span>
                            </div>
                            <div className="flex flex-row w-full">
                                <select
                                    className="select select-bordered w-full "
                                    name="id_pelanggan"
                                    onChange={(e) => setIdPelanggan(e.target.value)}
                                >
                                    <option value={idPelanggan}>ID Pelanggan</option>
                                    {pelanggan.map((data, i) => {
                                        return (
                                            <option key={i} value={data.id_pelanggan}>
                                                {data.id_pelanggan} |{" "}
                                                {data.nama_pelanggan}
                                            </option>
                                        );
                                    })}
                                </select>
                                <div className="w-[50%]">
                                    {/* The button to open modal */}
                                    <label
                                        htmlFor="my_modal_7"
                                        className="btn btn text-slate-700 hover:text-white  hover:bg-blue-800 rounded-lg ml-2"
                                    >
                                        Input Pelanggan
                                    </label>
                                    {/* Put this part before </body> tag */}
                                    <input
                                        type="checkbox"
                                        id="my_modal_7"
                                        className="modal-toggle"
                                    />
                                    <div
                                        className="modal backdrop-blur-sm "
                                        role="dialog"
                                    >
                                        <div className="modal-box w-11/12 max-w-5xl white">
                                            <FormInputPelanggan pelanggan={pelanggan} />
                                        </div>
                                        <label
                                            className="modal-backdrop"
                                            htmlFor="my_modal_7"
                                        >
                                            Close
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Produk</span>
                            </div>
                            <div className="flex flex-row">
                                    <select
                                        className="select select-bordered w-full max-full"
                                        name="id_produk"
                                        onChange={(e) => setIdProduk(e.target.value)}
                                    >
                                        <option value={idProduk}>ID Produk</option>
                                        {produk.map((data, i) => {
                                            return (
                                                <option key={i} value={data.produk_id} className="font-semibold">
                                                    {data.produk_id} {" "}
                                                    {data.nama_produk} | Sisa Stock : {" "}
                                                    {data.stock} | Harga : {" "}
                                                    {data.harga}
                                                </option>
                                            );
                                        })}
                                    </select>
                                <div className="w-[50%]">
                                    {/* The button to open modal */}
                                    <label
                                        htmlFor="my_modal_8"
                                        className="btn btn text-slate-700 hover:text-white  hover:bg-blue-800 rounded-lg ml-2"
                                    >
                                        Input Produk
                                    </label>

                                    {/* Put this part before </body> tag */}
                                    <input
                                        type="checkbox"
                                        id="my_modal_8"
                                        className="modal-toggle"
                                    />
                                    <div
                                        className="modal backdrop-blur-sm "
                                        role="dialog"
                                    >
                                        <div className="modal-box w-11/12 max-w-5xl white">
                                            <FormInputProduct produk={produk} />
                                        </div>
                                        <label
                                            className="modal-backdrop"
                                            htmlFor="my_modal_8"
                                        >
                                            Close
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Jumlah Produk</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Jumlah"
                                name="jumlah"
                                value={jumlahProduk}
                                onChange={(jumlahProduk) =>
                                    setJumlahProduk(
                                        jumlahProduk.target.value
                                    )
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Tanggal Jual</span>
                            </div>
                            <input
                                type="date"
                                placeholder="Tanggal Penjualan"
                                name="tanggal_penjualan"
                                value={tanggalPenjualan}
                                onChange={(tanggalPenjualan) =>
                                    setTanggalPenjualan(
                                        tanggalPenjualan.target.value
                                    )
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Total Harga</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Total Harga"
                                name="total_harga"
                                value={totalHarga}
                                className="input input-bordered w-full "
                                readOnly
                            />
                        </label>
                    </div>
                </div>
                <div className="flex  justify-end">
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
export default FormInputPenjualan;
