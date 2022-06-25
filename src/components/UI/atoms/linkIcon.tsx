/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { css } from "@emotion/react";
interface LinkIconProps {
  link: string;
  Icon: React.ReactElement;
  withBorder?:boolean
}
const stylesLink=(withBorder?:boolean)=>([
  tw`w-8 rounded-full text-third  hover:(bg-secondary text-white translate-y-[-3px]) flex justify-center py-2 items-center transition-all duration-500`,
  withBorder && tw`text-third border-2 border-third hover:border-secondary w-[50px] h-[50px] rounded-full`
])
const LinkIcon = ({link, Icon, withBorder}:LinkIconProps) => {
  return (
    <a
    href={link}
    css={stylesLink(withBorder)}
  >
  {Icon}
  </a>
  )
}

export default LinkIcon;