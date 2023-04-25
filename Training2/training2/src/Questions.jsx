export default function Questions(props){
    return (
        <>
        <p>Question {props.index}</p>
        <h1>{props.q}</h1>
        <p>{props.a}</p>
        </>
    )
}