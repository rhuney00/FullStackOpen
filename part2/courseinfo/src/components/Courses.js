import React from 'react';

const Header = ({title}) => {

    return (

        <h1>{title}</h1>

    )

}

const Part = ({text, number}) => {

    return (

        <p>{text} {number}</p>

    )

}

const TotalExercises = ({course}) => {

    const total = course.parts.map(part => part.exercises).reduce((total, num) => total + num) 

    return (

        <p><b>total of {total} exercises</b></p>
    )

}

const Course = ({course}) => {

    return (

        <div>
        <Header title={course.name} />
        {course.parts.map(part => <Part key={part.id} text={part.name} number={part.exercises}/>)}
        <TotalExercises course={course}/>
        </div>

    )

}

const Courses = ({courses}) => {

    return (

        <div>
        {courses.map(course => <Course key={course.id} course={course}/>)}
        </div>
    )

}

export default Courses