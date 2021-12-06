import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadCourses, saveCourse } from '../../redux/actions/courseActions';
import { loadAuthors } from '../../redux/actions/authorActions';
import CourseForm from './CourseForm';
import { newCourse as initialCourse } from '../../tools/mockData';
import { useNavigate, useParams } from 'react-router-dom';

function ManageCourse({ initialCourse, courses, authors, loadCourses, loadAuthors, saveCourse }) {
    const [ course, setCourse ] = useState({ ...initialCourse });
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    useEffect(
        () => {
            if (courses.length === 0) {
                loadCourses().catch((err) => alert('loading courses failed ' + err));
            } else {
                setCourse({ ...initialCourse });
            }
            if (authors.length === 0) {
                loadAuthors().catch((err) => alert('loading Authors failed ' + err));
            }
        },
        [ initialCourse ],
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse((prevCourse) => ({ ...prevCourse, [name]: name === 'authorId' ? parseInt(value, 10) : value }));
    };
    const handleSave = (e) => {
        e.preventDefault();
        saveCourse(course).then(() => {
            navigate(`/courses`);
        });
    };
    return <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} />;
}
function mapStateToProps({ courses, authors }, { slug }) {
    return {
        initialCourse: slug ? courses.find((c) => c.slug === slug) : initialCourse,
        courses,
        authors,
    };
}
const mapDispatchToProps = {
    loadCourses,
    saveCourse,
    loadAuthors,
};
export function withRouter(Child) {
    return (props) => {
        const { slug } = useParams();
        return <Child {...props} slug={slug} />;
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCourse));
