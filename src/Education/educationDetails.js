import React from 'react'
import Slide from "react-awesome-reveal";


const EducationDetails = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center text-white mt-20 font-poppins">
          <Slide bottom cascade>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">Bachelors in Electronics and Communication Engineering</h2>
                <h2 className="text-xl">Anna University, India</h2>
                <p className="mt-10 opacity-50">
               <b> Activities and societies:</b> Organizer of National Level Tech symposium Pranav-2015, Member of Computer Society of India, Member of Rotary Club.Activities and societies: Organizer of National Level Tech symposium PRAYUDH-2017, Member of Computer Society of India, Member of Rotary Club.
                </p>
                <p className="mt-10 opacity-50">
<b>Academic Project: </b>
Safe Range- Danger Zone Alert System in the Trizonal Area for Fishermen Safety Using RSSI.
This project enhanced the safety of fishermen in the event of them accidentally crossing international borders and locating them at the earliest. The project was coded using Java and Python, was based on historical data relating to Fishermen in South India getting arrested for unintentionally crossing international borders.
               </p>
                <p className="mt-10 opacity-50">
                <b>Course work: </b>             
Operating Systems | Data Structures and Algorithms | Web Programming | Mobile Computing | Theory of Computation | Computer Graphics | Compiler Design | Artificial Intelligence | Grid and Cloud Computing | Graph Theory and Applications | Cryptography and Network Security | object-oriented programming.
                </p>
              </a>
              <a
                href="#"
                className="m-5 p-5 bg-lightblack rounded-xl border cursor-pointer hover:border-purple text-left"
              >
                <h2 className="text-3xl font-bold">MS in Information Systems</h2>
                <h2 className="text-xl">Northeastern University, Boston, MA</h2>
                <p className="mt-10 opacity-50">
                <b>Academic Project: </b>
Social Media App:
Built a REST API using Node.js (Express.js) with endpoints to Add/remove/update posts and used MongoDB Atlas and Developed a minimalistic React SPA (Single Page Application) and used async Axios calls to consume the REST APIs.
</p>
<p className="mt-10 opacity-50">
Blood and Organ Management System:
Designed and Developed a Blood and Organ bank management system using object-oriented programming
design in Java Swing using MySQL database hosted on AWS and Kibana for maintaining logs and dashboards
</p>
<p className="mt-10 opacity-50">
Food Blogging Webapp
•Created a Social media app using Spring Boot and JSP pages as view pages. Used Hibernate for persistence.
Also uploaded the images to the AWS S3 bucket and retrieved the images to view the page.
</p>
<p className="mt-10 opacity-50">
Hostel Management System
Designed ER diagram, created DMLs, DDLs, views, triggers, SPs, and UDFs in SQL server and PHP for views.
</p>
<p className="mt-10 opacity-50">
<b>Course work:</b> 
Application Engineering and Design | Web Development- MERN Stack | programming structures and algorithms | Web Tools and Methods | Database Management and Database Design | Object-Oriented Design.
                </p>
              </a>
            </div>
          </Slide>
        </div>
      )
}

export default EducationDetails