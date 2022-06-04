import { isMobile } from "react-device-detect";

import { ContactMe } from "../ContactMe/index";
import { NSicon } from "./NSicon";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="flex justify-between sm:h-auto h-28">
      <>
        <NSicon />

        <Navbar />

        {isMobile ? null : <ContactMe styleInfo="gap-7 mt-8 mr-12" />}
      </>
    </header>
  );
}
