import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const FormInputPenjualan = (props) => {
    const { penjualan, pelanggan, produk } = props;
    const [idPenjualan, setIdPenjualan] = useState( penjualan.reduce((prev, current) => (current.id_penjualan > prev ? current.id_penjualan + 1 : prev), 0)
        );
    const [idPelanggan, setIdPelanggan] = useState(0);
    const [tanggalPenjualan, setTanggalPenjualan] = useState("");
    const [totalHarga, setTotalHarga] = useState(0);
    const [notif, setNotif] = useState(false);

    const handelSubmit = () => {
        if (!idPenjualan || !idPelanggan || !tanggalPenjualan || !totalHarga) {
            setNotif(false);
            return;
        }

        const data = {
            idPenjualan,
            idPelanggan,
            tanggalPenjualan,
            totalHarga,
        };
        setNotif(true);
        Inertia.post("/admin/penjualan", data);
    };

    console.log(props);

    return (
        <div>
            <div className="mb-2">
                <p>Input Penjualan</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg mb-2 ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            placeholder="Penjualan ID"
                            name="id_penjualan"
                            value={idPenjualan}
                            onChange={(e) => setIdPenjualan(e.target.value)}
                            className="input input-bordered w-full "
                            required
                        />
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
                    </div>
                    <div className="flex flex-col gap-2 w-full">
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
                        <input
                            type="text"
                            placeholder="Total Harga"
                            name="total_harga"
                            value={totalHarga}
                            onChange={(totalHarga) =>
                                setTotalHarga(totalHarga.target.value)
                            }
                            className="input input-bordered w-full "
                            required
                        />
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
