import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const FormInputPelanggan = (props) => {
    const { pelanggan } = props
    const [idPelanggan, setIdPelanggan] = useState(pelanggan.reduce((prev, current) => (current.id_pelanggan > prev ? current.id_pelanggan + 1 : prev), 0));
    const [namaPelanggan, setNamaPelanggan] = useState("");
    const [alamat, setAlamat] = useState("");
    const [nomorTelepon, setNomorTelepon] = useState(0);
    const [notif, setNotif] = useState(false);

    const handelSubmit = () => {
        if (
            !idPelanggan ||
            !namaPelanggan ||
            !alamat ||
            !nomorTelepon
        ) {
            setNotif(false);
            return;
        }

        const data = {
            idPelanggan,
            namaPelanggan,
            alamat,
            nomorTelepon,
        };
        setNotif(true);
        Inertia.post("/admin/pelanggan", data);
    };

    return (
        <div>
            <div className="mb-2">
                <p className="text-center font-bold">Input Pelanggan</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg mb-2 ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">ID Pelanggan</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Pelanggan ID"
                                name="id_pelanggan"
                                value={idPelanggan}
                                onChange={(idPelanggan) =>
                                    setIdPelanggan(idPelanggan.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Nama Pelanggan</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Nama Pelanggan"
                                name="nama_pelanggan"
                                value={namaPelanggan}
                                onChange={(namaPelanggan) =>
                                    setNamaPelanggan(namaPelanggan.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>

                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Alamat</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Alamat"
                                name="alamat"
                                value={alamat}
                                onChange={(alamat) =>
                                    setAlamat(alamat.target.value)
                                }
                                className="input input-bordered w-full "
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">No telepon</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Nomor Telepon"
                                name="nomor_telepon"
                                value={nomorTelepon}
                                onChange={(nomorTelepon) =>
                                    setNomorTelepon(nomorTelepon.target.value)
                                }
                                className="input input-bordered w-full "
                                required
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
export default FormInputPelanggan;
