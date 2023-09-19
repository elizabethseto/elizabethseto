import { motion } from 'framer-motion';
import { styles } from '../styles';

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={'$styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'}>
        <div className="flex flex-col justify-center items-center mt-20">
        </div>
        <div>
          <h1 className={`${styles.HeadText} text-white`}>
            <span className='text-[#915EFF]'>Elizabeth Seto</span>
          </h1>
          <p className={`${styles.SubText} mt-10 text-white-100`}>
            software engineer <br className='sm:block hidden' />
            based in seattle
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w=[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Home