import React from 'react'

const CourseForm = (props) => {
    return(
        <form onSubmit={props.addCourse} className='AddFrom'>
            <input placeholder='Write Course Here !' type='text' onChange={props.updateCourse} value={props.current || ''}/>
            <input type='submit' />
        </form>
    )
}
export default CourseForm