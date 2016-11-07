/*
 * Brandon Ho
 */
function openFunction() {
    array = [];
    counter = 0;
    document.getElementById("Previous").disabled = true;
    document.getElementById("Next").disabled = true;
    document.getElementById("countDisplay").innerHTML = counter;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 800, 600);
    blankImage = ctx.getImageData(0, 0, 800, 600);
    
   
    
    if (document.getElementById("list1").value !== null)
    { 
//       
//       var str = document.getElementById("list1").value.toString();
//        var newString = str.substring(1, str.length-1);
//            
//          var img = new Image;
//          img.src =''+ newString +'';
//          array[0] = img;
//          
//          img.onload = function(){
//              ctx.drawImage(img, 0, 0);
//          };
//        console.log(someAr);
        //array = img;
        
        //document.getElementById("list1").value.split("=,");
       // console.log(array);
                   
        //var str = document.getElementById("list1").value;
                
       // count = 0;
    //---------
      
        //IN PROGRESS//load();
       
    }

}

function check(num) {
    if (num < 9)
    {
        num = "0" + num;
    }
    return num;
}


function forward() {

    document.getElementById("Previous").disabled = false;
    if (counter === array.length) {
        var x = "New Slide";
        document.getElementById("Next").innerHTML = x;
        newSlide();
    } else if (array.length > counter) {
        var x = "Next Slide";
        document.getElementById("Next").innerHTML = x;
        nextSlide();
    }

    document.getElementById("countDisplay").innerHTML = counter;
    if (flagA === false) {
        if (counter >= array.length)
            document.getElementById("Next").disabled = true;

    }

}

function DateCreator()
{
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = check(date.getDate());
        var hours = check(date.getHours());
        var minutes = check(date.getMinutes());
        var seconds = check(date.getSeconds());

        document.getElementById("ProProjectName").value = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

function newSlide() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    imgData = ctx.getImageData(0, 0, 800, 600);
    array.push(imgData);
    document.getElementById("content").value = c.toDataURL();

    console.log(Object.prototype.toString.call(document.getElementById("curProjectID").value));
    console.log(Object.prototype.toString.call(document.getElementById("LatestProjectID").value));
    console.log(Object.prototype.toString.call(document.getElementById("ProjectID").value));

    console.log(document.getElementById("curProjectID").value);
    console.log(document.getElementById("LatestProjectID").value);
    console.log(document.getElementById("ProjectID").value);


    if (document.getElementById("curProjectID").value === "0")
    {
        document.getElementById("ProjectID").value = new String(document.getElementById("LatestProjectID").value.toString());
        document.getElementById("ProProjectID").value = new String(document.getElementById("LatestProjectID").value.toString());
        document.getElementById("curProjectID").value = new String(document.getElementById("ProjectID").value.toString());

        
        console.log(document.getElementById("ProjectID").value);
        console.log(document.getElementById("ProProjectName").value);

    } else
    {
        document.getElementById("ProjectID").value = new String(document.getElementById("curProjectID").value.toString());
        console.log(document.getElementById("ProjectID").value);

    }

    DateCreator();
    
    counter++;
    ctx.clearRect(0, 0, 800, 600);
    flagA = false;

}

function nextSlide() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    counter++;
    if (array[counter] !== undefined)
        ctx.putImageData(array[counter], 0, 0);
    else
        ctx.putImageData(blankImage, 0, 0);

    flagA = false;

}


function compareImages(img1, img2) {
    if (img1.data.length !== img2.data.length)
        return false;
    for (var i = 0; i < img1.data.length; ++i) {
        if (img1.data[i] !== img2.data[i])
            return false;
    }
    return true;
}

function previous() {

    previousNoChange();

    if (counter === 0)
        document.getElementById("Previous").disabled = true;
    document.getElementById("countDisplay").innerHTML = counter;
}

function previousNoChange() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    if (counter !== 0) {
        counter--;
        ctx.putImageData(array[counter], 0, 0);
    }

}



function previousWithChange() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    imgData = ctx.getImageData(0, 0, 800, 600);
    array[counter].add(imgData);

    counter--;
    ctx.clearRect(0, 0, 800, 600);
    flagA = false;

}





function save() {
   images = array.length;
    var c = document.getElementById("myCanvas");
    document.getElementById("content2").value = c.toDataURL();

    for (var i = 0; i < array.length; i++) {

        var ctx = c.getContext("2d");
        ctx.putImageData(array[i], 0, 0);
        images[i] = array[i];
    }
    openFunction();

    counter = 0;
}
function load() {
    //DATA URL can be loaded and displayed, but not fully for more than 1 image
    
//     counter = 0;
//     
//    var img = new Array();
//        var str = document.getElementById("list1").value.toString();
//        var newString = str.substring(1, str.length-1);
//        var someAr = newString.split(',').toString();
//        console.log(someAr);
//        
//    //images = array.length;
//        var IM;
//        
////        for(var j = 0; j < someAr.length; j--)
////        {
////            IM[j] = someAr[j++] + "," + someAr[j++]; 
////        }
//
//IM[0] = someAr[0] + ","+someAr[1];
//        
//        //img.src = newString;
//       // array[0] = img;
////        img.onload = function(){
////             ctx.drawImage(img, 0, 0);
////         };
//    
//    var canvas = document.getElementById('myCanvas');
//    var ctx = canvas.getContext('2d');
//
//    for (var i = 0; i < IM.length; i++) {//variale images is temporary, will be replaced with SQL data stream
//        img[i] = new Image;
//        img[i].src = IM[i];
//        
//        array[i] = img[i];
//        counter = 0;
//        //counter++;  
//    }
}

function end()
{
    document.getElementById("list1").value = new String(null);
}

