/** @jsxImportSource @emotion/react */
import CardWithBackgroundImage from "components/UI/molecules/cardWithBackgroundImage";
import Section from "components/UI/organisms/section";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const items = [
  {
    id: "1",
    image: "/assets/images/portfolio-4.jpg",
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "2",
    image: "/assets/images/portfolio-4.jpg",
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "3",
    image: "/assets/images/portfolio-4.jpg",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "4",
    image: "/assets/images/portfolio-4.jpg",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "5",
    image: "/assets/images/portfolio-4.jpg",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "6",
    image: "/assets/images/about.jpg",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
function Portfolio({ setActiveTab }: Props) {
  return (
    <Section
      setActiveTab={setActiveTab}
      activeTab="Portfolio"
      subTitle="My Awesome Service"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      Card={CardWithBackgroundImage}
      items={items}
      bgColor="primary"
    />
  );
}

export default Portfolio;
