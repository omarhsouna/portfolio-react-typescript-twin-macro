/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import useOnScreen from "hooks/useOnScreen";
import SubTitle from "components/UI/atoms/subTitle";
import Paragraph from "components/UI/atoms/paragraph";
import Tab from "components/UI/atoms/tab";

const tabs = [
  "Main skills",
  "Awards",
  "Experience",
  "Education & Certification",
];
const TabContents = [
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believab 2222",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.333333333333333",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.44444444444",
];
const ContainerAbout = tw.div`py-16 md:py-32 px-3.5 mx-auto max-w-xs md:max-w-7xl flex flex-col md:flex-row md:items-center`;
interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
function About({ setActiveTab }: Props) {
  const [activeTab, setactiveTab] = useState(0);
  const handleactiveTab = (tab: number) => setactiveTab(tab);
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const onScreen = useOnScreen(ref);
  useEffect(() => {
    if (onScreen) {
      setActiveTab("About");
    }
  }, [onScreen]);

  return (
    <div tw="bg-primary" id="about">
      <ContainerAbout>
        <img
          tw="rounded-lg max-w-full mx-6"
          src="assets/images/about.jpg"
          alt=""
        />

        <div tw="pt-10">
          <SubTitle title="About Me" />
          <Paragraph
            text="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form,
            by injected humour, or randomised words which dont look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum"
          />

          <div
            ref={ref}
            css={{
              "a ~ a": { marginRight: "30px" },
              "a:first-child": { marginRight: "30px" },
            }}
            tw="flex flex-wrap mb-5"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                isActive={activeTab === index}
                onClick={() => handleactiveTab(index)}
                isAboutMe
              >
                {tab}
              </Tab>
            ))}
          </div>
          <p tw="text-base leading-7 font-light text-third">
            {TabContents[activeTab]}
          </p>
        </div>
      </ContainerAbout>
    </div>
  );
}

export default About;
