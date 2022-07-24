import React, { useEffect, useState } from 'react';
import './Home.scss';
import CourseList from '../../components/CourseList/CourseList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataToShow, SetDataToShow] = useState();
  const [urlTag, setUrlTag] = useState();
  // const [url, setUrl] = useState(`http://localhost:8080/courses/`)


  let url = `http://localhost:8080/courses`;
  let courseData = {}
  const getCourses = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Re Render");
    console.log(data);
  };
  useEffect(() => {
    console.log("use effect used");
    getCourses();
  }, [url]);
  
  const handleInputForSearch = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log("handling Search");
    setSearchTerm(cleanInput);
  };

  const handleIdSearch = (event) => {
    const stringId = event.target.value;
    const numberId = parseInt(stringId);
    console.log(numberId);
    console.log("Getting to clean id");
    setUrlTag(numberId);
  }

  const filteredBySearch = courses.filter((course) => {
    const titlesToLower = course.title.toLowerCase();
    SetDataToShow(titlesToLower.includes(searchTerm));
  });

  return (
    <div className='home'>
      <Header />
      <div className='home__search-area'>
        <SearchBar label={"Search for your next course"} handleInput={handleInputForSearch} />
        <SearchBar label={"Know the course ID, Enter It here : "} handleInput={handleIdSearch} />
      </div>
      <div className='home__content'>
        <CourseList courses={dataToShow} />
      </div>
    </div>
  );
};

export default Home;
