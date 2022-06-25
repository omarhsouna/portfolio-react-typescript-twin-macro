/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
interface Props {
    title: string;
}
const SubTitle = ({title}: Props) => {
  return (
    <h2 tw='text-4xl text-6xl md:font-bold text-white mb-2'>{title}</h2>
  )
}

export default SubTitle;