/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import CardWithBackgroundImage from "./UI/molecules/cardWithBackgroundImage";
import Section from "./UI/organisms/section";
interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const items = [
  {
    image: "/assets/images/portfolio-4.jpg",
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    image: "/assets/images/portfolio-4.jpg",
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    image: "/assets/images/portfolio-4.jpg",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    image: "/assets/images/portfolio-4.jpg",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    image: "/assets/images/portfolio-4.jpg",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    image: "/assets/images/about.jpg",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
const Portfolio = ({setActiveTab}: Props) => {
 
  return (
    <Section
    setActiveTab={setActiveTab}
    activeTab="Portfolio"
    subTitle="My Awesome Service"
    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    Card={CardWithBackgroundImage}
    items={items}
    bgColor='primary'
  ></Section>
  )
}

export default Portfolio;