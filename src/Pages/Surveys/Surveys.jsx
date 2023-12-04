
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useSurvey from "../../hook/useSurvey";
import Container from '../../Shard/Container'
// import Card from "./Card";

import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { useParams } from "react-router-dom";
import TabCard from "../../Components/TabCard";
import SectionTitle from "../../Components/SectionTitle";
const Surveys = () => {
    const [survey] = useSurvey()
    console.log(survey)
    const categories = ['technology', 'education', 'travel']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const travel = survey.filter(data => data.category === 'Travel')
    const technology = survey.filter(data => data.category === 'Technology')
    const education = survey.filter(data => data.category === 'Education')
    console.log(technology)
    return (
        <div className="min-h-screen px-10 pt-28">
            <Container>
                <SectionTitle
                    headings={'survey'}
                    subHeading={'Our Survey'}
                ></SectionTitle>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center">
                        <Tab>Education</Tab>
                        <Tab>Travel</Tab>
                        <Tab>Technology</Tab>

                    </TabList>
                    <TabPanel>
                        <TabCard survey={education}></TabCard>

                    </TabPanel>
                    <TabPanel >
                        <TabCard survey={travel}></TabCard>

                    </TabPanel>
                    <TabPanel >
                        <TabCard survey={technology}></TabCard>

                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

export default Surveys;