/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import tw from "twin.macro";
const Tab = styled.a(({ isActive, isAboutMe }: { isActive?: boolean, isAboutMe?:boolean }) => [
    tw`md:h-full relative py-4 cursor-pointer after:absolute after:h-[3px] after:left-0 after:bottom-0 duration-700 ease-out`, // Add base styles first
    isAboutMe && tw `after:bg-white after:w-[30px] text-white`,
    isActive &&
      tw`after:w-full after:bg-secondary  text-secondary after:duration-700 after:ease-out`,
  ]);

export default Tab