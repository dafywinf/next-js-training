import { useState } from "react"

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";


function Header(params: { title: string }) {
    return (<h1>{params.title ? params.title : 'Undefined'}</h1>)
}

export default function Like() {
    const names = ['Dafydd', 'Richard', 'Cheryl'];
    const [likes, setLikes] = useState(0);

    //Note: Bad practice as likes remains at component refresh time
    //Need to review
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            <Head>
                <title>This is the Title of the file</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />Í
            <Header title="Testing" />
            <ul>
                {names.map((name) => {
                    return <li key={name}>{name}</li>
                })}
                <li>Here</li>
            </ul>
            <button onClick={handleClick}>Clicked Me ${likes} Time(s)</button>
            <Image alt="Grid" src="/images/profile.jpg" height={1044} width={1044} />

            <Link href="/site-map">SiteMap</Link>
        </div>
    );


}