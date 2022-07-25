import React from 'react';
import './CourseCard.scss';
import {Link} from "react-router-dom";

const CourseCard = ({ course }) => {
  const { createdBy, price, title, overView, id } = course;


  return (
    <Link to={`localhost:3000/:${id}`}>
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
    </Link>
  );
};

export default CourseCard;
