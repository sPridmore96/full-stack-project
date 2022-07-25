import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


const CourseExtraInfo = () => {

const [courseInfo, setCourseInfo] = useState()

const {Id} = useParams();
console.log(Id);


    const getIndividualCourse = async () => {
        let url =+ `/courses/${Id}`;
        const res = await fetch(url);
        console.log(res);
        const data = await res.json();
        console.log(data);
        setCourseInfo(data);
      };
      useEffect(() => {
        getIndividualCourse();
      }, []);


  return (
    <div>
        <p>working for id : {Id}</p>
    </div>
  )
}

export default CourseExtraInfo