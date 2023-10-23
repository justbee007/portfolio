import React from 'react'
import Project from './project'
import aed1 from '../../images/aed1.png'
import piNNit from '../../images/dart.png' 
import website from '../../images/dmdd.png'
import kafka from '../../images/Kafka.jpeg'
import shopping from '../../images/shopping.jpg'
import social from '../../images/social.jpeg'
import ecommerece from '../../images/store.png'
import {Slide} from "react-awesome-reveal";
const ProjectData = ({Title,Info1,Info2,Img1,Title2,Info3,Info4,Img2}) => {
  return (
      <div>
        <Slide>
        <Project 
        Title="Ecommerce Site"
        Info1="A place where we can purchase different products. "
        Info2="Built a Spring application to create users roles, user , login as indiviual user and purchase products."
        link1="https://github.com/justbee007/Shop"
        Img1={ecommerece}
        Title2="Blood Management system"
        Info4="Designed and Developed a Blood and Organ bank management system using object-oriented programming
        design in Java Swing using MySQL database hosted on AWS and Kibana for maintaining logs and dashboards"
        link2=""
        Img2={aed1}
        
        ></Project>
        
        

        <Project 
        Title="Social Media Webapp"
        Info1="Created a Social media app using Spring Boot and JSP pages as view pages. Used Hibernate for persistence.
        Also uploaded the images to the AWS S3 bucket and retrieved the images to view the page"
        Img1={social}
        link1=""
        Title2="Hostel Management System"
        Info3="Developed MSSQL server and PHP for UI"
        Info4="Designed ER diagram, created DMLs, DDLs, views, triggers, SPs, and UDFs in SQL server and PHP for views"
        Img2={website}
        link2=""
        ></Project>

<Project 
        Title="Kafka Spring boot"
        Info1="hands on of a Rest application to publish and subsribe messages to Kafka Cluster"
        Info2="Created a Rest controller where we can publish messages to the kafka topic, also created Consumer API to consume the messages published in the Topic"
        Img1={kafka}
        link1=""
        Title2="Shopping cart app in spring MVC"
        Info4="Designed a Spring MVC project where we can purchase shop for items and billed for the items"
        Img2={shopping}
        link2=""
        ></Project>
        </Slide>
    </div>
  )
}

export default ProjectData