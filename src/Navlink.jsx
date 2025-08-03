import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const links = [
  {
    navlink: "home",
  },
  {
    navlink: "shop",
  },
  {
    navlink: "about",
  },
  {
    navlink: "contact",
  },
];

function Navlink() {
  const [index, setIndex] = useState(0);
  return (
    <motion.ul className="text-[16px] font-semibold text-black lg:text-white hidden md:flex gap-4 md:gap-[2rem] items-center">
      {links.map((s, i) => {
        return (
          <motion.li
            className="  cursor-pointer relative  "
            key={i}
            initial={false}
            onClick={() => setIndex(i)}
          >
            {s.navlink}
            {index === i ? (
              <motion.div
                className="border-b-2 border-b-black absolute bottom-0 top-[30px] right-[0px] left-0"
                layoutId="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ width: 0 }}
                transition={{ duration: 0.6 }}
              />
            ) : null}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}

export default Navlink;
{
  /* transition={{ duration: 0.4, ease: "easeInOut" }}
                animate={{ x: 0 }}
 */
}
