/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Button from "./UI/atoms/button";
import Container from './UI/atoms/container';
import Field from "./UI/atoms/field";
import Paragraph from "./UI/atoms/paragraph";
import SubTitle from "./UI/atoms/subTitle";
interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  }
const Contact = ({setActiveTab}: Props) => {
  return (
    <Container setActiveTab={setActiveTab} activeTab='Contact'>
    <div tw='flex flex-col lg:flex-row lg:flex-row-reverse  px-3.5'>
        <div tw='lg:ml-8 lg:w-1/2'>
<img tw='rounded-[5px] w-full   h-[306px] lg:h-[90%] lg:object-position[80%] mb-8 lg:mb-0 object-cover' src="/assets/images/cover.jpg"  />
</div>
<div tw='flex flex-col lg:w-1/2'>
    <SubTitle title='Hire Me.'></SubTitle>
       <Paragraph text='I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com' />
       <form tw='mt-[50px] space-y-5'>
<Field placeholder="Your Name *"></Field>
<Field placeholder="Your Email *"></Field>
<Field placeholder="Write a Subject"></Field>
<Field as='textarea' tw='h-28' placeholder="Your Message"></Field>
<Button variant="fill">Submit</Button>
    </form>
    </div>
    
    </div>
   
    </Container>
  )
}

export default Contact;