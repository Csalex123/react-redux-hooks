import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseaction(title){
    return {type: "ADD_COURSE", title}
}

function CourseList() {
    const courses = useSelector(state => state.data);
    const dispatch = useDispatch();

    function addCourse(){
        dispatch(addCourseaction('Node.js'))
    }

    return (
        <>
            <ul>
                {courses.map((course, index) => <li key={index}>{course}</li>)}
            </ul>

            <button type="button" onClick={addCourse}> 
                Adicionar curso
            </button>
        </>
    );
}

export default CourseList;