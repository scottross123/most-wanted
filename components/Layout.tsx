import Meta from "./Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    title: string,
    children: JSX.Element,
}

const Layout = ({ title, children }: LayoutProps) => {
    return (
        <>
            <Meta title={title} />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;