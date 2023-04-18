import { useState } from "react"


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
            <Header title="Testing" />
            <ul>
                {names.map((name) => {
                    return <li key={name}>{name}</li>
                })}
                <li>Here</li>
            </ul>
            <button onClick={handleClick}>Clicked Me ${likes} Time(s)</button>
        </div>
    );


}