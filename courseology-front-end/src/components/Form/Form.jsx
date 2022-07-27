import React, { useState } from 'react'
import "./Form.scss"
import Button from "../Button/Button"

const Form = () => {


  const [course, setCourse] = useState({
    createdBy: "",
    title:"",
    price:"",
    description:"",
    overView:""
  })

  let bodyContent = JSON.stringify({
    ...course
  })
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }

  const handleButtonSubmit = async (event) => {
    event.preventDefault()
    console.log(event);
    fetch("http://localhost:8080/courses", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    }).then(function(response) {
      return response.text();
    }).then(function(data) {
      console.log(data);
    })
  }


  return (
    <div className='form-container' >
        <div className='form-container__content'>
        <h2 className='form-container__title'>Add a new Course!</h2>
        <p className='form-container__paragraph'>Just follow the forms suggestions <br /> to add to the list!</p>

        <form className='form-container__form' onSubmit={handleButtonSubmit}>
        <label className='form-container__label' htmlFor="course-created-by">Created by : </label>
        <input name='course-created-by' type="text" onInput={(event) => setCourse({ ...course, createdBy: event.target.value})}/>

        <label className='form-container__label' htmlFor="course-title">Course Title : </label>
        <input name='course-title' type="text" onInput={(event) => setCourse({ ...course, title: event.target.value})}/>

        <label className='form-container__label' htmlFor="course-price">Course price : </label>
        <input type="text" name="course-price"onInput={(event) => setCourse({ ...course, price: event.target.value})}/>

        <label className='form-container__label' htmlFor="course-overview">Course Overview : </label>
        <input id='course-overview' name='course-overview' type="text" onInput={(event) => setCourse({ ...course, overView: event.target.value})}/>


        <label className='form-container__label' htmlFor="course-info">Course info : </label>
        <input id='course-info' type="text" name='course-info' onInput={(event) => setCourse({ ...course, description: event.target.value})}/>

        <div className='form-container__button'><Button onPress={handleButtonSubmit} buttonText={"Submit!!"}/></div>
        </form>
        </div>
    </div>
  )
}

export default Form