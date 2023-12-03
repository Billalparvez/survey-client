
const SectionTitle = ({ headings, subHeading }) => {
    return (
        <div className="text-center  mx-auto md:w-4/12">
            <p data-aos="fade-right" className="text-info font-bold mb-2">--{headings}--</p>
            <h1  data-aos="fade-left" className="border-y-2 uppercase text-3xl border-gray-400 p-3">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;

