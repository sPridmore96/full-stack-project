import React from 'react';
import './CourseCard.scss';

const CourseCard = ({ course }) => {
  const { createdBy, price, title, overView } = course;

  return (
    <div className="course-card">
      <div className="course-card__content">
        <h2>{title}</h2>
        <p>{overView}</p>
      </div>
      <div className="course-card__footer">
        <p>Course Creator : {createdBy}</p>
        <p>Total Cost : £{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;
