import {sum,multiply} from './calc'
import './index.css'
import Icon from './veggie.jpg'

console.log(sum(5,10));
console.log(multiply(5,10));

const h1=document.createElement("h1");
h1.innerText="For breakfast, lunch, and dinner – noodles are what we want! #NoodleIsLife";
h1.classList.add("mainhead");

const myIcon=new Image()
myIcon.src=Icon
myIcon.classList.add("icon");

document.getElementById("maindiv").append(myIcon,h1)