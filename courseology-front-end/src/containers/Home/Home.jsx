import React, { useEffect, useState } from 'react'
import "./Home.scss"
import CourseList from '../../components/CourseList/CourseList'



const Home = () => {

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        let url = "http://localhost:8080/courses"
        const res = await fetch(url);
        const data = await res.json();
        setCourses(data);
    }
    useEffect(() => {
        getCourses();
    },[]);

  return (
    <div>
        <h1>CourseHub</h1>
    <CourseList  courses={courses}/>
    </div>
  )
}

export default Home