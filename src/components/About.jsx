import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
        <motion.div variants={fadeIn("right","spring",0.5 *index,0.75) } className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
           <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
           </div>
        </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mx-2`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} mx-2`}>Overview.</h2>
        <p className='text-[16px] text-violet-100 px-5'>I'm a skilled FullStack developer with knowledge in Node.js and
          JavaScript, and expertise in frameworks like React, Express.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
