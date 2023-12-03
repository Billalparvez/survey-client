
import Tilt from 'react-parallax-tilt';

const Card = ({ survey }) => {
    const { title, vote, like, image, category, description, timestamp } = survey
    console.log(survey)
    return (
        <Tilt>
            <div className="card  card-compact mb-2 bg-base-100 shadow-xl h-[450px]">
                <div data-aos="flip-up" className="  bg-base-100  ">
                    <div className="">
                        <figure><img className=" object-cover h-64 rounded-xl hover:hue-rotate-90 w-full" src={image} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body relative">
                        <img className="sb absolute  mt-[-44px]  w-14 h-14 rounded-full border-4 border-white " src={image} alt="" />
                        <p className="font-bold mt-3 text-gray-400 md:text-lg border-l-4 border-info "><span className="ml-3">{title}</span></p>
                        <h2 className="card-title ">
                            {description}
                        </h2>
                        <h2 className="badge bg-info text-white">{timestamp}</h2>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default Card;