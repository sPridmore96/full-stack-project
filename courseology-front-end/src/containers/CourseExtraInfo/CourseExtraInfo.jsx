import { type } from '@testing-library/user-event/dist/type/index.js';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FullCourseOverviewCard from '../../components/FullCourseOverviewCard/FullCourseOverviewCard.jsx';
import Header from '../../components/Header/Header.jsx';

const CourseExtraInfo = () => {
  const [courseInfo, setCourseInfo] = useState({});

  const { courseId } = useParams();

  useEffect(() => {
    const getIndividualCourse = async () => {
      let url = `http://localhost:8080/courses/${courseId}`;
      const res = await fetch(url);
      const data = await res.json();
      setCourseInfo(data);
    };
    getIndividualCourse();
  }, [courseId]);
console.log(courseInfo);
  return (
    <div>
      <Header />
      <div>
        <FullCourseOverviewCard foundCourseData={courseInfo} />
      </div>
    </div>
  );
};

export default CourseExtraInfo;
