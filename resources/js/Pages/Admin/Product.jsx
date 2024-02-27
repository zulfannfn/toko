import { Head, Link } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import FormInputProduct from "@/Layouts/FormInputProduct";
import { IoSearch } from "react-icons/io5";

export default function Product(props) {
    const { produk } = props;
    return (
        <div>
            <Head title="Product" />
            <NavbarAdmin />
            <NavDashboardLayout>
                <div className="w-full bg-gray-50 p-4 rounded-xl">
                    <div className="flex flex-col p-2 gap-2 mb-4">
                        <div>
                            <p className="text-lg font-semibold text-center">
                                Data Product
                            </p>
                        </div>
                        <div className="flex flex-row justify-center gap-4">
                            <div className="">
                                {/* The button to open modal */}
                                <label
                                    htmlFor="my_modal_7"
                                    className="btn btn-primary"
                                >
                                    Input Produk
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
                                        <FormInputProduct produk={produk} />
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
                                    <input
                                        type="text"
                                        className="grow border-none outline-none block w-full border border-slate-300 rounded-md py-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-0 sm:text-sm"
                                        placeholder="Cari"
                                    />
                                    <IoSearch />
                                </label>
                            </div>
                        </div>
                    </div>

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
                                                <div>
                                                    {/* The button to open modal */}
                                                    <Link
                                                        htmlFor="my_modal_7"
                                                        href={route(
                                                            "admin.edit.product"
                                                        )}
                                                        as="button"
                                                        method="get"
                                                        data={{
                                                            id: data.produk_id,
                                                        }}
                                                    >
                                                        Edit
                                                    </Link>

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
                                                            <FormInputProduct
                                                                produk={produk}
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
