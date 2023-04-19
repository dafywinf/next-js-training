import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <Link href="/">Home</Link>
            &nbsp;|&nbsp;
            <Link href="/site-map">Site Map</Link> 
            &nbsp;|&nbsp;
            <Link href="/about">About</Link>
            &nbsp;|&nbsp;
            <Link href="/theme">Theme</Link>
        </div>
    );
}