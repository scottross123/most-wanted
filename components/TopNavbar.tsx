import {Navbar} from "react-daisyui";
import Image from "next/image";
import fbi from "../assets/images/fbi.webp";
import Link from "next/link";

const TopNavbar = () => {
    return (
        <Navbar className="bg-base-100 border-b-4 border-b-base-200 sticky top-0 z-50">
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
                <ul className="flex gap-8">
                    <li><Link href="/art-crimes">Art Crimes</Link></li>
                    <li><Link href="/wanted">Most Wanted</Link></li>
                    <li><a href="https://github.com/scottross123/most-wanted">GitHub Repo</a></li>
                </ul>
            </Navbar.End>
        </Navbar>
    )
}

export default TopNavbar;