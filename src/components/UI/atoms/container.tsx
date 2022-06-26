/** @jsxImportSource @emotion/react */
import { MutableRefObject, useEffect, useRef } from "react";
import "twin.macro";
import useOnScreen from "../../../hooks/useOnScreen";

interface Props {
  children: React.ReactNode;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
}
function Container({ children, setActiveTab, activeTab }: Props) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const onScreen = useOnScreen(ref, "100px");
  useEffect(() => {
    if (onScreen) {
      setActiveTab(activeTab);
    }
  }, [onScreen]);
  return (
    <div tw="bg-primary" id={activeTab.toLocaleLowerCase()}>
      <div tw="max-w-[450px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1260px] md:w-full mx-auto py-16 md:py-32 px-3.5">{children}</div>
    </div>
  );
}

export default Container;
