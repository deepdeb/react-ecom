// import React from 'react'

// const Modal = ({isModalOpen, setIsModalOpen, children}) => {
//     if (!isModalOpen) return null
//     return (
//         <div className='fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50'>
//             <div className='relative bg-white rounded-lg shadow-lg w-full max-w-md'>
//                 <button className='absolute top-2 right-2 text-gray-400 text-5xl cursor-pointer' onClick={() => setIsModalOpen(false)}>&times;</button>
//                 <div>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal




// with framer motion
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {/* Background dismiss */}
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsModalOpen(false)} />

          <motion.div className="relative z-10 bg-white rounded-lg shadow-lg w-full max-w-md" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <button className="absolute top-2 right-2 text-gray-500 text-3xl cursor-pointer" onClick={() => setIsModalOpen(false)} >
              &times;
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;