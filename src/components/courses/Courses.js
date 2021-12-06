import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Navigate } from 'react-router-dom';
class Courses extends Component {
    state = {
        redirectToAddCoursePage: false,
    };
    componentDidMount() {
        const { courses, authors, actions } = this.props;
        if (courses.length === 0) {
            actions.loadCourses().catch((err) => alert('loading courses failed ' + err));
        }
        if (authors.length === 0) {
            actions.loadAuthors().catch((err) => alert('loading Authors failed ' + err));
        }
    }

    deleteCourse = (courseId) => {
        this.props.actions.deleteCourse(courseId);
    };
    render() {
        return (
            <React.Fragment>
                {this.state.redirectToAddCoursePage && <Navigate to="/course" />}
                <h2>Courses</h2>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => this.setState({ redirectToAddCoursePage: true })}>
                    Add Course
                </button>
                <CourseList courses={this.props.courses} onDeleteClick={this.deleteCourse} />
            </React.Fragment>
        );
    }
}
function mapStateToProps({ courses, authors }) {
    return {
        courses:
            authors.length === 0
                ? []
                : courses.map((course) => {
                      return {
                          ...course,
                          authorName: authors.find((author) => course.authorId === author.id).name,
                      };
                  }),
        authors,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
        },
    };
}
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse,
// };
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
