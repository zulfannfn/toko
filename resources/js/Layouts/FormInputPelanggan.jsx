import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const FormInputPelanggan = (props) => {
    const [idPelanggan, setIdPelanggan] = useState(0);
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
                <p>Input Product</p>
            </div>
            <form className="flex flex-col gap-2 p-4 rounded-lg mb-2 ">
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 w-full">

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

                    </div>
                    <div className="flex flex-col gap-2 w-full">
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