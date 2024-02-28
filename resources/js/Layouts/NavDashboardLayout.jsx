import { Link } from "@inertiajs/react";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { RiFileList2Fill } from "react-icons/ri";
import { MdSell } from "react-icons/md";




export default function NavDashboardLayout({ children }) {
    return (
        <div className="flex flex-row px-6 ">
            <div>
                <ul className="menu bg-slate-50 w-56 rounded-box font-semibold">
                    <li>
                        <Link href={route("admin/dashboard")}>
                            <MdSpaceDashboard />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href={route("admin.product")}>
                            <IoMdCart />
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link href={route("admin.pelanggan")}>
                            <FaUser />
                            Pelanggan
                        </Link>
                    </li>
                    <li>
                        <Link href={route("admin.laporan")}>
                            <RiFileList2Fill />
                            Laporan
                        </Link>
                    </li>
                    <li>
                        <details open>
                            <summary>
                                <GrTransaction />
                                Transaksi
                            </summary>
                            <ul>
                                <li>
                                    <Link href={route("admin.penjualan")}>
                                        <MdSell />
                                        Penjualan
                                    </Link>
                                </li>
                                <li>
                                    <a>Pembelian/Stock</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Pesanan Online</summary>
                            <ul>
                                <li>
                                    <a>Pesanan Masuk</a>
                                </li>
                                <li>
                                    <a>Konfirmasi Pesanan</a>
                                </li>
                                <li>
                                    <a>Kemas Pesanan</a>
                                </li>
                                <li>
                                    <a>Kirim Pesanan</a>
                                </li>
                                <li>
                                    <a>Pesanan Dalam Perjalanan</a>
                                </li>
                                <li>
                                    <a>Pesanan Selesai</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="pl-4 w-full">{children}</div>
        </div>
    );
}
