import './App.css';
import {useState} from 'react';
import Post from "./posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image_1 from "./Image_1.jpg";
import Image_2 from "./Image_2.jpg";
import Image_3 from "./Image_3.jpg";
import Image_4 from "./Image_4.jpg";
import Image_5 from "./Image_5.jpg";
import Image_6 from "./Image_6.jpg";


function App() {

	const [themeColor,setThemeColor] = useState("#4d4d4d");
	const [themeTextColor,setThemeTextColor] = useState("white");
	const [opacityForWORK,setOpacityForWORK] = useState(1);
	const [opacityForBIO,setOpacityForBIO] = useState(0);

	const [projectsData,setProjectsData] = useState([
			{
				image : Image_1,
				detail : " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",				
			},
			{
				image : Image_6,
				detail : " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",				
			},
			{
				image : Image_3,
				detail : " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",				
			},
			{
				image : Image_4,
				detail : " If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",				
			}
		]);

	const toggleThemeColor = ()=>{
		if(themeColor === "#4d4d4d"){
			setThemeColor("white"); 
			setThemeTextColor("black");
		}
		else { 
			setThemeColor("#4d4d4d"); 
			setThemeTextColor("white");
		}
	}

	const showProjectsArea = ()=>{
		setOpacityForWORK(1);
		setOpacityForBIO(0);
	}
	const showBIOArea = ()=>{
		setOpacityForWORK(0);
		setOpacityForBIO(1);
	}

  return (

    <div style={{ background:themeColor,color : themeTextColor }} className="app">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300;400&display=swap" rel="stylesheet"/>

    	<div className="toggleThemeColorBtn" onClick={toggleThemeColor} ></div>

    	<center><div className="slideshowContainer">
    		<div className="firstImage">
	    		<div className="secondImage">
	    			<div className="thirdImage">
		    			<div className="forthImage"></div>
	    			</div>
	    		</div>
    		</div>
    	</div></center>

    	<div className="welcomeText">Welcome to my Portfolio</div>



    	<div className="navigationBtnArea">
    		<div className="projectsBtn" onClick={showProjectsArea}>Works</div>
    		<div className="bioBtn" onClick={showBIOArea}>BIO</div>
    	</div>

    	<div className="postsCover">
    		<div style={{ opacity : opacityForWORK ,background:themeColor}} className="works">
    			{projectsData.map((work,index)=>{
    				return (
    					<Post image={work.image} detail={work.detail}/>
    				)
    			})}
    			<br/>
    		</div>
    		<div style={{ opacity : opacityForBIO ,background:themeColor }} className="bio">
    			That year the Alfa Romeo Company left the competition, and Enzo Ferrari established his team together with a plant Alfa Romeo team under the name of Scuderia Ferrari. Therefore, the story of Ferrari’s logo began from Alfa Romeo’s racing race cars. It is worth noting the best friend of pilot Francesco Barakka who for many years fought side by side with him in the same regiment used the rampant horse on Ducati motorcycles. However, after the glory of Enzo Ferrari began to rise he took a back seat. The symbols of SF (Scuderia Ferrari) on the Ferrari’s logo, in a translation from Italian, it means Ferrari stable. The logo Ferrari was attached to the first racing car of the Italian company in 1946.
    		</div>
    	</div>
    	

    	<div className="certificatesArea">
    		<div className="leftSide">
    			<div className="leftName">Cartif</div>
				<div className="certificate_1"></div>
				<div className="certificate_2"></div>
    		</div>
    		<div className="rightSide">
    			<div className="rightName">icates</div>
				<div className="certificate_3"></div>
				<div className="certificate_4"></div>
    		</div>
    	</div>

    	<div className="menuArea"></div>
    </div>

  );
}

export default App;
