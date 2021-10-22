import './App.css';
import letterLigth from '../src/assets/letterLigth.png'
import flowers from '../src/assets/flowers.png'
import label from '../src/assets/label.png'
import closeLettermain from '../src/assets/closeLettermain.png'
import Lettermain from '../src/assets/Lettermain.png'
import letter from '../src/assets/letter.png'
import puket from '../src/assets/puket.png'


import { motion } from "framer-motion"
import { useState } from 'react';


const variants = {
  open: { position: 'absolute', transform: 'translateX(-415px)   rotateY(180deg)' },
  closed: { position: 'absolute', transform: 'translateX(0px)    rotateY(0deg)' },
}

const variants1 = {
  open: { position: 'absolute', transform: 'translateX(400px) translateY(200px) rotate(20deg)' },
  closed: { position: 'absolute', transform: 'translateX(0px) translateY(0px) rotate(0deg)' },
}

const variants2 = {
  open: { position: 'absolute', transform: 'translateX(405px) rotateY(180deg)' },
  closed: { position: 'absolute', transform: 'translateX(0px)   rotateY(0deg)' },
}

const variants3 = {
  open: { transform: 'translateX(-235px) ' },
  closed: { transform: 'translateX(0px) ' },
}
const variants5 = {
  open: { position: 'absolute', transform: 'translateX(405px)  translateY(75px) rotateY(180deg) scale(1.2)', opacity: 1 },
  closed: { position: 'absolute', transform: 'translateX(0px) translateY(0px)  rotateY(0deg) scale(0)', opacity: 0 },
}

const variants6 = {
  open: { position: 'absolute', transform: 'scale(1.1)' },
  closed: { position: 'absolute', transform: 'scale(1)' },
}


function App({ name = '' }) {

  const [isOpen, setIsOpen] = useState(false)
  const [isLetter, setIsLetter] = useState(false)




  return (
    <div className="App">
      <header className="App-header">
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants3}
          transition={{ duration: 1 }}
        >
          <img src={letterLigth} alt='' />
        </motion.nav>
        <img onClick={() => setIsOpen(isOpen => !isOpen)} style={{ position: 'absolute' }} src={Lettermain} alt='' />

        <motion.nav
          animate={isLetter ? "open" : "closed"}
          variants={variants6}
          transition={{ duration: 1 }}
        >
          <img onClick={() => setIsLetter(isLetter => !isLetter)} src={letter} alt='' />
        </motion.nav>

        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants2}
          transition={{ duration: 1 }}
        >

          <img onClick={() => setIsOpen(isOpen => !isOpen)} src={Lettermain} alt='' />

        </motion.nav>

        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants5}
          transition={{ duration: 1 }}
        >
          <img src={puket} alt='' />
        </motion.nav>


        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <img onClick={() => setIsOpen(isOpen => !isOpen)} src={closeLettermain} alt='' />
        </motion.nav>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants1}
          transition={{ duration: 1 }}
        >

          <img src={label} alt='' />
          <div style={{ marginTop: -70, marginLeft: 10, fontSize: 14 }}>
            {name}
          </div>
        </motion.nav>


        <img style={{ marginTop: 300, marginLeft: -100 }} src={flowers} alt='' />
      </header>
    </div>
  );
}

export default App;
