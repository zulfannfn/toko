import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";


const FormInputPenjualan = (props) => {
    const { penjualan, pelanggan, produk } = props;
    const [idPenjualan, setIdPenjualan] = useState(0)
    const [idPelanggan, setIdPelanggan] = useState(0);
    const [idProduk, setIdProduk] = useState(0);
    const [jumlahProduk, setJumlahProduk] = useState(0);
    const [tanggalPenjualan, setTanggalPenjualan] = useState("");
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

    console.log(jumlahProduk);
    console.log(totalHarga);


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
        <div>
            <div className="mb-2">
                <p>Input Penjualan</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg mb-2 ">
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
                            <select
                                className="select select-bordered w-full max-full"
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
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Produk</span>
                            </div>
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
                <div>
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
