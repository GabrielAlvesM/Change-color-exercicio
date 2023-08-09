//Get date of the year
var date = new Date();
var day  = date.getDay();
var month = date.getMonth() + 1;
var Year = date.getFullYear();

//seasons preset
var fall = 3;
var winter = 6;
var spring = 9;
var summer = 12;

//var to put the color of the seasons
var color;

if((month >= fall) && (month < winter)){
    color =  "#c0dd5d";
} 
else if ((month >= winter) && (month < spring)){
    color = "#9dbce3";
}
else if((month >= spring) && (month < summer)){
    color = "#ffd6ef";
} else if((month >= summer) && (month < fall) || (month == 12)){
    color = "#fdf080"
}
document.body.style.backgroundColor = color;