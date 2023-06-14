import React, { useEffect, useState } from 'react';
import PopularClassCart from './PopularClassCart';

const PopularClasses = () => {
    const [populerclass ,setPopularClass] =useState([])
    // useEffect(()=>{
    //   const populerData = async () => {
    //     try {
    //       const res = await fetch('https://mr-academy-server.vercel.app/classes');
    //       const data = await res.json();
    //       const sixData = data.sort((a, b) => a.available_seats - b.available_seats);
    //       const populerClass = sixData.slice(0, 6);
    //      setPopularClass(populerClass)
    //     } 
    //     catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   populerData();
    // },[])
    useEffect(() => {
      const fetchPopularData = async () => {
        try {
          const res = await fetch('https://mr-academy-server.vercel.app/classes');
          const data = await res.json();
          const modifiedData = data.map(item => ({ ...item, available_seats: item.available_seats   }));
          const sortedData = modifiedData.sort((a, b) => b.available_seats - a.available_seats);
          const popularClass = sortedData.slice(0, 6);
          setPopularClass(popularClass);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPopularData();
    }, []);


    return (
        <div>
          <h1 className='text-center text-4xl text-sky-600 mt-10 font-bold'>Popular Classes</h1>

          <div  className=' grid md:grid-cols-3 mb-10'>
          {
           populerclass.map(pData => <PopularClassCart key={pData?._id}   populersix ={pData}></PopularClassCart>)
           
           }
          </div>
            
        </div>
    );
};

export default PopularClasses;