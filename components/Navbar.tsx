import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href="/">FBI&apos;s Most Wanted</Link>
            </h1>
            <ul className={styles.links}>
                <li className={styles.first}><Link href="/art-crimes">Art Crimes</Link></li>
                <li><Link href="/wanted">Most Wanted</Link></li>
                <li><a href="https://github.com/scottross123/most-wanted">GitHub Repo</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;