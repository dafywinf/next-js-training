import Link from "next/link";
import { useRouter } from "next/router"

function getPosts() {
    const posts = [{ id: 0, title: 'Title 0' }, { id: 1, title: 'Title 1' }, { id: 2, title: 'Title 2' }]
    return posts;
}


export default function Post(props: { post: {title: string}; posts: any[] }) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <div><h1>Posts:- {props.post.title}</h1></div>
            
            <ul>
                {
                    props.posts.map((post) => {
                        return (
                            <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

//This function is called at build time
export async function getStaticProps(context: any) {

    const posts = getPosts();

    console.log(context);
    console.log(context.params.slug);

    const result = {
        props: {
            posts: posts,
            post: posts[context.params.slug]
        }
    }

    console.log(result);

    return result;
}

export async function getStaticPaths() {
    const posts = getPosts();

    // Get the paths we want to pre-render
    const paths = posts.map((post) => {
        return {
            params:
                { slug: post.id.toString() }
        }
    });

    paths.forEach((path) => {
        console.log(`Creating static path slug: /posts/${path.params.slug}`);
    });

    //Fallback fales means other paths will 404
    return { paths: paths, fallback: false }
}