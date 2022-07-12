import {useState} from 'react';
import "./posts.css";

function posts(props) {  

	return (
    <div  className="posts">
    	<img src={props.image} className="imageOfPost"/>
    	<div className="metaDescription">{props.detail}</div>
    	<div className="ending"></div>
    </div>
  );
}

export default posts;
