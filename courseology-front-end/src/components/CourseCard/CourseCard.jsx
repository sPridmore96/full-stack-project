import React from 'react';
import './CourseCard.scss';
import {Link} from "react-router-dom";
import testingImg from "../../assets/imgs/test-photo.jpg"

const CourseCard = ({ course }) => {
  const { createdBy, price, title, overView, id } = course;


  return (
    <Link className="course-card" to={`localhost:3000/:${id}`}>
      <img className='course-card__img' src={testingImg} alt="" />
      <div className="course-card__content">
        <h2>{title}</h2>
        <p>{overView}</p>
      </div>
      <div className="course-card__footer">
        <p>Course Creator : {createdBy}</p>
        <p>Total Cost : £{price}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
