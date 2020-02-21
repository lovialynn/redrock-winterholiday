// function openFile(filename){          
//     try{   
//         var obj=new  ("wscript.shell");
//         console.log(obj)   
//         if(obj){   
//             obj.Run("\""+filename+"\"", 1, false );
//             console.log("\""+filename+"\"")  
//             obj=null;   
//         }   
//     }catch(e){   
//         alert("请确定是否存在该盘符或文件");   
//     }   
      
// } 
function $(Nid) {
    return document.getElementsByClassName(Nid);
}
$('mainAdd')[0].addEventListener('click',function(){
    openFile()
})

 //富文本编辑器
 function text(obj,way){
    obj.addEventListener('click',function(){
        if(obj.className == way){
  document.execCommand(way, false, null);
  obj.style.color = '#0084ff'
  obj.className = way + ' '+'active'
  }
  else{
      obj.className = way;
      obj.style.color = '#8590a6'
  
  }
    })}
    text($('bold')[0],'bold')
    text($('italic')[0],'italic')
    text($('insertOrderedList')[0],'insertOrderedList')//没用