import Meta from "./Meta";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

type LayoutProps = {
    title: string,
    children: JSX.Element,
}

// TODO fix unnecassry scrollbar

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <>
            <Meta title={title} />
            <div className="min-h-screen">
                <TopNavbar />
                <main className="p-16 flex flex-col justify-items-center items-center">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;