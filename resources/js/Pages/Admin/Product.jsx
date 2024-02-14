import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import FormInputProduct from "@/Layouts/FormInputProduct";

export default function Product(props) {
    const { produk } = props;
    return (
        <div>
            <Head title="Product" />
            <NavbarAdmin />
            <NavDashboardLayout>
                <div className="w-full bg-gray-50 p-4 rounded-xl">
                    <div className=" mb-4">
                        {/* The button to open modal */}
                        <label
                            htmlFor="my_modal_7"
                            className="btn btn-primary text-lg"
                        >
                            Input Produk
                        </label>

                        {/* Put this part before </body> tag */}
                        <input
                            type="checkbox"
                            id="my_modal_7"
                            className="modal-toggle"
                        />
                        <div className="modal backdrop-blur-sm " role="dialog">
                            <div className="modal-box w-11/12 max-w-5xl white">
                                <FormInputProduct value={props} />
                            </div>
                            <label
                                className="modal-backdrop"
                                htmlFor="my_modal_7"
                            >
                                Close
                            </label>
                        </div>
                    </div>

                    <p>Data Product</p>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Produk ID</th>
                                    <th>Nama Produk</th>
                                    <th>Harga</th>
                                    <th>Stok</th>
                                    <th>Kategori</th>
                                    <th>Ukuran</th>
                                    <th>Warna</th>
                                    <th>Deskripsi</th>
                                    <th>Edit</th>
                                    <th>Hapus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produk.map((data, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{data.produk_id}</td>
                                            <td>{data.nama_produk}</td>
                                            <td>{data.harga}</td>
                                            <td>{data.stock}</td>
                                            <td>{data.kategori}</td>
                                            <td>{data.ukuran}</td>
                                            <td>{data.warna}</td>
                                            <td>{data.deskripsi}</td>
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
