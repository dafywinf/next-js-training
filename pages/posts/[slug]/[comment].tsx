import { useRouter } from "next/router";


export default function Comment() {
    const router = useRouter();
    const query = router.query;

    return (
        <>
            <div>Post: {query.slug}, Comment: {query.comment}</div>
        </>
    )
}