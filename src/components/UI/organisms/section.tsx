/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { MutableRefObject, useEffect, useRef } from "react";
import useOnScreen from "../../../hooks/useOnScreen";
import GridItem from "../atoms/gridItem";
import Paragraph from "../atoms/paragraph";
import SubTitle from "../atoms/subTitle";
import { CardProps } from "../../../types";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  subTitle: string;
  description: string;
  items: CardProps[];
  Card: React.FC<CardProps>;
  bgColor: "black" | "primary";
  isCardBlog?: boolean;
}
const styleWrapper = (bgColor: "black" | "primary") => [
  bgColor === "black" ? tw`bg-black` : tw`bg-primary`,
];

function Section({
  setActiveTab,
  activeTab,
  subTitle,
  description,
  Card,
  items,
  bgColor,
  isCardBlog,
}: Props) {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const onScreen = useOnScreen(ref, "100px");
  useEffect(() => {
    if (onScreen) {
      setActiveTab(activeTab);
    }
  }, [onScreen]);
  return (
    <div css={styleWrapper(bgColor)} id={activeTab.toLocaleLowerCase()}>
      <div tw="max-w-[450px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1260px] md:w-full mx-auto py-16 md:py-32 px-3.5">
        <div tw="text-center">
          <SubTitle title={subTitle} />
          <Paragraph text={description} />
          <div ref={ref} tw="flex flex-wrap items-center">
            {items.map((item) => (
              <GridItem key={item.id}>
                <Card data={{ ...item, isCardBlog }} />
              </GridItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Section.defaultProps = { isCardBlog: false };
export default Section;
