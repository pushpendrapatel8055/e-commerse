function bodyOverflowHidden() {
    let b = document.body;
    let checkBox  =document.getElementById("check");
    if( checkBox.checked == true){
        b.style.overflow = "hidden";
       
    }
    else{
        b.style.overflow = "";
    }

}

