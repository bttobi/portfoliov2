import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface HamburgerProps {
  subPages: readonly string[];
}

const Hamburger: React.FC<HamburgerProps> = ({ subPages }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <motion.button
      className="absolute right-6 md:hidden"
      onClick={() => setOpen((prevState) => !prevState)}
    >
      <div className="align-center my-auto flex h-8 w-8 justify-center gap-2 rounded-md border-2">
        <div className="mt-[13px] h-0.5 w-4 rounded-md bg-bgPrimary before:absolute before:ml-[-8px] before:mt-[-6px] before:h-0.5 before:w-4 before:rounded-md before:bg-bgPrimary before:content-[''] after:absolute after:ml-[-8px] after:mt-[6px] after:h-0.5 after:w-4 after:rounded-md after:bg-bgPrimary after:content-['']" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{ transformOrigin: "100% 0%" }}
            transition={{ duration: 0.1 }}
            initial={{
              x: 5,
              y: -5,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 100,
              scale: 1,
            }}
            exit={{
              x: 5,
              y: -5,
              opacity: 0,
              scale: 0.6,
            }}
            className="bg-bgSecondaryDark absolute right-4 top-9 rounded-md border-2 border-bgPrimary p-2"
          >
            <ul className="bg flex flex-col justify-center gap-3">
              {subPages.map((el) => (
                <li className="delay-52 cursor-pointer text-sm transition ease-in-out hover:text-accentText">
                  {el}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Hamburger;
