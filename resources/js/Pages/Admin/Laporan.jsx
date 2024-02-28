import { Head } from "@inertiajs/react"
import NavbarAdmin from "@/Components/NavbarAdmin"
import NavDashboardLayout from "@/Layouts/NavDashboardLayout"
import { TiShoppingCart } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";
import { useState } from "react";


export default function Laporan(props) {
    const { produk, pelanggan, penjualan, } = props

    const [tanggalAwal, setTanggalAwal] = useState("");
    const [tanggalAkhir, setTanggalAkhir] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [totalHarga, setTotalHarga] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const handleFilter = () => {
        if (!tanggalAwal || !tanggalAkhir) {
            alert("Tanggal awal dan tanggal akhir harus berformat YYYY-MM-DD");
            return;
        }

        const filteredData = penjualan.filter(item => {
            const tanggalPenjualan = new Date(item.tanggal_penjualan); // Ubah ke objek tanggal JavaScript
            const awal = new Date(tanggalAwal);
            const akhir = new Date(tanggalAkhir);
            return tanggalPenjualan >= awal && tanggalPenjualan <= akhir;
        });

        const totalHarga = filteredData.reduce((total, item) => {
            const harga = parseFloat(item.total_harga);
            return total + harga;
        }, 0);

        const totalItems = filteredData.reduce((total, item) => {
            const items = parseFloat(item.jumlah);
            return total + items;
        }, 0);

        setTotalItems(totalItems)
        setTotalHarga(totalHarga)
        setFilteredData(filteredData);
    };

    return (
        <div>
            <Head title="Pelanggan" />
            <NavbarAdmin />
            <NavDashboardLayout>
                <div className="flex flex-row gap-4">
                    <div className="left bg-slate-50 p-4 flex flex-col rounded-xl gap-2 w-[50%]">
                        <div>
                            <div className="stats shadow">
                                <div className="stat">
                                    <div className="stat-title">Produk Tersedia</div>
                                    <div className="stat-value flex flex-row gap-1"><TiShoppingCart />
                                        {produk.length
                                        }</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Banyak Pelanggan</div>
                                    <div className="stat-value flex flex-row gap-1"><FaUserCheck />
                                        {pelanggan.length
                                        }</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Total Terjual</div>
                                    <div className="stat-value flex flex-row gap-1"><BsCartCheckFill />

                                        {penjualan.length
                                        }</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                            </div>
                        </div>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="stat-title">Pendapatan</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title">New Users</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>
                    </div>

                    <div className="right w-[50%] flex flex-col gap-2">
                        <div className="stats bg-slate-100 text-primary-content">

                            <div className="stat text-black">
                                <div className="stat-title">Total Produk Terjual</div>
                                <div className="stat-value">{totalItems}</div>
                                <div className="stat-actions">
                                    <button className="btn btn-sm">Add funds</button>
                                </div>
                            </div>

                            <div className="stat text-black">
                                <div className="stat-title flex flex-row justify-between"><p>Total Pendapatan</p><p className="text-xl font-bold text-black px-2 py-1 bg-white rounded-lg">Laporan berdasarkan tanggal</p></div>
                                <div className="stat-value">{totalHarga}</div>
                                <div className="stat-actions flex flex-row w-full justify-between">
                                    <input type="date" placeholder="Type here" className="input input-sm input-bordered max-w-xs select-bordered join-item" onChange={(e) => setTanggalAwal(e.target.value)} />
                                    <input type="date" placeholder="Type here" className="input input-sm input-bordered max-w-xs select-bordered join-item" onChange={(e) => setTanggalAkhir(e.target.value)} />
                                    <button className="btn btn-sm join-item" onClick={handleFilter}>Cari</button>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-slate-50 py-2 px-6 rounded-lg">
                            <div className="flex flex-row justify-between font-semibold items-center">
                                <p>Penjualan pada tanggal</p>
                                <div className="flex flex-row items-center gap-3">
                                    <p>{tanggalAwal} - {tanggalAkhir}</p>
                                    <button className="btn btn-sm join-item"><FaPrint />
                                    </button>

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
                                        <th>Total Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id_penjualan}</td>
                                            <td>{item.id_pelanggan}</td>
                                            <td>{item.produk_id}</td>
                                            <td>{item.jumlah}</td>
                                            <td>{item.total_harga}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </NavDashboardLayout>
        </div>
    )
} 