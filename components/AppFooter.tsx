import {Footer, Button, useTheme} from "react-daisyui";

const AppFooter = () => {
    const footerSectionStyle = "flex gap-4";

    return (
        <Footer className="p-8 bg-neutral text-neutral-content">
            <div className={footerSectionStyle}>
                <Footer.Title>Made with</Footer.Title>
                <p>Next.js, TailwindCSS, and DaisyUI.</p>
            </div>


            <div className={footerSectionStyle}>
                <Footer.Title>Links</Footer.Title>
                <a href="https://www.fbi.gov/" target="_blank" rel="noreferrer">FBI Site</a>
                <a href="https://api.fbi.gov/docs" target="_blank" rel="noreferrer">FBI API</a>
                <a href="https://github.com/scottross123" target="_blank" rel="noreferrer">My GitHub</a>
            </div>

            <div className={footerSectionStyle}>
                <Footer.Title className="hover:cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>Back to top</Footer.Title>
            </div>



            {/*
            <div className={footerSectionStyle}>
                <Footer.Title>Theme</Footer.Title>
                <p><Button onClick={handleClick} className="normal-case" size="xs" color="ghost">pick</Button></p>
            </div>
            */}
        </Footer>
    )
}

export default AppFooter;