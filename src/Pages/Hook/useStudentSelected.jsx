import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useStudentSelected = email => {
 
    const {user,loading}=useAuth
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: studentselect=[] } = useQuery({
        queryKey: ['studentselect',user?.email],
        enabled:!!user?.email && !!localStorage.getItem('access-token'),

        queryFn: async()=>{
          const res = await axiosSecure(`/studentselect?email=${user?.email}`)
          return res.data
        }
      })
   return [studentselect,refetch]
};

export default useStudentSelected;