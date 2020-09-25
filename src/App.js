import React, { Component } from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {
  state = {
    courses : [
      {name:'HTML'},
      {name: 'CSS'},
      {name: 'JS'}
    ],
    current : '',
    message :''
  }
updateCourse = (e) => {
  if ( e.target.value ==='') {
    this.setState({
      message : 'WARINNNG'
    })
  }
  this.setState({
    current : e.target.value
  })
}
addCourse = (e) => {
  e.preventDefault();
  const current = this.state.current;
  const newcourses = this.state.courses;
   if (current !=='') {
    newcourses.push({name: current});
    this.setState({courses:newcourses, current:'', message:''});
  
   } else {
     this.setState({courses:this.state.courses,current:'', message:'Please Inser A value in Courses Input'})
   }
  }
deleteCourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses:courses
  })
}
editCourse = (index, value) => {
  let courses = this.state.courses;
  let course = courses[index];
   course['name'] = value;
   this.setState({
     courses
   })

}
  render() {
    const courses = this.state.courses;
    const length = this.state.courses.length;
    const allCourses = length ? courses.map( (course, index) => {
      return(
        <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse}/>
      )
    }) : <p>No Item To Show</p>
    return (
      <div className="App">
        <p>ADD / EDIT/ DELETE COURSES</p>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
        <ul>{allCourses}
        </ul>
        <bold className='warinig'>{this.state.message}</bold>
      </div>
    );
    }
}
export default App;
