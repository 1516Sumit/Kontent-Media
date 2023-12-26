import iphone from '../assets/img/iphone.png';
export default function Sliderwild() {
    return (
        <>
            <div className='relative flex justify-center items-center rotate-0'>
                <img src={iphone} className='iphone2 rotate-0 md:rotate-90 z-1 absolute' />
                <div className='reldiv flex justify-center items-center'>
                    <div className='videodiv videodiv4 overflow-hidden rotate-0 md:rotate-90'>
                        <iframe className='w-64 sm:w-80 md:w-96 md:h-32 lg:h-44 xl:h-48 z-2 rounded-[40px] lg:rounded-[50px]' src="https://www.youtube.com/embed/IUEyGJGLMcM?si=usq1RU6ypEVyFBed" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}