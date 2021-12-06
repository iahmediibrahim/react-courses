import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import { bindActionCreators } from 'redux';
class Courses extends Component {
    state = {
        course: {
            title: 'Courses',
        },
    };

    componentDidMount() {
        this.props.actions.loadCourses();

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.actions.createCourse(this.state.course);
    };
    handleChange = (e) => {
        const course = { ...this.state.course, title: e.target.value };
        this.setState({ course });
    };
    render() {
        const { course: { title } } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={title} />
                <button type="submit">Save</button>
                {this.props.courses.map((course) => <div key={course.title}>{course.title}</div>)}
            </form>
        );
    }
}
function mapStateToProps({ courses }) {
    return {
        courses,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
}
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse,
// };
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
