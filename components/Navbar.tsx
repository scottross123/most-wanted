import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";
import fbi from "../assets/images/fbi.webp"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={fbi.src} />
                <h1><Link href="/">FBI&apos;s Most Wanted</Link></h1>
            </div>
            <ul className={styles.links}>
                <li className={styles.first}><Link href="/art-crimes">Art Crimes</Link></li>
                <li><Link href="/wanted">Most Wanted</Link></li>
                <li><a href="https://github.com/scottross123/most-wanted">GitHub Repo</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;