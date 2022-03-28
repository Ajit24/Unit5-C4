// User should be able to add/create new meetups 
import axios from "axios"
import { useState } from "react";

export const AddMeetup = () => {
  const [formData,setFormData]=useState({
    title:"",
    location:"",
    date:"",
    time:"",
    theme:"",
    description:"",
    image:""
  })

  const handleChange=(e)=>{
    const {className,value}=e.target
    setFormData({...formData,
      [className]:value
    })

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/meetups",formData)
  }

  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={handleChange} value={formData.title} required />
        <label>Location</label>
        <select value={formData.location} className="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handleChange}
          placeholder="format YYYY-MM-DD"
          value={formData.date}
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={formData.theme} className="theme" onChange={handleChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};