import iphone from '../assets/img/iphone.png';
export default function Sliderwild() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <img src={iphone} style={{width:"84rem"}} className='z-1 absolute rotate-90' />
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center overflow-hidden rotate-0'>
                        <iframe className='h-[340px] w-[170px] rounded-[30px] lg:rounded-[50px] overflow-hidden' src="https://www.youtube.com/embed/Uv5grJAidHs?si=Q8taju90ALr77QiT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}