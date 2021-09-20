canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
background_image="mars.jpg";
rover_image="rover.png";
height_rover=150;
weidth_rover=100;
rover_x=10;
rover_y=10;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=upload_background;
    background_imgTag.src=background_image;

   rover_imgTag=new Image();
   rover_imgTag.onload=upload_rover;
   rover_imgTag.src=rover_image;
}
function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,weidth_rover,height_rover);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
console.log(key_pressed);
if (key_pressed=='40'){
    down_key();
    console.log("down_key");
}
if (key_pressed=='38'){
    up_key();
    console.log("up_key");
}
if (key_pressed=='37'){
    left_key();
    console.log("left_key");
}
if (key_pressed=='39'){
    right_key();
    console.log("right_key");
}
}
function up_key(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }

}
function down_key(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }

}
function left_key(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }

}
function right_key(){
    if(rover_x<=750){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }

}