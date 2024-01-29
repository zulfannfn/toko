const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 font-clash">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Product</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu</a>
                                    </li>
                                    <li>
                                        <a>Submenu</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>About</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">ECOMATE</a>
                </div>
                <div className="navbar-center hidden lg:flex font-medium">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu</a>
                                    </li>
                                    <li>
                                        <a>Submenu</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end text-sm">
                    <a className="py-2 px-6 bg-white text-black rounded-full font-medium">
                        Login
                    </a>
                    <a className="py-2 px-6 bg-black text-white rounded-full font-medium">
                        Sign Up
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
