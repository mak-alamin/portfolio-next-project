import Link from "next/link";
import React from "react";

import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
