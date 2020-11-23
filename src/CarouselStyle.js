import react, {useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "./assets/chillupdate.png";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import Button from "react-bootstrap/Button";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineMail} from "react-icons/ai";
import icons from "./assets/programming.svg";
import {Link} from "react-router-dom";


const Carousels = () => {

    const[index, setIndex] = useState(1);
    const  handleSelect = (selected, e) => {
      setIndex(selected);
    }

return (
    


<Carousel  activeIndex={index} onSelect={handleSelect}  style={
    {display: "flex"},
    {height:"500px"},
    {position: "relative"}
}>
<Carousel.Item style={ {display:"flex"},
           {justifyContent: "space-between"},
           {flexDirection: "row"}
       }>
         <img 
         className="d-block w-100"
         style={{height: "500px"},
        {opacity: "0.7"}}
         alt="First "
         src={photo1} />
       <Carousel.Caption style={ {display:"flex"},
           {justifyContent: "space-around"},
           {flexDirection: "row"}
       }>
        
       <Button variant="dark" style={
           {backgroundColor: "#AC8991"},
           
           {marginRight: "30px"}
           
       } onClick={(e) => (window.location = "https://github.com/Tamtnguye/redesign-chill" )}><AiFillGithub size={30} /></Button> 
       <Button variant="info" onClick={(e) => (window.location = "http://chillymobile.s3-website.us-east-2.amazonaws.com/" )}><img style={
           {height:"30px"}
           
       } src={icons} alt="web app"/></Button></Carousel.Caption>
     </Carousel.Item>
     {/* */}
     <Carousel.Item style={ {display:"flex"},
           {justifyContent: "space-between"},
           {flexDirection: "row"}
       }>
         <img 
         className="d-block w-100"
         style={{maxheight: "300px"},
        {opacity: "0.7"}}
         alt="2nd "
         src={photo2} />
       <Carousel.Caption style={ {display:"flex"},
           {justifyContent: "space-around"},
           {flexDirection: "row"}
       }>
        
       <Button variant="dark" style={
           {backgroundColor: "#AC8991"},
           
           {marginRight: "30px"}
           
       } onClick={(e) => (window.location = "https://github.com/Tamtnguye/redesign-chill" )}><AiFillGithub size={30} /></Button> 
       <Button variant="info" onClick={(e) => (window.location = "http://chillymobile.s3-website.us-east-2.amazonaws.com/" )}><img style={
           {height:"30px"}
           
       } src={icons} alt="web app"/></Button></Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item style={ {display:"flex"},
           {justifyContent: "space-between"},
           {flexDirection: "row"}
       }>
         <img 
         className="d-block w-100"
         style={{height: "400px"},
        {opacity: "0.7"}}
         alt="3rd "
         src={photo3} />
       <Carousel.Caption style={ {display:"flex"},
           {justifyContent: "space-around"},
           {flexDirection: "row"}
       }>
        
       <Button variant="dark" style={
           {backgroundColor: "#AC8991"},
           
           {marginRight: "30px"}
           
       } onClick={(e) => (window.location = "https://github.com/Tamtnguye/redesign-chill" )}><AiFillGithub size={30} /></Button> 
       <Button variant="info" onClick={(e) => (window.location = "http://chillymobile.s3-website.us-east-2.amazonaws.com/" )}><img style={
           {height:"30px"}
           
       } src={icons} alt="web app"/></Button></Carousel.Caption>
     </Carousel.Item>
</Carousel>


)

}
export default Carousels;