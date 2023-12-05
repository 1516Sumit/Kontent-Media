import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Pricingboxsecond(props) {
  const [firstClicked, setFirstClicked] = useState(false);
  const [secondClicked, setSecondClicked] = useState(true);
  const [thirdClicked, setThirdClicked] = useState(false);
  const [standardPrice, setStandardPrice] = useState("$ 1,999 /-")

  return (
    <>
      <div className="box flex flex-col p-3 lg:w-10/12 xl:w-9/12 bg-white rounded-lg border border-gray-100 shadow xl:p-4 2xl:p-6 overflow-hidden standard xxs:p-0">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="p-2 text-2xl lg:text-3xl font-black text-[#7F00FF]">
              <p style={{ fontFamily: "Archivo" }}>{props.hname}</p>
            </h3>
          </div>
        </div>
        <p className="p-2 text-sm text-slate-500">
          →Many of these business ideas are home-based.
          <br />
          →Many of these business ideas are
          <br />
          →Many of these business ideas are home-based.
          <br />
          →Many of these business ideas are
          <br />
          →Many of these business ideas are home-based.
          <br />
          →Many of these business ideas are
        </p>
        <div className="button-container w-full md:w-11/12">
          <div
            className={`rectangular-button ${firstClicked ? 'clicked' : ''}`}
            onClick={() => {
              setFirstClicked(!firstClicked);
              setSecondClicked(false);
              setThirdClicked(false);

              setStandardPrice('$ 999 /-');
            }}
          >
            10 videos <br />20 mins
          </div>
          <div className="line2"></div>
          <div
            className={`rectangular-button ${secondClicked ? 'clicked' : ''}`}
            onClick={() => {
              setFirstClicked(false);
              setSecondClicked(!secondClicked);
              setThirdClicked(false);
              setStandardPrice('$ 1,999 /-');
            }}
          >
            15 videos <br />30 mins
          </div> <div className="line2"></div>
          <div
            className={`rectangular-button ${thirdClicked ? 'clicked' : ''}`}
            onClick={() => {
              setFirstClicked(false);
              setSecondClicked(false);
              setThirdClicked(!thirdClicked);
              setStandardPrice('$ 2,999 /-');
            }}
          >
            30 videos <br />60 mins
          </div>

        </div>
        <div className="m-1 flex justify-center items-center xxs:pt-1 sm:pt-0">
          <p className="price">
            {standardPrice}
          </p>
          <button
            className="flex items-center justify-center h-10 w-2/4 sm:h-10 xxs:h-8 xl:h-12 2xl:h-14 md:w-2/4 bg-[#7F00FF] hover:bg-[#6f11cf] text-base xl:text-lg 2xl:text-xl text-white font-bold py-2 px-1 border-b-2 border-white-400 hover:border-purple-800 rounded-lg"
            style={{ fontFamily: "Archivo" }}
          >

            <Link>Subscribe</Link>
          </button>
        </div>
      </div>

    </>
  );
}