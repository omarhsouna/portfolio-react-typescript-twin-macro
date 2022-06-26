/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { css } from "@emotion/react";
import { CardProps } from "../../../types";
import Button from "../atoms/button";

const stylesContentWrapper = (isCardBlog: boolean) => [
  tw`flex flex-col z-20 mt-auto relative`,
  isCardBlog ? tw`text-left pl-5` : tw`items-center w-full`,
];
const stylesButton = (isCardBlog: boolean) => [
  isCardBlog ? tw`align-self[center] -mb-12 opacity-0` : tw`inline-block mb-7`,
];
function CardWithBackgroundImage({ data }: CardProps) {
  const styles = css`
    ${tw`w-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] cursor-pointer flex`}
    background-image:url(${data.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    position: relative;
    transition: transform 0.28s ease, -webkit-transform 0.28s ease;
    :hover::before {
      content: "";
      ${!data.isCardBlog && "transform: scale(1.08) translateZ(0);"}
      background-image:linear-gradient(#f6004c 10%,#000);
      opacity: 0.8;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
    }
    ${data.isCardBlog && "&:hover button { margin-bottom: 1.75rem; opacity:1;}"}
  `;
  return (
    <div css={[styles]}>
      <div css={stylesContentWrapper(data.isCardBlog)}>
        <p tw="text-sm text-third font-normal mb-4">{data.title}</p>
        <h4>
          <a
            href="test"
            tw="text-white text-2xl leading-9 font-semibold mb-[50px] inline-block"
          >
            {data.description}
          </a>
        </h4>
        <Button
          css={stylesButton(data.isCardBlog)}
          variant={data.isCardBlog ? "secondary" : "grey"}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export default CardWithBackgroundImage;

// <Button variant={data.isCardBlog ? 'secondary' :'grey'}>View Details</Button>
