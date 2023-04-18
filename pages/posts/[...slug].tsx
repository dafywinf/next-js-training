import { useRouter } from "next/router";

/**
 * Will catch things that are not of the form /posts/xxx or /posts/xxx/yyy e.g. /posts/xxxx/yyyy/zzz
 */
export default function PostCatchAll() {
    const router = useRouter();
    const slug = (router.query.slug as string[] || []);   

    return (
        <>
            <div>
                <h1>Catchall Slug: {slug.join('/')}</h1>
            </div>

        </>
    )
}