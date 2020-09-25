import React, { Component, Fragment } from 'react';

class CourseList extends Component {
    state = {
        isEdit : false
    }
    renderCourses = () => {
        return(
            <li>{this.props.details.name}
            <button className='deletebtn' onClick={() => {this.props.deleteCourse(this.props.index)}} >DELETE</button>
            <button className='updatebtn' onClick={() => {this.toggleState()}} >Update</button>
            {this.length}
            </li>
        )
    }
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }
    updateCourseItem =(e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }
    renderUpdateCourse = () => {
        return (
            <form onSubmit={this.updateCourseItem} className='UpdateFrom'>
                <input type='text' ref={(v) =>{this.input=v}}  defaultValue={this.props.details.name} />
                <button>UpdateCourse</button>
            </form>
        )
    }
    render(){
        const {isEdit} = this.state;
        return(
            <Fragment>
            { isEdit ? this.renderUpdateCourse() : this.renderCourses() }
            </Fragment>
        )
    }
}
export default CourseList;