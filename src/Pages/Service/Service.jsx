import Marquee from "react-fast-marquee";
import Container from '../../Shard/Container'
import SectionTitle from '../../Components/SectionTitle'
const Service = () => {
    return (
        <div>
            <Container>
                <SectionTitle
                    headings={'service'}
                    subHeading={'Our Service'}
                ></SectionTitle>
                <Marquee pauseOnClick>
                    <div className='flex gap-8  my-10'>
                        <div className="card w-96 md:h-[450px]  bg-base-100 shadow-xl">
                            <figure><img className='h-64 w-full' src="https://i.ibb.co/Zg3dKvR/5100169.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'> Survey!</span>
                                    <div className="badge badge-info text-white">NEW</div>
                                </h2>
                                <p className=' '>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 md:h-[450px]  bg-base-100 shadow-xl">
                            <figure><img className='h-64 w-full' src="https://i.ibb.co/y5tY2Vv/4899203.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'>Planning</span>
                                    <div className="badge badge-info text-white">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>
                        <div className="card w-96 md:h-[450px]  bg-base-100 shadow-xl">
                            <figure><img className='h-64 w-full' src="https://i.ibb.co/HrhXY20/5109170.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title border-l-2 border-info">
                                    <span className='ml-4'> Best in Class Support!</span>
                                    <div className="badge badge-info text-white">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes  a dog chews shoes whose shoes If a dog chews shoes whose shoes do If a dog chews shoes whose shoes does does he choose?</p>
                            </div>
                        </div>

                    </div>
                </Marquee>
            </Container>
        </div>
    );
};

export default Service;