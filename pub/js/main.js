////lets display the current time
//var d, h, m, s, color;
//function displayTime() {
//	d = new Date(); //new data object
//	h = d.getHours();
//	m = d.getMinutes();
//	s = d.getSeconds();
//	
//	//add zero to the left of the numbers if they are single digits
//	if(h <= 9) h = '0'+h;
//	if(m <= 9) m = '0'+m;
//	if(s <= 9) s = '0'+s;
//	
//	color = "#"+h+m+s;
//	//set background color
//	document.body.style.background = color;
//	//set time
//	document.getElementById("hex").innerHTML = color;
//	
//	//retrigger the function every second
//	setTimeout(displayTime, 1000);
//}

//The code is not rendering because of source code issues but I really need to ask Logan to step me through the source coding with bower so I can commit this to memory. I am writing out the JavaScript a few times to practice which is helping me uderstand the syntax and I feel more confident in reading the code but still very dim on how to produce this from memory

//First Writeout:

//var d, h, m, s, color;
//function displayTime() {
//    d = new Date(); 
//    h = d.getHours();
//    m = d.getMinutes();
//    s = d.getSeconds();
//    
//    if(h <= 9) h = '0'+h;
//    if(m <= 9) m = '0'+m;
//    if(s <= 9) s = '0'+s;
//    
//    color = "#"+h+m+s
//    
//    document.body.style.background = color;
//    
//    document.getElementById("hex").innerHTML = color;
//    
//    setTimeout(displayTime, 1000);
//}

//Second write out:

//var d, h, m, s, color;
//function displayTime() {
//    d = new Date();
//    h = d.getHours();
//    m = d.getMinutes();
//    s = d.getSeconds();
//    
//    if(h <= 9) h = '0'+h;
//    if(m <= 9) m = '0'+m;
//    if(s <= 9) s = '0'+s;
//    
//    color = "#"+h+m+s
//    
//    document.body.style.background = color;
//    
//    document.getElementById("hex").innerHTML = color;
//    
//    setTimeout(displayTime, 1000);
//    
//}

//Third time's a charm:

//var d, h, m, s, color;
//function displayTime() {
//    d = new Date();
//    h = d.getHours();
//    m = d.getMinutes();
//    s = d.getSeconds();
//    
//    if(h <= 9) h = '0'+h;
//    if(m <= 9) m = '0'+m;
//    if(s <= 9) s = '0'+s;
//    
//    color = "#"+h+m+s
//    
//    document.body.style.background = color;
//    
//    document.getElementById("hex").innerHTML = color;
//    
//    setTimeout(displayTime, 1000);
//}