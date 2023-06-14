import { useEffect, useState } from "react";
import Class from "./class";

const Classes = () => {
    const [classData, setClassData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => setClassData(data))
    },[])

    return (
        <div className="grid md:grid-cols-3">
           {
            classData.map(singelClass => <Class key={singelClass?._id} singelClass={singelClass}></Class>)
           }
          
        </div>
    );
};

export default Classes;