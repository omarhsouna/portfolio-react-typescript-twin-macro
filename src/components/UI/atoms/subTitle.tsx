/** @jsxImportSource @emotion/react */

interface Props {
  title: string;
}
function SubTitle({ title }: Props) {
  return <h2 tw="text-6xl md:font-bold text-white mb-2">{title}</h2>;
}

export default SubTitle;
