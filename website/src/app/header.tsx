"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.navBrand}>
          Julian Schumacher
        </Link>
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <ul
          id="site-menu"
          className={`${styles.navList} ${isOpen ? styles.navOpen : ""}`}
        >
          <li>
            <Link href="/work/">Work</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/legal/privacy/">Privacy</Link>
          </li>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
          <li>
            <Link href="/support/">Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
