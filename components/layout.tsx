import React from "react";

import styles from './layout.module.css';

export default function Layout(params: { children: any }) {
    return (
        <div className={styles.container}>
            <h1>Sitting in a Layout</h1>
            {params.children}
            <h2>Sitting in a Layout</h2>
        </div>
    )
}