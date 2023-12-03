import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

export const useSurvey = () => {
  const axiosSecure = useAxios()
  const { user } = useAuth()
  const { refetch, data: survey = [] } = useQuery({
    queryKey: ['survey',],
    // queryKey: ['survey', user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get('/api/create-survey')
      // const result = await axiosSecure.get(`/api/create-survey?email=${user?.email}`)
      return result.data
    }
  })
  return [survey, refetch, user]
};

export default useSurvey;