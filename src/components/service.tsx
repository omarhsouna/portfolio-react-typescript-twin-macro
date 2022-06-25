import CardSectionService from "./UI/molecules/cardSectionService";
import Section from "./UI/organisms/section";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const items = [
  {
    iconName: "Stratagy",
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    iconName: "Website",
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    iconName: "Marketing",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    iconName: "App",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    iconName: "Marketing",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    iconName: "App",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
const Service = ({ setActiveTab }: Props) => {
  return (
    <Section
      setActiveTab={setActiveTab}
      activeTab="Service"
      subTitle="My Awesome Service"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      Card={CardSectionService}
      items={items}
      bgColor='black'
    ></Section>
  );
};

export default Service;
