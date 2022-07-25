

import React from 'react'

import "./FullCourseOverviewCard.scss"

const FullCourseOverviewCard = ({foundCourseData}) => {
  return (
    <div>
    <h2>{foundCourseData.title}</h2>
    <h3>{foundCourseData.createdBy}</h3>
    <p>{foundCourseData.description}</p>

    </div>
  )
}

export default FullCourseOverviewCard