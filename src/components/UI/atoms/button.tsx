/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import styled from "@emotion/styled";

type Variants = "grey" | "secondary" | "fill";
const variants = {
  grey: tw`leading-6 h-10 px-6 hover:(bg-secondary border-secondary) border-2 border-borderButton`,
  secondary: tw`leading-6 h-10 px-6 text-white bg-transparent border-2 border-secondary hover:bg-secondary`,
  fill: tw`bg-secondary py-4 px-10 text-base font-medium tracking-[2px] uppercase hover:(bg-transparent text-secondary border-secondary border-2)`,
};
const Button = styled.button(() => [
  tw`rounded  transition-all duration-300 text-white  hover:translate-y-[-3px]`,
  ({ variant }: { variant: Variants }) => variants[variant],
]);

export default Button;
