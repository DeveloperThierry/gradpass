import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "GradPass. - Admin",
    description: "GradPass. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
