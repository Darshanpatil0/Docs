import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Card ({data,referece}) {
  return (
    <motion.div drag dragConstraints={referece} whileDrag={{scale:1.2}} dragElastic={.1}
      dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
    className="card relative w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden text-white px-8  py-10">
          <FaRegFileAlt />
          <p className='text-sm leading-tight mt-5 font-semiblod '>{data.desc}</p>
          <div className="foter absolute bottom-0 w-full  left-0">
          <div className='flex items-center justify-between px-8  py-3 mb-3'>
            <h1>{data.filesize}</h1>
            <span className='f h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                 {data.close ? <IoCloseSharp /> : <LuDownload size=".7em" color='#fff'/>}
                
            </span>
            
         

            </div>

              {
                data.tag.isOpen ? (
                      
            <div className={`tag w-full flex ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} items-center justify-center py-4 `}>
            <h3 className='text-md font-medium'>{data.tag.tagTitle}</h3>
          </div>
                ) : null
              }


          </div>
  </motion.div>
  )
}

export default Card