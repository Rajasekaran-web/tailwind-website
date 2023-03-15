function menuClick(){
 let menu=document.getElementById("mobilemenu")
 if(menu.classList.contains("hidden")){
    menu.classList.remove('hidden')
 }else{
    menu.classList.add('hidden')
 }
}