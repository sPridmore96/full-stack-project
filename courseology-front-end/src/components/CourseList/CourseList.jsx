import React from 'react';
import "./CourseList.scss";
import CourseCard from '../CourseCard/CourseCard';





const CourseList = ({courses}) => {

  return (
    <div className='course-list'>
        <div className='course-list__card'>{courses && courses.map(course => <CourseCard key={course.id} course={course}/>)}</div>
    </div>
  )
}

export default CourseList