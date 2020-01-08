import React from 'react';
import profile from '../profile.jpeg';

const About = () => {

  return (
    <div className="container">
      <div>
       
        <div className="general">
          <h4>General</h4>
          <img src={profile} alt="myimage" />
          <p>
            Hey, my name is Ziv Katzav and I am from Tel Aviv.
            My first interaction with web development was in sixth grade (HTML class)
            , but since I have been dealing with the routine of living in Israel
           (school, army, work, work etc.), and I went back to the field recently. In my spare time, I love to hear music and cook,
           usually it happens together. I entered the programming world out of love for
           small details and a desire to learn and develop all the time. Recently I
           completed a FULLSTACK Web Development course and I am interested in finding
           a job in the field.
        </p>
        </div>

        <hr />

        <div className="professional">
          <h4>Professional</h4>
          <p><span>Frameworks:</span> React & MobX, Next.js.</p>
          <p><span>Client Side:</span> JavaScript (ES5/6), jQuery, HTML5, CSS, Bootstrap.</p>
          <p><span>Server Side and DataBase:</span> Node.js, Express, MongoDB, Mongoose, SQL.</p>
          <p><span>Tools: </span> Git, working in collaboration in Github, Heroku, Firebase.</p>
        </div>
      
      </div>
    </div>
  );
}

export default About;