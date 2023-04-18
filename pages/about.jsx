export default function About() {
    return (
        <div>About</div>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <>
            {page}
            <h2>Custom Layout</h2>
        </>

    )
}