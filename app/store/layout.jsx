import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "GradPass. - Store Dashboard",
    description: "GradPass. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
