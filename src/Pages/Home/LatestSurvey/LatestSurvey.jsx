import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import Card from "./Card";

const LatestSurvey = () => {
    const [survey,setSurvey] = useState([])
    useEffect(()=>{
        fetch('https://survey-server-eight.vercel.app/api/create-survey/date')
        .then(res=>res.json())
        .then(data=>setSurvey(data))
    },[])
    return (
        <div className="my-10">
            <SectionTitle
                headings={'latest'}
                subHeading={'Latest Survey'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
                {
                    survey.map((survey, idx) => <Card key={idx} survey={survey}></Card>)
                }
            </div>
        </div>
    );
};

export default LatestSurvey;