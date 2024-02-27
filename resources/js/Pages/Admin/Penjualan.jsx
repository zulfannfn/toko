import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import FormInputPenjualan from "@/Layouts/FormInputPenjualan";
import { IoSearch } from "react-icons/io5";


export default function Pelanggan(props) {
    const { penjualan, pelanggan, produk } = props;
    return (
        <div>
            <Head title="Penjualan" />
            <NavbarAdmin />
            <NavDashboardLayout>
                <div className="w-full px-4 rounded-xl">
                    <div className="flex flex-row mb-4">
                        <div className="w-[50%]">
                            <FormInputPenjualan
                                pelanggan={pelanggan}
                                penjualan={penjualan}
                                produk={produk}
                            />
                        </div>
                        <div>
                            Right
                        </div>
                    </div>

                    <div className="overflow-x-auto bg-slate-50 py-3 rounded-md">
                        <div>
                            <div>
                                <div className="flex flex-row justify-between items-center px-4 py-2 gap-4">
                                    <div className="">
                                        {/* The button to open modal */}
                                        <label
                                            htmlFor="my_modal_7"
                                            className="btn hover:btn-primary"
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
                                                {/* <FormInputPelanggan pelanggan={pelanggan} /> */}
                                            </div>
                                            <label
                                                className="modal-backdrop"
                                                htmlFor="my_modal_7"
                                            >
                                                Close
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-row w-[40%]">
                                        <label className="input input-bordered flex items-center gap-2 w-full">
                                            <input type="text" className="grow border-none outline-none block w-full border border-slate-300 rounded-md py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0 sm:text-sm" placeholder="Cari" />
                                            <IoSearch />
                                        </label>
                                    </div>
                                    <div>
                                        <p className="px-4 font-bold">Data Penjualan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID Penjualan</th>
                                    <th>ID Pelanggan</th>
                                    <th>ID Produk</th>
                                    <th>Jumlah</th>
                                    <th>Tanggal Jual</th>
                                    <th>Total Harga</th>
                                    <th>Detail</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {penjualan.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.id_penjualan}</td>
                                            <td>{data.id_pelanggan}</td>
                                            <td>{data.produk_id}</td>
                                            <td>{data.jumlah}</td>
                                            <td>{data.tanggal_penjualan}</td>
                                            <td>{data.total_harga}</td>
                                            <td>
                                                <button className="btn btn-sm btn-neutral text-white">
                                                    Detail
                                                </button>
                                            </td>

                                            <td>
                                                <button className="btn btn-sm btn-error text-white">
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </NavDashboardLayout>
        </div>
    );
}
