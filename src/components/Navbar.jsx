import React ,{useEffect,useState}from 'react';
import {Link} from "react-router-dom";
import{styles} from "../styles"
import { navLinks } from "../constants";
import {logo,menu,close} from "../assets";

const Navbar = () => {
   const [active,setActive]=useState("");
   const [toggle,setToggle]=useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className=' flex  items-center gap-2'onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} className='W-10 h-10 rounded-3 object-contain px-5' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex-col gap-2'>Rithick Roshan &nbsp; <span className='sm:block hidden  flex-row gap-10 text-green-400'> FullStack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row  gap-10'>
          {
            navLinks.map((props)=>(
              <li key={props.id} className={`${active === props.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>{setActive(props.title)}}>
                  <a href={`#${props.id}`}>{props.title}</a>
              </li>

            )
            )
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
         <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
         <div className={`${!toggle?"hidden":"flex"}  p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start   sm:flex flex-col  gap-4'>
          {
            navLinks.map((props)=>(
              <li key={props.id} className={`${active === props.title ? "text-white" : "text-secondary"} hover:text-white text-[16px] font-medium font-poppins cursor-pointer  `} onClick={()=>{setActive(props.title);setToggle(!toggle)}}>
                  <a href={`#${props.id}`}>{props.title}</a>
              </li>

            )
            )
          }
          </ul>
         </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;