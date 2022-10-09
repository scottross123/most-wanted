import Meta from "./Meta";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";

type LayoutProps = {
    title: string,
    children: JSX.Element,
    isLanding?: boolean,
}

const Layout = (props: LayoutProps) => {
    const { title, isLanding, children } = props;
    const padding = isLanding ? "" : "p-16"; // TODO refactor

    return (
        <>
            <Meta title={title} />
            <div className="min-h-screen flex flex-col">
                <TopNavbar />
                <main className={`${padding} flex flex-col justify-items-center items-center`}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;