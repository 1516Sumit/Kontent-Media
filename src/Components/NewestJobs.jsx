import { useState } from 'react'
import NewestCard from './NewestCard'
// import Mask from '../assets/img/mask2.png'
import './NewestJobs.css'
import '../App.css'
function NewestJobs() {
  const [all, setAll] = useState(true)
  const [finance, setFinance] = useState(false)
  const [dev, setDev] = useState(false)
  const [mark, setMark] = useState(false)
  const [specialist, setSpecialist] = useState(false)

  return (
    <div className='fade flex flex-col w-screen full sm:pt-10' style={{ backgroundColor: 'black' }}>
      <div className="bg-black h-0 block relative rotate-180 z-0 right-0" style={{ top: '120px' }}>
        <img className="w-32 sm:w-36 md:w-40" src="./images/Mask group.svg" />
      </div>
      <div className="flex justify-center items-center heading">Open&nbsp;<span style={{ color: "#FFD93D" }} >Positions&nbsp;</span> 
      {/* For&nbsp; */}
      {/* <span style={{ color: '#7F00FF' }}> You</span> */}
      </div>
      <div className="flex justify-center items-center sub-heading text-center">Your next chapter starts here. Are you up to the challenge?</div>
      {/* <div style={{display:'flex', justifyContent:'space-evenly', marginTop:"2%", marginBottom:'2%'}}>
      <p className='tabs'  style={{color:'white', cursor:'pointer' }} onClick={e=>{setAll(true)}}>All Recent</p>
      <p className='tabs' style={{color:'white', cursor:'pointer'}} onClick={e=>{ setAll(false); setFinance(true)}}>Finance</p>
      <p className='tabs' style={{color:'white', cursor:'pointer'}} onClick={e=>{ setAll(false); setFinance(false); setDev(true)}}>Development</p>
      <p className='tabs' style={{color:'white', cursor:'pointer'}} onClick={e=>{ setAll(false); setFinance(false); setDev(false); setMark(true)}}>Marketing</p>
      <p className='tabs' style={{color:'white', cursor:'pointer'}} onClick={e=>{ setAll(false);setFinance(false); setDev(false); setMark(false); setSpecialist(true)}}>Specialist</p>
    </div> */}
      {all ?
        <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
          <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
        </div>
        : finance ?
          <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
            <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Finance' subheading='Advoit Digital Agency' />
          </div> : dev ?
            <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Development' subheading='Advoit Digital Agency' />
            </div> :
            mark ? <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='marketing' subheading='Advoit Digital Agency' />
            </div> : specialist ? <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
              <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='Specialist' subheading='Advoit Digital Agency' />
            </div> :
              <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-4/5 cards'>
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
                <NewestCard text1='Fulltime' text2='Onsite' text3='$300k' post='UX Designer' subheading='Advoit Digital Agency' />
              </div>
      }
    </div>
  )
}

export default NewestJobs