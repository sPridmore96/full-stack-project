
import React from 'react'
import Button from '../Button/Button'
import testPhoto from "../../assets/imgs/test-photo.jpg"

import "./FullCourseOverviewCard.scss"

const FullCourseOverviewCard = ({foundCourseData}) => {
  return (
    <div className='full-course-overview'>
        <img src={testPhoto} alt="" />
    <h2 className='full-course-overview__title'>{foundCourseData.title}</h2>
    <h3 className='full-course-overview__sub-title'>{foundCourseData.createdBy}</h3>
    <p className='full-course-overview__info'>{foundCourseData.description}</p>
    <h4 className='full-course-overview__sale-title'>Start Learning today!</h4>
    <div className='full-course-overview__button'><Button buttonText={"Buy!"}/></div>
    </div>
  )
}

export default FullCourseOverviewCard