import { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
    const [classData, setClassData]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=> res.json())
        .then(data => setClassData(data))
    },[])
    console.log(classData);

    return (
        <div className="grid md:grid-cols-3">
           {
            classData.map(singelClass => <Class key={singelClass?._id} singelClass={singelClass}></Class>)
           }
          
        </div>
    );
};

export default Classes;