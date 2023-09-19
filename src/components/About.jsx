import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>/about me</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a software engineer with a solid foundation in full-stack development and team management skills. My professional journey has been fueled by a genuine passion for the convergence of computer science and creative design. This drive motivates me to continually explore and implement innovative solutions. With a commitment to pushing boundaries and a dedication to creating impactful technology, I'm excited to connect with fellow professionals and explore new opportunities in the ever-evolving world of software engineering. 
        <br />
        <br />
        Beyond my work, I'm a multifaceted individual with a love for diverse interests. In my free time, you'll often find me immersed in the world of music, playing the piano to unwind. I also have a keen eye for photography, capturing moments that inspire me. Additionally, I'm a gamer, embracing the challenges and creativity that gaming offers.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")