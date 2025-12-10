interface HeaderProps{
    text : string
    image: string;
    children: React.ReactNode;
}

const Header =(props:HeaderProps)=>{
    return(
        <header>
            {props.text}
            <img src={props.image}/>
            <div>{props.children}</div>
        </header>
    )
}

export default Header