import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Home from '../Pages/Home/Home/Home'
import DashBoard from "../Pages/DashBoard/DashBoard";
import SurveyCreation from "../Pages/SurveyCreation/SurveyCreation";
import Surveys from "../Pages/Surveys/Surveys";
import SurveyDetails from "../Pages/SurveyDetails/SurveyDetails";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import Priceing from "../Pages/Priceing/Priceing";
import PrivateRouter from "../Provider/PrivateRouter";
import FeaturedSurvey from "../Pages/Home/FeaturedSurvey/FeaturedSurvey";
import LatestSurvey from "../Pages/Home/LatestSurvey/LatestSurvey";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Service from "../Pages/Service/Service";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/surveys',
                element: <Surveys></Surveys>
            },
            {
                path: '/surveyDetails/:id',
                element: <PrivateRouter><SurveyDetails></SurveyDetails></PrivateRouter>

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: '/priceing',
                element: <Priceing></Priceing>
            },
            {
                path: 'featuredSurvey',
                element: <FeaturedSurvey></FeaturedSurvey>,
            },
            {
                path: 'latestSurvey',
                element: <LatestSurvey></LatestSurvey>,
                loader: () => fetch('https://survey-server-eight.vercel.app/api/create-survey/date')
            },
            {
                path: 'service',
                element: <Service></Service>
            }

        ]
    },
    {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: "surveyCreation",
                element: <SurveyCreation></SurveyCreation>
            },

        ]
    },

]);
