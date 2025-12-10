interface FooterProps {
  text: string;
  image: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) =>{
  return(
    <footer>
      {props.text}
      <img src={props.image}/>
      <div>{props.children}</div>
    </footer>
  )
}

export default Footer;
