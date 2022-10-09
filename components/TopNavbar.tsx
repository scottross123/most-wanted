import {Dropdown, Navbar, Button} from "react-daisyui";
import Image from "next/image";
import fbi from "../assets/images/fbi.webp";
import Link from "next/link";

const TopNavbar = () => {
    const linkStyle = "normal-case text-lg"

    return (
        <Navbar className="bg-base-100 border-b-2 border-b-base-200 sticky top-0 z-50 h-16">
            <Navbar.Start>
                <Image
                    width={50}
                    height={50}
                    src={fbi.src}
                    alt="fbi"
                />
                <h1 className="w-fit ml-4 text-2xl"><Link href="/">FBI&apos;s Most Wanted</Link></h1>
            </Navbar.Start>
            <Navbar.End>
                    <Button className={linkStyle} href="/art-crimes" color="ghost">Art Crimes</Button>
                    <Button className={linkStyle} href="/wanted" color="ghost">Wanted Persons</Button>
                    <Dropdown horizontal="center" vertical="end">

                        <Button color="ghost" shape="circle" tabIndex={0}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </Button>

                        <Dropdown.Menu tabIndex={0} className=" w-52 border p-2">
                            <Dropdown.Item><a href="https://github.com/scottross123/most-wanted" target="_blank" rel="noreferrer">View Repo</a></Dropdown.Item>
                            <Dropdown.Item><a href="https://github.com/scottross123/most-wanted/issues/new" target="_blank" rel="noreferrer">Raise an Issue</a></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </Navbar.End>
        </Navbar>
    )
}

export default TopNavbar;