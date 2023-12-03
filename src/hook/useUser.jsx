import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

export const useUser = () => {
    const axiosSecure = useAxios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/users', {
            });
            return res.data;
        }
    })
    return [users,refetch]
};

export default useUser;