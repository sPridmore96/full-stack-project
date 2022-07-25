import './Home.scss';
import { React, useState } from 'react';
import CourseList from '../../components/CourseList/CourseList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Header from '../../components/Header/Header';

const Home = ({courses}) => {
  
  const [searchTerm, setSearchTerm] = useState('');


  const handleInputForSearch = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    console.log('handling Search');
    setSearchTerm(cleanInput);
  };

  const filteredBySearchTerm = courses.filter((course) => {
    const titlesToLower = course.title.toLowerCase();
    return titlesToLower.includes(searchTerm);
  });

  return (
    <div className='home'>
      <Header />
      <div className='home__search-area'>
        <SearchBar label={"Search for your next course"} handleInput={handleInputForSearch} />
      </div>
      <div className='home__content'>
        <CourseList courses={filteredBySearchTerm} />
      </div>
    </div>
  );
};

export default Home;
