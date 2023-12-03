
import SurveyCard from "./SurveyCard";



const TabCard = ({ survey }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-3">
                {
                    survey.map((survey, idx) =>
                        <SurveyCard key={idx}
                            survey={survey}>
                        </SurveyCard>)
                }
            </div>
        </>
    );
};

export default TabCard;