/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { css } from "@emotion/react";
import Icon from "components/UI/atoms/icon";
import { CardProps } from "types";

const hoverStyles = css`
  & > svg {
    ${tw`mb-6 text-white text-[54px] font-normal`}
  }
  &:hover {
    ${tw`sm:bg-gradient-secondary cursor-pointer sm:text-white sm:translate-y-[-5px]`}
  }
  &:hover > :where(svg, p) {
    ${tw`sm:text-white`}
  }
`;
function CardSectionService({ data }: CardProps) {
  return (
    <div
      css={[
        tw`py-7 px-3.5 w-full text-left rounded-xl bg-gradient-secondary sm:bg-primary sm:bg-none cursor-pointer `,
        hoverStyles,
      ]}
    >
      <Icon name={data.iconName} />
      <h3 tw="text-white text-xl font-medium mb-6">{data.title}</h3>
      <p tw="text-white text-base leading-7 font-normal sm:text-third">
        {data.description}
      </p>
    </div>
  );
}

export default CardSectionService;
