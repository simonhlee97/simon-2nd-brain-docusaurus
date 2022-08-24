import React from 'react'
import WSPGallery from './WSPGallery'

const GoyangChallenger = () => {
   const galleryImages = [
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248869/ITF-Challenger-Goyang/P1230366_ho4wvm.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248869/ITF-Challenger-Goyang/P1230368_uexqcn.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248863/ITF-Challenger-Goyang/P1230329_b0cgac.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248863/ITF-Challenger-Goyang/P1230330_sswabj.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248863/ITF-Challenger-Goyang/P1230333_ld0tzo.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248864/ITF-Challenger-Goyang/P1230335_viuuqy.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248864/ITF-Challenger-Goyang/P1230336_scekzd.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248865/ITF-Challenger-Goyang/P1230340_hr2vun.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248864/ITF-Challenger-Goyang/P1230338_cgqvla.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248865/ITF-Challenger-Goyang/P1230343_bwppy6.jpg'},
    { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248865/ITF-Challenger-Goyang/P1230344_nfgztb.jpg'},
     { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248866/ITF-Challenger-Goyang/P1230346_rlgdrw.jpg' }, 
     { img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248869/ITF-Challenger-Goyang/P1230367_nnuejy.jpg' },
     {img: 'https://res.cloudinary.com/ryucave/image/upload/v1661248869/ITF-Challenger-Goyang/P1230365_xckiyf.jpg'}
     
   ]
  
  return (
    <>
      <WSPGallery galleryImages={galleryImages} />
    </>
  )
}

export default GoyangChallenger