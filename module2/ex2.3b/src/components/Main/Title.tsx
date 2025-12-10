interface Title {
    title : string
}

const Title =(props : Title)=>{
    return (
    <h1>{props.title}</h1>
    )
}

export default Title