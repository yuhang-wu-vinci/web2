interface FooterProps{
    title : string
}

const Footer= (props : FooterProps)=>{
    return(
        <footer>
            <h1>{props.title}</h1>
        </footer>
    )
}
export default Footer