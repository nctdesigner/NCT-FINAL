import Image from "next/image"; // CUSTOM COMPONENTS

import { H5 } from "components/Typography";
import FlexRowCenter from "components/flex-box/flex-row-center"; // IMPORT IMAGES

import logo from "../../../../public/assets/images/logo2.svg";
export default function LogoWithTitle() {
  return <FlexRowCenter flexDirection="column" gap={0} mb={4}>
      <Image src={logo} alt="bazaar" />
      <H5 fontWeight={700}>Welcome To NCTEdge</H5>
    </FlexRowCenter>;
}