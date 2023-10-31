import Image from "next/image";
import { motion } from "framer-motion";
function Skills() {
  return (
    <div className="h-auto">
      <motion.div
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
      >
        <h1 className="text-white text-4xl fontStyle w-4/6 flex justify-center max-xl:pt-5 max-sm:p-0">
          <i>Skills</i>
        </h1>
      </motion.div>
      <div className="logo-skills">
        <div className="logo-slide flex w-full">
          <Image
            src={"/img/js3.png"}
            alt="skills"
            className="mx-5 rounded-[50%]"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/ts3.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/node2.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/sequalize.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/express-js.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/react2.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/redux.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/postgres2.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/next5.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/tailwind3.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/html3.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/css.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/git3.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
          <Image
            src={"/img/boostrap.png"}
            alt="skills"
            className="mx-5"
            width={90}
            height={60}
          ></Image>
        </div>
      </div>
    </div>
  );
}
export default Skills;
