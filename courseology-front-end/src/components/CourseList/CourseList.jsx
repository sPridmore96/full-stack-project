import React from 'react'
import "./CourseList.scss"
import CourseCard from '../CourseCard/CourseCard';



const CourseList = ({courses}) => {

  return (
    <div className='course-list'>
        {courses && courses.map(course => <CourseCard key={course.id} course={course}/>)}
    </div>
  )
}

export default CourseList