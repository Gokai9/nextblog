type Props = {
    sty:string, text: string
}

function Button({sty, text}:Props) {
    return (
      <button className={sty}>{text}</button>
    )
  }
  
  export default Button