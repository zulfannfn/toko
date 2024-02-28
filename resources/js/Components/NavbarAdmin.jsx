import { Link } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { FaShopify } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const NavbarAdmin = ({ user }) => {
    return (
        <div className="navbar px-6 mb-3 ">
            <div className="navbar-start">
                <Link
                    href={route("admin/dashboard")}
                    className="btn btn-ghost text-xl"
                >
                    <FaShopify />
                    ECOMATE SHOP
                </Link>
            </div>
            <div className="navbar-center ">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
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
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className=" navbar-end">
                <ul className="menu menu-sm bg-slate-50 lg:menu-horizontal rounded-box">
                    <li>
                        <a>
                            <FaCartShopping />
                            {user ? (
                                <div className="badge p-2">{user.name}</div>
                            ) : (
                                <div>Null</div>
                            )}
                            <span className="badge badge-xs badge-info"></span>
                        </a>
                    </li>
                </ul>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Dropdown.Link
                                href={route("admin.profile.edit")}
                                className="justify-between flex flex-row"
                            >
                                <p>Profile</p>
                                {user ? (
                                    <div className="badge">{user.name}</div>
                                ) : (
                                    <div>Null</div>
                                )}
                            </Dropdown.Link>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <Link
                                href={route("admin.logout")}
                                as="button"
                                method="post"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarAdmin;
