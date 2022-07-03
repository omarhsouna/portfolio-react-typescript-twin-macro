/** @jsxImportSource @emotion/react */

import React from "react";
import Container from "components/UI/atoms/container";
import SubTitle from "components/UI/atoms/subTitle";
import Paragraph from "components/UI/atoms/paragraph";
import Field from "components/UI/atoms/field";
import Button from "components/UI/atoms/button";

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}
function Contact({ setActiveTab }: Props) {
  return (
    <Container setActiveTab={setActiveTab} activeTab="Contact">
      <div tw="flex flex-col lg:flex-row-reverse  px-3.5">
        <div tw="lg:ml-8 lg:w-1/2">
          <img
            alt="logo"
            tw="rounded-[5px] w-full   h-[306px] lg:h-[90%] lg:object-position[80%] mb-8 lg:mb-0 object-cover"
            src="/assets/images/cover.jpg"
          />
        </div>
        <div tw="flex flex-col lg:w-1/2">
          <SubTitle title="Hire Me." />
          <Paragraph text="I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com" />
          <form tw="mt-[50px] space-y-5">
            <Field placeholder="Your Name *" />
            <Field placeholder="Your Email *" />
            <Field placeholder="Write a Subject" />
            <Field as="textarea" tw="h-28" placeholder="Your Message" />
            <Button variant="fill">Submit</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
