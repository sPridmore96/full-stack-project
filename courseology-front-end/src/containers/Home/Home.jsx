import React, { useEffect, useState } from 'react';
import './Home.scss';
import CourseList from '../../components/CourseList/CourseList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getCourses = async () => {
    let url = 'http://localhost:8080/courses';
    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };
  useEffect(() => {
    getCourses();
  }, []);

  const handleInputForSearch = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleIdSearch = () => {

  }

  const filterBySearchTerm = courses.filter((course) => {
    const titlesToLower = course.title.toLowerCase();
    return titlesToLower.includes(searchTerm);
  });

  return (
    <div className='home'>
     <Header/>
      <div className='home__search-area'>
      <SearchBar label={"Search for your next course"} handleInputForSearch={handleInputForSearch} />
      <SearchBar label={"Know the course ID, Enter It here : "}/>
      </div>
      <div className='home__content'>
      <CourseList courses={filterBySearchTerm} />
      </div>
    </div>
  );
};

export default Home;
