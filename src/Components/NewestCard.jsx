import { useState } from 'react'
import FireBlack from '../assets/img/firenormal.png'
import './NewestCards.css'

function NewestCard(props) {
  const [image, setImage] = useState(false);
  const MouseOver = () => {
    setImage(true);
  }
  const MouseOut = () => {
    setImage(false);
  }
  return (
    <div className='fade card' style={{ color: 'white', border: '1px solid #ffffff', borderRadius: 15 }} onMouseOver={MouseOver} onMouseOut={MouseOut}>
      <div className='hash' style={{ display: 'flex' }}>
        <span className='blocks' style={{ border: '0.1px solid #ffffff', borderRadius: 8, textAlign: 'center', }}>{props.text1}</span>
        <span className='blocks' style={{ border: '0.1px solid #ffffff', borderRadius: 8, textAlign: 'center', }}>{props.text2}</span>
        <span className='blocks' style={{ border: '0.1px solid #ffffff', borderRadius: 8, textAlign: 'center', }}>{props.text3}</span>
      </div>
      <div className='grid md:grid-cols-2'>
        <div>
          <h2 className='ux-d' style={{ fontSize: 22.19, fontWeight: 700, fontFamily: 'Archivo' }}>{props.post}</h2>
          <p className='advoit' style={{ fontSize: 14.79 }}>{props.subheading}</p>
          <button className='apply' style={{ backgroundColor: '#7F00FF', borderRadius: 5, fontFamily: 'Archivo', textAlign: 'center', fontSize: 14.79, fontWeight: 700 }}>Apply</button>
        </div>
        <div>   {image ? <svg xmlns="http://www.w3.org/2000/svg" width="209" height="148" viewBox="0 0 209 148" fill="none" className='fire'>
          <path d="M164.505 67.8726C163.093 66.5003 161.111 65.8768 159.173 66.1956C157.23 66.5132 155.553 67.7326 154.652 69.4824C151.553 75.5025 147.617 81.0348 142.986 85.9253C143.448 82.3925 143.68 78.8386 143.68 75.2752C143.68 68.4377 142.764 61.4016 140.956 54.3596C135.011 31.2297 119.421 11.669 98.1859 0.693396C96.3371 -0.261846 94.1343 -0.228307 92.3153 0.782833C90.4963 1.79439 89.3051 3.64897 89.1419 5.72343C87.4865 26.7429 76.6596 45.866 59.4209 58.2017C59.1928 58.3661 58.9663 58.5325 58.7398 58.6982C58.2707 59.0414 57.8284 59.366 57.4152 59.6385C57.3506 59.6816 57.2864 59.7255 57.2235 59.7706C46.3817 67.533 37.4359 77.8804 31.3521 89.6974C25.1701 101.717 22.0356 114.616 22.0356 128.033C22.0356 134.869 22.952 141.905 24.7593 148.948C34.2973 186.072 67.7055 211.999 106.002 211.999C152.299 211.999 189.964 174.332 189.964 128.033C189.964 105.202 180.922 83.8363 164.505 67.8726Z" fill="#7F00FF" fillOpacity="0.15" />
          <circle cx="100.218" cy="125.273" r="25.0545" fill="#0E0C12" />
        </svg>
          : <img src={FireBlack} className='fire' />}
        </div>
      </div>

    </div>
  )
}

export default NewestCard