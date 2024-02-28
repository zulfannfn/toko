import PrintButton from "@/Components/PrintButton";
import { FaPrint } from "react-icons/fa";

const DetailPenjualanTanggal = (props) => {
    const { totalItems, totalHarga, tanggalAwal, tanggalAkhir, filteredData } =
        props;
    return (
        <div className="right w-full flex flex-col gap-2">
            <div className="flex flex-col bg-slate-50 py-2 px-4 rounded-lg">
                <div className="flex flex-row justify-between font-semibold items-center">
                    <p className="text-xl">Laporan penjualan pada tanggal</p>
                    <div className="flex flex-row items-center gap-3">
                        <p>
                            {tanggalAwal} - {tanggalAkhir}
                        </p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID Penjualan</th>
                            <th>ID Pelanggan</th>
                            <th>ID Produk</th>
                            <th>Jumlah</th>
                            <th>Tanggal</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index} className="hover">
                                <td>{item.id_penjualan}</td>
                                <td>{item.id_pelanggan}</td>
                                <td>{item.produk_id}</td>
                                <td>{item.jumlah}</td>
                                <td>{item.tanggal_penjualan}</td>
                                <td>{item.total_harga}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-row justify-between items-end">
                <div>
                    <PrintButton />
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead className="text-black">
                                <tr>
                                    <th>Total produk terjual</th>
                                    <th>Total Pendapatan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-lg">{totalItems}</td>
                                    <td className="text-lg">{totalHarga}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPenjualanTanggal;
