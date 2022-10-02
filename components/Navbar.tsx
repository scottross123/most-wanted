import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href="/">FBI&apos;s Most Wanted</Link>
            </h1>
            <ul className={styles.links}>
                <li><Link href="/art-crimes">Art Crimes</Link></li>
                <li>Most Wanted</li>
                <li>GitHub Repo</li>
            </ul>
        </nav>
    );
}

export default Navbar;