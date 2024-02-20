import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import FormInputPenjualan from "@/Layouts/FormInputPenjualan";

export default function Pelanggan(props) {
    const { penjualan, pelanggan, produk } = props;
    console.log(produk);
    return (
        <div>
            <Head title="Penjualan" />
            <NavbarAdmin />
            <NavDashboardLayout>
                <div className="w-full bg-gray-50 p-4 rounded-xl">
                    <div className="flex p-2 gap-2 flex-col mb-4">
                        <div>
                            <p className="text-lg font-semibold text-center">
                                Data Penjualan
                            </p>
                        </div>
                        <div>
                            {/* The button to open modal */}
                            <label
                                htmlFor="my_modal_7"
                                className="btn btn-sm btn-primary "
                            >
                                Input Penjualan
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
                                    <FormInputPenjualan
                                        pelanggan={pelanggan}
                                        penjualan={penjualan}
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

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID Penjualan</th>
                                    <th>ID Pelanggan</th>
                                    <th>Tanggal Jual</th>
                                    <th>Total Harga</th>
                                    <th>Detail</th>
                                    <th>Edit</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {penjualan.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.id_penjualan}</td>
                                            <td>{data.id_pelanggan}</td>
                                            <td>{data.tanggal_penjualan}</td>
                                            <td>{data.total_harga}</td>
                                            <td>
                                                <button className="btn btn-sm btn-neutral text-white">
                                                    Detail
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-info text-white">
                                                    Edit
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
