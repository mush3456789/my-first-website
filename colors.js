function nighthdayhandler(self){
    var target=document.querySelector('body');
    if (self.value==='night'){
    Body.setBackgroundcolor('black');
   Body.setColor('white');
   self.value='day';
   links.setColor('white');
}
    else{
    Body.setBackgroundcolor('white');
   Body.setColor('black');
   self.value='night';
   links.setColor('black');
}
}
var Body={
    setColor:function(color){
    document.querySelector('body').style.color=color;
},
    setBackgroundcolor:function(color){
    document.querySelector('body').style.backgroundColor=color;
}
}
var links={
    setColor(color){
    var alist = document.querySelectorAll('a');
   var i=0;
   while(i<alist.length){
    alist[i].style.color=color;
    i=i+1;
   }
}
}