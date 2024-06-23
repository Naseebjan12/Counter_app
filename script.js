let count=0;
res_count=document.getElementById('res').textContent;
// alert(res_count)
document.getElementById('inc').onclick=()=>{
    count=count+1;
    document.getElementById('res').textContent=count;


}
document.getElementById('dec').onclick=()=>{
    if(count>0){
        count=count-1;
        document.getElementById('res').textContent=count;
    }
    else{
        alert('Minus is Not Possible to count for someOne');
    }
   


}

document.getElementById('reset').onclick=()=>{
    count=0;
    document.getElementById('res').textContent=count;


}
