
import SectionTitle from '../../../Components/SectionTitle';
import useSurvey from '../../../hook/useSurvey';

import Card from './Card';

const FeaturedSurvey = () => {
    const [survey] = useSurvey()
    return (
        <div className="my-20">
            <SectionTitle headings={'feature'}
                subHeading={'Featured Survey'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3'>
                {
                    survey.map(survey => <Card key={survey._id} survey={survey}></Card>)

                }
            </div>
        </div>
    );
};

export default FeaturedSurvey;