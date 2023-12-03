import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../Components/SectionTitle'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Testimonial = () => {
    return (
        <div className='mt-10' >
            <SectionTitle
                headings={'testimonials'}
                subHeading={'Testimonials from Our Clients'}
            ></SectionTitle >
            <>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    slidesPerView={2}
                    speed={600}
                    parallax={true}
                    color='red'
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper mt-10"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            'background-image':
                                'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide> 
                        <div className="text flex gap-5 items-center" data-swiper-parallax="-100">
                            <img className='h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.ibb.co/tCVLH9y/images-4.jpg" alt="" />
                            <div className="divider divider-horizontal"></div>
                            <p className=' border-gray-400 text-xs md:text-sm lg:text-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div className="text flex gap-5 items-center" data-swiper-parallax="-100">
                            <img className='h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.ibb.co/2FJXG68/images-5.jpg" alt="" />
                            <div className="divider divider-horizontal"></div>
                            <p className=' border-gray-400 text-xs md:text-sm lg:text-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div className="text flex gap-5 items-center" data-swiper-parallax="-100">
                            <img className='h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.ibb.co/R68N4SC/download-10.jpg" alt="" />
                            <div className="divider divider-horizontal"></div>
                            <p className=' border-gray-400 text-xs md:text-sm lg:text-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide> 
                        <div className="text flex gap-5 items-center" data-swiper-parallax="-100">
                            <img className='h-20 w-20 lg:h-40 lg:w-40 rounded-full' src="https://i.ibb.co/tCVLH9y/images-4.jpg" alt="" />
                            <div className="divider divider-horizontal"></div>
                            <p className=' border-gray-400 text-xs md:text-sm lg:text-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;