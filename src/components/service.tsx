import CardSectionService from "./UI/molecules/cardSectionService";
import Section from "./UI/organisms/section";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
const items = [
  {
    id: "1",
    iconName: "Stratagy",
    title: "Business Stratagy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "2",
    iconName: "Website",
    title: "Website Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "3",
    iconName: "Marketing",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "4",
    iconName: "App",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "5",
    iconName: "Marketing",
    title: "Marketing & Reporting",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    id: "6",
    iconName: "App",
    title: "Mobile App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];
function Service({ setActiveTab }: Props) {
  return (
    <Section
      setActiveTab={setActiveTab}
      activeTab="Service"
      subTitle="My Awesome Service"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      Card={CardSectionService}
      items={items}
      bgColor="black"
    />
  );
}

export default Service;
