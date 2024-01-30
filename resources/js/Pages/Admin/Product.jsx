import { Head } from "@inertiajs/react";
import NavbarAdmin from "@/Components/NavbarAdmin";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";

export default function Product(props) {
    const { auth, produk } = props;
    return (
        <div>
            <Head title="Product" />
            <NavbarAdmin user={auth.user} />
            <NavDashboardLayout>
                <div className="w-full bg-gray-50 p-4 rounded-xl">
                    <div>
                        <p>Data Product</p>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
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
                                        console.log(data);
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
                </div>
            </NavDashboardLayout>
        </div>
    );
}
