import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    const [allMeet,setAllMeet] = useState([])
    console.log(allMeet)
    useEffect(()=>{
        axios.get('http://localhost:8080/meetups').then(res=>{
            setAllMeet(res.data)
        })
    },[])
  return (
    <div className="homeContainer">
      {[...allMeet]
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
                <div style={
                    {
                        display:'flex',
                        border:'1px solid red'
                    }
                }>
                    <p>{el.title}</p>
                    <p>{el.location}</p>
                    <p>{el.date}</p>
                    <p>{el.time}</p>
                    <p>{el.theme}</p>
                    <p>{el.description}</p>
                    <p>{el.image}</p>
                </div>
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            // value={"add your value here"}  // add value here
            onChange={(e) => {
                axios.get(`http://localhost:8080/meetups?location=${e.target.value}`).then(res=>{
                    setAllMeet(res.data)
                })
             }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addMeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">

          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};