import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export const loadCoursesSuccess = (courses) => {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
};
export const createCourseSuccess = (course) => {
    return { type: types.CREATE_COURSE_SUCCESS, course };
};
export const updateCourseSuccess = (course) => {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
};
export const deleteCourseSuccess = (id) => {
    return { type: types.DELETE_COURSE_SUCCESS, id };
};
export function loadCourses() {
    return function(dispatch) {
        return courseApi
            .getCourses()
            .then((courses) => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch((err) => {
                throw err;
            });
    };
}
export function saveCourse(course) {
    return function(dispatch) {
        return courseApi
            .saveCourse(course)
            .then((savedCourse) => {
                course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
            })
            .catch((err) => {
                throw err;
            });
    };
}
export function deleteCourse(courseId) {
    return function(dispatch) {
        return courseApi
            .deleteCourse(courseId)
            .then((resp) => {
                dispatch(deleteCourseSuccess(courseId));
            })
            .catch((err) => {
                throw err;
            });
    };
}
