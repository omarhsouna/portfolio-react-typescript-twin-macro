/** @jsxImportSource @emotion/react */
import "twin.macro";

interface Props {
  text: string;
}
function Paragraph({ text }: Props) {
  return (
    <p tw="text-base md:text-lg leading-8 font-light text-third mb-7">{text}</p>
  );
}

export default Paragraph;
