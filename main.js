
function setup(){
    canvas=createCanvas(400, 400);
    canvas.position(100,300)
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    }
    
    function draw(){
    image(video, 0,0,400,400);
    tint(tint_color);
    }
    
    function take_snapshot(){
        save('Manya_Filter_App_.png');
    }
    
    
    function change(){
        tint_color= document.getElementById("colour").value;
    }