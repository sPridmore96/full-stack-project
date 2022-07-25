import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseExtraInfo from '../../components/CourseExtraInfo/CourseExtraInfo';
import Home from '../Home/Home';

const Routing = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = async () => {
    let url = `http://localhost:8080/courses`;
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };
  useEffect(() => {
    getCourses();
  }, []);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home courses={courses}/>} />
        <Route
          path="localhost:3000/:id"
          element={<CourseExtraInfo courses={courses}/>}
        />
      </Routes>
    </Router>
  );
};

export default Routing;
