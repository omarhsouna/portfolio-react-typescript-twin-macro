/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
interface Props {
    text:string ;
}
const Paragraph = ({text}:Props) => {
  return (
    <p tw='text-base md:text-lg leading-7 leading-8 font-light text-third mb-7'>
        {text}
       </p>
  )
}

export default Paragraph;