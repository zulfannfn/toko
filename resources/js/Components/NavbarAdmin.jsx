import { Link } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { FaShopify } from "react-icons/fa";

const NavbarAdmin = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link
                    href={route("admin/dashboard")}
                    className="btn btn-ghost text-xl"
                >
                    <FaShopify />
                    ECOMATE SHOP
                </Link>
            </div>
            <div className="flex-none gap-2">
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
