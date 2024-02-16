import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import FormInputPelanggan from "@/Layouts/FormInputPelanggan";

export default function Pelanggan(props) {
    const { pelanggan
    } = props
    console.log(props);
    return (
        <div>
            <Head title="Product" />
            <NavbarAdmin />
            <NavDashboardLayout>
            <div className="w-full bg-gray-50 p-4 rounded-xl">
                    <div className="flex flex-row justify-between items-center mb-4">
                        {/* The button to open modal */}
                        <label
                            htmlFor="my_modal_7"
                            className="btn btn-primary text-lg"
                        >
                            Input Pelanggan
                        </label>

                        {/* Put this part before </body> tag */}
                        <input
                            type="checkbox"
                            id="my_modal_7"
                            className="modal-toggle"
                        />
                        <div className="modal backdrop-blur-sm " role="dialog">
                            <div className="modal-box w-11/12 max-w-5xl white">
                                <FormInputPelanggan value={props} />
                            </div>
                            <label
                                className="modal-backdrop"
                                htmlFor="my_modal_7"
                            >
                                Close
                            </label>
                        </div>
                        <div className="p-6">
                            <p>Data Pelanggan</p>
                        </div>

                    </div>

                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID Pelanggan</th>
                                    <th>Nama Pelanggan</th>
                                    <th>Alamat</th>
                                    <th>No Telepon</th>
                                    <th>Edit</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pelanggan.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.id_pelanggan}</td>
                                            <td>{data.nama_pelanggan}</td>
                                            <td>{data.alamat}</td>
                                            <td>{data.nomor_telepon}</td>
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
    )
}