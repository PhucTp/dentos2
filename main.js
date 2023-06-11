var arr_hinh= [
    "./asset/img/beauty/imgb1.jpg",
    "./asset/img/beauty/imgb2.jpg",
    "./asset/img/beauty/imgb3.jpg",
    "./asset/img/beauty/imgs4.jpg",
    "./asset/img/beauty/imgs5.jpg",
    "./asset/img/beauty/imgs6.jpg",
    "./asset/img/beauty/imgs7.jpg",

  ];
  
  var index =1; 
  function next (){
    index++;
    if(index >= arr_hinh.length){
      index = 0;
    }
    var show = document.getElementById('show'); 
    show.src = arr_hinh[index];
  } 
  function prev(){
    index--;
    if(index < 0) index = arr_hinh.length -1;
    var show = document.getElementById('show'); 
    show.src = arr_hinh[index];
  }
  var arr_feedback = [
    "./asset/img/cer/img2.jpg",
    "./asset/img/cer/img3.jpg",
    "./asset/img/cer/img4.jpg",
  
  ];
  var index =1; 
  function hi (){
    index++;
    if(index >= arr_feedback.length){
      index = 0;
    }
    var live = document.getElementById('live'); 
    live.src = arr_feedback[index]; 
  } 
  function bye(){
    index--;
    if(index < 0) index = arr_feedback.length -1;
    var live = document.getElementById('live'); 
    live.src = arr_feedback[index];
  }
  
