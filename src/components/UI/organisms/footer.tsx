/** @jsxImportSource @emotion/react */
import Icon from "components/UI/atoms/icon";
import LinkIcon from "components/UI/atoms/linkIcon";

function Footer() {
  return (
    <footer tw="bg-black py-8">
      <div tw="px-5 flex flex-col lg:flex-row items-center lg:justify-between space-y-5 md:space-y-0">
        <div tw="flex items-center">
          <img tw="h-12 mr-4" src="assets/images/logo.png" alt="logo" />
          <span tw="text-white text-3xl">trydo</span>
        </div>
        <nav tw="flex items-center justify-between space-x-3  text-white">
          <LinkIcon withBorder link="#" Icon={<Icon name="Facebook" />} />
          <LinkIcon withBorder link="#" Icon={<Icon name="LinkedIn" />} />
          <LinkIcon withBorder link="#" Icon={<Icon name="Instagram" />} />
          <LinkIcon withBorder link="#" Icon={<Icon name="Twitter" />} />
        </nav>
        <p tw="text-third text-center">
          Copyright © 2021 Rainbow-Themes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
