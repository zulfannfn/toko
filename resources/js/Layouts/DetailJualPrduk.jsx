import { BsCalendar2Date } from "react-icons/bs";
import PrintButton from "@/Components/PrintButton";



const DetailjualProduk = (props) => {
    const {
        idPenjualan,
        idPelanggan,
        namaPelanggan,
        tanggalPenjualan,
        productsToAdd,
        bayar,
        totalBayar,
    } =props
    return(
        <div className="w-full px-4 rounded-xl print-nota" >
                <p className="py-2 text-center font-semibold">
                    Nota Pembelian Produk
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
                    <p className="flex flex-row items-center gap-2">
                        <span className="text-slate-500">
                            <BsCalendar2Date />
                        </span>{" "}
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
                            <div className="input input-bordered outline-none border-none w-full max-w-xs flex flex-row items-center">
                                <span>Rp.</span>
                                <input
                                    type="text"
                                    placeholder="Bayar"
                                    name="bayar"
                                    value={bayar}
                                    className="input input-bordered w-full outline-none border-none"
                                    readOnly
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <div>
                            <PrintButton />
                        </div>
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                <thead>
                                    <tr>
                                        <th><p>Total Pembayaran</p></th>
                                        <th className="text-end"><p>Kembali</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><p className="text-xl font-bold text-red-500">
                                            Rp.{totalBayar}
                                        </p></td>
                                        <td><p className="text-xl font-bold">
                                            {totalBayar < bayar ? (
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
                                        </p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default DetailjualProduk