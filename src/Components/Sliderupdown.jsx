import iphone from '../assets/img/iphone.png';
export default function Sliderupdown() {
    return (
        <>
            <div className='flex flex-col justify-between'>
                <div className='relative flex justify-center items-center m-2 mb-6'>
                    <img src={iphone} style={{width:"18rem"}} className='z-1 absolute' />
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center overflow-hidden rotate-0'>
                            <iframe className='w-[17rem] h-[9rem] sm:w-68 z-2 rounded-[40px] lg:rounded-[50px] overflow-hidden' src="https://www.youtube.com/embed/IUEyGJGLMcM?si=usq1RU6ypEVyFBed" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className='mt-5 relative flex justify-center items-center m-2 mt-4'>
                    <img src={iphone} style={{width:"18rem"}} className='z-1 absolute' />
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center overflow-hidden rotate-0'>
                            <iframe className='w-[17rem] h-[9rem] sm:w-68 z-2 rounded-[40px] lg:rounded-[50px] overflow-hidden' src="https://www.youtube.com/embed/iacJorVqSFI?si=YozaspqPipV-YXYl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}