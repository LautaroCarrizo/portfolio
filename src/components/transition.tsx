"use client";
import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motionTransition";
function Transition() {
  return (
    <>
      <AnimatePresence mode="wait">
        <div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#a0ecff]"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#9ff0ea] opacity-50"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
}
export default Transition