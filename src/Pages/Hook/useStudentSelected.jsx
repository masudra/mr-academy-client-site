import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';

const useStudentSelected = email => {
 
    const {user}=useContext(AuthContex)

    const { refetch, data: studentselect=[] } = useQuery({
        queryKey: ['studentselect',user?.email],
        queryFn: async()=>{
          const res = await fetch(`http://localhost:5000/studentSelect?email=${user?.email}`)
          return res.json()
        }
      })
   return [studentselect,refetch]
};

export default useStudentSelected;