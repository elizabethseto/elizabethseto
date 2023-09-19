import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { contacts } from '../constants';
import { Tilt } from "react-tilt";
import { fadeIn } from '../utils/motion';

const ContactCard = ({ index, title, icon, url }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full purple-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <a href={url}>
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </a>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>/contact</h3>
        <div className='mt-20 flex flex-wrap gap-10'>
          {contacts.map((contact, index) => (
              <ContactCard key={contact.title} index={index} {...contact}/>
          ))}
        </div>
      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact, "contact");