import NavbarAdmin from "@/Components/NavbarAdmin";
import FormEditProduct from "@/Layouts/FormEditProduct";
import NavDashboardLayout from "@/Layouts/NavDashboardLayout";
import { Head } from "@inertiajs/react";

export default function ProductEdit(props) {
    const { auth, idproduk } = props;
    return (
        <div>
            <Head title="EditProduct" />
            <NavbarAdmin user={auth.user} />
            <NavDashboardLayout>
                <div>
                    <FormEditProduct produk={idproduk} />
                </div>
            </NavDashboardLayout>
        </div>
    );
}
