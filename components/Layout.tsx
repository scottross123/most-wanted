import Meta from "./Meta";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

type LayoutProps = {
    title: string,
    children: JSX.Element,
}

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <>
            <Meta title={title} />
            <TopNavbar />
            <main className="min-h-screen p-16 flex flex-col justify-items-center items-center">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;