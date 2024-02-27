import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import FormInputPelanggan from "./FormInputPelanggan";
import FormInputProduct from "./FormInputProduct";
import { MdOutlineInput } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";

const FormInputPenjualan = (props) => {
    const { penjualan, pelanggan, produk } = props;

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const [idPenjualan, setIdPenjualan] = useState(0);
    const [idPelanggan, setIdPelanggan] = useState(0);
    const [namaPelanggan, setNamaPelanggan] = useState("");
    const [idProduk, setIdProduk] = useState(0);
    const [namaProduk, setNamaProduk] = useState("");
    const [hargaProduk, setHargaProduk] = useState(0);
    const [jumlahProduk, setJumlahProduk] = useState(1);
    const [tanggalPenjualan, setTanggalPenjualan] = useState(getCurrentDate());
    const [totalHarga, setTotalHarga] = useState(0);
    const [productsToAdd, setProductsToAdd] = useState([]);
    const [totalBayar, setTotalBayar] = useState(0);
    const [bayar, setBayar] = useState(0);
    const [notif, setNotif] = useState(false);

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

    const getNamaPelanggan = () => {
        const pelangganTerpilih = pelanggan.find(
            (data) => data.id_pelanggan === parseInt(idPelanggan)
        );
        if (pelangganTerpilih) {
            const nama = pelangganTerpilih.nama_pelanggan;
            setNamaPelanggan(nama);
        }
    };

    const getNamaProduk = () => {
        const produkTerpilih = produk.find(
            (data) => data.produk_id === parseInt(idProduk)
        );
        if (produkTerpilih) {
            const nama = produkTerpilih.nama_produk;
            setNamaProduk(nama);
        }
    };

    const getHargaProduk = () => {
        const hargaProdukTerpilih = produk.find(
            (data) => data.produk_id === parseInt(idProduk)
        );
        if (hargaProdukTerpilih) {
            const harga = hargaProdukTerpilih.harga;
            setHargaProduk(harga);
        }
    };

    useEffect(() => {
        const maxId = penjualan.reduce(
            (prev, current) =>
                current.id_penjualan > prev ? current.id_penjualan : prev,
            0
        );
        setIdPenjualan(maxId + 1);
    }, [penjualan]);

    useEffect(() => {
        hitungTotalHarga();
    }, [idProduk, jumlahProduk]);

    useEffect(() => {
        getNamaPelanggan();
    }, [idPelanggan, namaPelanggan]);

    useEffect(() => {
        getNamaProduk();
    }, [idProduk, namaProduk]);

    useEffect(() => {
        getHargaProduk();
    }, [idProduk, hargaProduk]);

    useEffect(() => {
        let total = 0;
        productsToAdd.forEach((product) => {
            total += product.totalHarga;
        });
        setTotalBayar(total);
    }, [productsToAdd]);

    const handelTampungData = (e) => {
        e.preventDefault();

        const data = {
            idProduk,
            namaProduk,
            jumlahProduk,
            hargaProduk,
            totalHarga,
        };
        setProductsToAdd((prevProducts) => [...prevProducts, data]);
    };

    console.log(productsToAdd);

    const handelSubmit = (e) => {
        e.preventDefault();

        if (
            !idPenjualan ||
            !idPelanggan ||
            !idProduk ||
            !jumlahProduk ||
            !tanggalPenjualan ||
            !totalHarga
        ) {
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

        props.onPenjualanSubmit(e, data);
        Inertia.post("/admin/penjualan", data);
    };

    return (
        <div className="flex flex-row w-full gap-4">
            <div className="bg-slate-50 w-[50%] px-4 py-3 rounded-md">
                <div>
                    <p className="font-bold text-center">Penjualan</p>
                </div>
                <form className="flex flex-col gap-2 rounded-lg mb-2 ">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2 w-full">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        ID Penjualan
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Penjualan ID"
                                    name="id_penjualan"
                                    value={idPenjualan}
                                    onChange={(e) =>
                                        setIdPenjualan(e.target.value)
                                    }
                                    className="input input-bordered w-full "
                                    required
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        ID Pelanggan
                                    </span>
                                </div>
                                <div className="flex flex-row w-full">
                                    <select
                                        className="select select-bordered w-full "
                                        name="id_pelanggan"
                                        onChange={(e) =>
                                            setIdPelanggan(e.target.value)
                                        }
                                    >
                                        <option value={idPelanggan}>
                                            ID Pelanggan
                                        </option>
                                        {pelanggan.map((data, i) => {
                                            return (
                                                <option
                                                    key={i}
                                                    value={data.id_pelanggan}
                                                >
                                                    {data.id_pelanggan}{" "}
                                                    {data.nama_pelanggan}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <div className="w-[50%]">
                                        {/* The button to open modal */}
                                        <label
                                            htmlFor="my_modal_7"
                                            className="btn text-slate-700 text-lg hover:text-white  hover:bg-blue-800 rounded-lg ml-2"
                                        >
                                            <MdOutlineInput />
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
                                                <FormInputPelanggan
                                                    pelanggan={pelanggan}
                                                />
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
                                    <span className="label-text">
                                        ID Produk
                                    </span>
                                </div>
                                <div className="flex flex-row">
                                    <select
                                        className="select select-bordered w-full max-full"
                                        name="id_produk"
                                        onChange={(e) =>
                                            setIdProduk(e.target.value)
                                        }
                                    >
                                        <option value={idProduk}>
                                            ID Produk
                                        </option>
                                        {produk.map((data, i) => {
                                            return (
                                                <option
                                                    key={i}
                                                    value={data.produk_id}
                                                    className="font-semibold"
                                                >
                                                    {data.produk_id}{" "}
                                                    {data.nama_produk}{" "}
                                                    {data.stock}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <div className="w-[50%]">
                                        {/* The button to open modal */}
                                        <label
                                            htmlFor="my_modal_8"
                                            className="btn text-slate-700 hover:text-white text-lg hover:bg-blue-800 rounded-lg ml-2"
                                        >
                                            <MdOutlineInput />
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
                                                <FormInputProduct
                                                    produk={produk}
                                                />
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
                                    <span className="label-text">
                                        Jumlah Produk
                                    </span>
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
                                    <span className="label-text">
                                        Tanggal Jual
                                    </span>
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
                                    <span className="label-text">
                                        Total Harga
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Total Harga"
                                    name="total_harga"
                                    value={totalHarga}
                                    className="input input-bordered w-full outline-none border-none"
                                    readOnly
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <button
                            onClick={handelTampungData}
                            className="text-white btn bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Masukan
                        </button>
                        <button
                            onClick={handelSubmit}
                            className="text-white btn bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sumbmit
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-[50%] px-4 rounded-xl ">
                <p className="py-2 text-center font-semibold">
                    Pembelian Produk
                </p>
                <div className="p-4 bg-slate-50 rounded-md flex flex-row justify-between">
                    <p>
                        <span className="text-slate-500">ID Penjualan :</span>{" "}
                        <span className="text-bold">{idPenjualan}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">ID Pelanggan :</span>{" "}
                        <span className="text-bold">{idPelanggan}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Nama :</span>{" "}
                        <span className="text-bold">{namaPelanggan}</span>
                    </p>
                    <p>
                        <span className="text-slate-500">Tanggal :</span>{" "}
                        <span className="text-bold">{tanggalPenjualan}</span>
                    </p>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>ID Produk</th>
                                    <th>Produk</th>
                                    <th>Jumlah</th>
                                    <th>Harga</th>
                                    <th>Total Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsToAdd.map((product, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{product.idProduk}</td>
                                        <td>{product.namaProduk}</td>
                                        <td>{product.jumlahProduk}</td>
                                        <td>{product.hargaProduk}</td>
                                        <td>{product.totalHarga}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-slate-50 rounded-lg px-2 w-full flex flex-row justify-between items-end py-3">
                    <div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text font-bold text-lg">
                                    Bayar
                                </span>
                            </div>
                            <div className="input input-bordered w-full max-w-xs flex flex-row items-center">
                                <span>Rp.</span>
                                <input
                                    type="text"
                                    placeholder="Bayar"
                                    name="bayar"
                                    value={bayar}
                                    onChange={(bayar) =>
                                        setBayar(bayar.target.value)
                                    }
                                    className="border-none  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0"
                                />
                                <TbReportMoney />
                            </div>
                        </label>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                        <p>Total Pembayaran</p>
                        <p className="text-xl font-bold text-red-500">
                            Rp.{totalBayar}
                        </p>
                    </div>

                    <div className="flex flex-col items-end bg-white p-2 rounded-md">
                        <p>Kembali</p>
                        <p className="text-xl font-bold">
                            {totalBayar <= bayar ? (
                                <span className="text-green-500">
                                    Rp.
                                    {bayar - totalBayar}
                                </span>
                            ) : (
                                <span className="text-gray-500">
                                    Bayar Sek!
                                    {/* -{totalBayar - bayar} */}
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FormInputPenjualan;
