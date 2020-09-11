import React from 'react'

const Form = (props) => {
    return (
      <form onSubmit={props.getWeather}>
          <input
          type='text'
          placeholder='city'
          name='city'
          />
          <input
          type='text'
          placeholder='country'
          name='country'
          />
          <button>Submit</button>
      </form>  
    )
}

export default Form;

// Props allows the passing of API data to the app container
// The form will take the city and country and submit the query to the API