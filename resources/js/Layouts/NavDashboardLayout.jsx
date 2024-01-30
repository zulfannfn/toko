import { Link } from "@inertiajs/react";

export default function NavDashboardLayout({ children }) {
    return (
        <div className="flex flex-row p-6">
            <div>
                <ul className="menu bg-base-200 w-56 rounded-box">
                    <li>
                        <Link href={route("admin/dashboard")}>Dashboard</Link>
                    </li>
                    <li>
                        <details open>
                            <summary>Product</summary>
                            <ul>
                                <li>
                                    <Link href={route("admin.product")}>
                                        Kelola Product
                                    </Link>
                                </li>
                                <li>
                                    <a>Input Product</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details open>
                            <summary>Pesanan Offline</summary>
                            <ul>
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
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
                    <li>
                        <a>Pelanggan</a>
                    </li>
                    <li>
                        <a>Pesanan Selesai</a>
                    </li>
                </ul>
            </div>
            <div className="pl-4 w-full">{children}</div>
        </div>
    );
}
