import React from 'react'

const Cards = ({courses}) => {

    //now currently we have all the data in segregated form, but in the main view we want all the data(not segregated form)
    //hence we first merge all the data and create a new data1

    const getCourses = ()=>{
        //now we are dealing with 2 arrays, first the categories ka array and then uss category ke andar ke data ka 
        //array, hence 2 baar forEach Loop lagayenge

        let allCourses = [];

        Object.values(courses).forEach( (courseCategory) =>{
            //now hamein ek course Category muil gyi, now we traverse data inside of this 
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            }) 
        })
        return allCourses;

    };

  return (
    <div>

    </div>
  )
}

export default Cards