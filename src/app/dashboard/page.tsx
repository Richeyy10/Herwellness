import Footer from "@/src/components/footer";
import Navbar from "@/src/components/dashboard/navbar";
import Sidebar from "@/src/components/dashboard/sidebar";
import DashBlog from "@/src/components/dashboard/dashblog";
import DashEvent from "@/src/components/dashboard/dashevent";

export default function Dashboard() {
    return (
        <>
            <div className="justify-between">
                <DashBlog />
                <DashEvent />
            </div>
        </>
    );
}
