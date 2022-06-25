/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {  MutableRefObject, useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import useOnScreen from "../../../hooks/useOnScreen";
import Icon from "../atoms/icon";
import LinkIcon from "../atoms/linkIcon";
import Tab from "../atoms/tab";
const Nav =styled.nav(({ isOpen }: { isOpen?: boolean }) => [
  tw`flex md:items-center flex-col md:flex-row h-screen  md:h-full md:ml-12 md:space-x-7 fixed z-10 md:relative top-0 py-14 md:p-0 px-5 w-[80vw] md:w-auto right-[-80vw] md:right-0 bg-primary md:bg-transparent duration-700 ease-out`, // Add base styles first
  isOpen &&
    tw`right-0`,
]);
const styleWrapper =(headerIsTransparent:boolean)=> ([
  tw`px-8 py-2.5 flex justify-between items-center fixed z-50 bg-primary text-white w-full duration-300`, 
  headerIsTransparent &&
    tw`bg-transparent py-4 absolute`,
]);
interface Props {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({activeTab, setActiveTab, tabs}:Props) => {

  const handleactiveTab = (tab:string) =>  setActiveTab(tab);
  const [isOpen, setIsOpen] = useState(false);
  const [headerIsTransparent, setHeaderIsTransparent] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const firstRender = useRef(true);
  const isIntersecting = useOnScreen(ref,'80px');

useEffect(()=>{
  if (firstRender.current) {
    firstRender.current = false;
    return;
  }
  if(headerIsTransparent !== isIntersecting){
    setHeaderIsTransparent(isIntersecting);
  }
  
},[isIntersecting]);
  return (
    <div ref={ref}>
    <header css={styleWrapper(headerIsTransparent)} >
      <div tw="flex items-center" >
        <img src="assets/images/logo.png" tw="h-12" alt="logo" />
        <Nav isOpen={isOpen}>
          { tabs.map(tab =>( <Tab href={`#${tab.toLocaleLowerCase()}`} key={tab} isActive={activeTab===tab} onClick={()=>handleactiveTab(tab)} >
            {tab}</Tab>))   
      }
        <span tw="absolute top-3 right-8 text-3xl cursor-pointer md:hidden" onClick={()=>setIsOpen(false)}>
          <Icon name="Close" />
        </span>
        </Nav>
      </div>
      <div tw="flex items-center justify-between space-x-2">
        <nav tw="flex items-center justify-between space-x-1">
            <LinkIcon link='#' Icon={ <Icon name='Facebook' />}/>
            <LinkIcon link='#' Icon={ <Icon name='LinkedIn' />}/>
            <LinkIcon link='#' Icon={  <Icon name='Instagram' />}/>
            <LinkIcon link='#' Icon={  <Icon name='Twitter' />}/>
        </nav>
        <span tw="cursor-pointer text-3xl hover:text-secondary flex justify-center items-center md:hidden" onClick={()=>setIsOpen(true)}>
        <Icon name='Hamburger' />
        </span>
      </div>
    </header>
    </div>
  );
};

export default Header;
