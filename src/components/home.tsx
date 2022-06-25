
/** @jsxImportSource @emotion/react */
import { MutableRefObject, useEffect, useRef } from "react";
import tw from "twin.macro";
import useOnScreen from "../hooks/useOnScreen";
interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const Home = ({setActiveTab}: Props) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if(onScreen) {
      setActiveTab('Home');
    }
  }, [onScreen]);
  return (
    <div tw='bg-cover-img bg-no-repeat bg-cover bg-cover-pos py-24 md:py-40 flex' id='home'>
        <div tw='pt-14 mx-auto ml-8 sm:ml-32' ref={ref}>
            <span tw='mb-3 text-xs md:text-base text-third
             uppercase tracking-home-spacing'>Welcome to my world</span>
            <h1 tw='text-white text-4xl md:text-[54px] leading-10 md:leading-[68px] font-black mb-5'>Hi, I'm Omar Hsouna <br/> <div tw='text-secondary'>JS Developer.</div></h1>
            <h2 tw='text-3xl md:text-[54px] text-white font-bold'> based in Tunisia.</h2>
            </div>
    </div>
  )
}

export default Home;