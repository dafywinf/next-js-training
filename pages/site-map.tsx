import Link from "../src/components/Link";


export default function SiteMap() {

    const pageIds = [1, 2, 3, 4];

    return (
        <>
            <div>Site Map</div>
            <ul>
                <li>
                    <Link href="/about">Go to: /about.tsx</Link>
                </li>
                <li>
                    <Link href="/site-map">Go to: /site-map.tsx</Link>
                </li>
                {
                    pageIds.map((id) => {
                        return (
                            <li key={`${id}-post`}>
                                <Link href={`/posts/${id}`}>Go to: /posts/[id].tsx</Link>
                            </li>
                        )
                    })
                }

                {
                    pageIds.map((id) => {
                        return (
                            <li key={`${id}-post-comment`}>
                                <Link href={`/posts/${id}/comment`}>Go to: /posts/[id]/[comment].tsx</Link>
                            </li>
                        )
                    })
                }
                <li key="like"><Link href="/like">Like</Link></li>
            </ul>
        </>
    )

}