import React from 'react';
import { useSelector } from 'react-redux';

function CourseList() {

    const courses = useSelector(state => state.data);

    return (
        <>
            <ul>
                {courses.map((course, index) => <li key={index}>{course}</li>)}
            </ul>
        </>
    );
}

export default CourseList;