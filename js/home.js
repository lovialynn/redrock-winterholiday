function $(Nid) {
    return document.getElementsByClassName(Nid);
}
//ajax函数
function ajax(options) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (options.type == "GET") {
        xhr.open(options.type, options.url + options.data, options.async);
        xhr.send()
    } else if (options.type == "POST") {
        xhr.open(options.type, options.url, options.type);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
    }
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = xhr.responseText;
                options.success(data);
            } else options.error()
        }
    }
}
let maincenterList = document.getElementsByClassName('maincenterList')
//推荐
let recommendCount = 0,recommendSum = ''
function recommend(){
ajax({
    url: 'http://yapi.demo.qunar.com/mock/81332/',
    type: "GET",
    async: true,
    data: 'home',
    success: (data) =>  {
        data = JSON.parse(data)
        console.log(data)
        for (let i = 0; i < data.recommend.length; i++) {
       recommendSum = recommendSum +'<li class="maincenterListcontent">'+'<h3 class="maincenterListcontenttitle">'+data.recommend[i].title+'</h3>' +'<div class="maincenterListcontentC">'+'<div>'+'<img class="maincenterListcontentCimg" src = "'+data.recommend[i].pic+'">'+'</div>'+'<h4 class="maincenterListcontentC21">'+ data.recommend[i].content+'</h4>'+'</div>'+ '<div class="maincenterListcontentbottom">'+'<button class="maincenterListcontentbottom1">'+'<span class="d4up">'+'</span>'+'<p>'+'赞同'+'</p>'+'<p>'+data.recommend[i].like+'</p>'+'</button>'+'<button class="maincenterListcontentbottom1 maincenterListcontentbottom2">'+'<span class="d4down">'+'</span>'+'</button>'+'<ul class="maincenterListcontentbottom3">'+'<li>'+        '<img src="../img/home/评论.png">'+'<p>'+data.recommend[i].comment+'</p>'+'<p>'+'条评论'+'</p>'+'</li>'+'<li>'+'<img src="../img/home/纸飞机.png">'+ '<p>'+'分享'+'</p>'+'</li>'+'<li>' +'<img src="../img/home/收藏.png">'    +'<p>'+'收藏'+'</p>'+'</li>'+ '<li>'+'<img src="../img/home/喜欢.png">'+'<p>'+'喜欢'+'</p>' +'</li>'+'</ul>'+'</div>'+'</li>'
      }
      maincenterList[0].innerHTML = recommendSum
    },
    error: () => {alert('失败')
    }
})}
recommend()

//关注
let followCount = 0,followSum = ''
function follow(){
    ajax({
        url: 'http://yapi.demo.qunar.com/mock/81332/',
        type: "GET",
        async: true,
        data: 'home',
        success: (data) =>  {
            data = JSON.parse(data)
            console.log(data)
            for (let i = 0; i < data.follow.length; i++) {
            
            followSum= followSum + '<li class="maincenterListcontent"><div class="maincenterListcontenttop"><div class="maincenterListcontenttopl"><img src='+data.follow[i].head+'> <div><div class="maincenterListcontenttopl1 row"><h4>'+data.follow[i].name+'</h4><h4>,</h4> <h4>'+data.follow[i].intro+'</h4></div><div class="maincenterListcontenttopl2 row"><h4 class="dot">'+data.follow[i].answer+'回答'+'</h4><h4>'+data.follow[i].follower+ '关注者'+'</h4></div></div></div><div class="maincenterListcontenttopr"><h3>'+'+'+'</h3><h4> 关注</h4></div></div><h3 class="maincenterListcontenttitle">有哪些文艺到爆炸的句子？</h3><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg" src = '+data.follow[i].pic+'></div><h4 class="maincenterListcontentC21">'+ data.follow[i].content+'</h4> </div></li>'
       
          }
          maincenterList[0].innerHTML = followSum
        },
        error: () => {alert('失败')
        }
    })}


    $('maincenterBanner1')[1].addEventListener('click',function(){
    turnblue($('maincenterBanner1')[1])
    follow()
})
//热榜
    $('maincenterBanner1')[2].addEventListener('click',function(){
    turnblue($('maincenterBanner1')[2])
    ajax({
        url: 'http://yapi.demo.qunar.com/mock/81332/',
        type: "GET",
        async: true,
        data: 'home',
        success: (data) =>  {
            data = JSON.parse(data)
            console.log(data)
            let sum = ''
            
            for (let i = 0; i < data.hot.length; i++) {
                let count = i+1;
            sum = sum +  '<li><div class="lineW"></div><div class="hot"><div class="row"><div class="number"><h2>'+count+'</h1></div><div class="hotContent"><h3>'+data.hot[i].head+'</h3><button class="learnMore">'+data.hot[i].content+'</button><div class="hotContentbottom"><button><svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><defs><linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%"y1="-13.472%" y2="117.368%"> <stop offset="2.35%" stop-color="#EC471E"></stop><stop offset="100%" stop-color="#FF6DC4"></stop></linearGradient></defs><path d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>置顶</button><button><svg fill="currentColor"viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"fill-rule="evenodd"></path></svg>分享</button></div></div></div><div><img class="hotPic" src='+ data.hot[i].pic+'></div></div></li>'
}
          let head = '<div class="maincenterListhead rowb"> <div><button class="maincenterListheadbtn active">全站</button><button class="maincenterListheadbtn">科学</button><button class="maincenterListheadbtn">数码</button><button class="maincenterListheadbtn">体育</button><button class="maincenterListheadbtn">时尚</button><button class="maincenterListheadbtn">影视</button> </div><button class="more">展开<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd"></path></svg></button></div>'
          maincenterList[0].innerHTML = head+sum
        },
        
        error: () => {alert('失败')
        }
    })
})
// //点击变蓝
function turnblue(obj){
    for(let i = 0;i<$('maincenterBanner1').length;i++){
        $('maincenterBanner1')[i].className = 'maincenterBanner1'
    }
    obj.className = 'maincenterBanner1 active'}
//点击显示内容
$('maincenterBanner1')[0].addEventListener('click',function(){
    recommend()
    turnblue($('maincenterBanner1')[0])
})
//点击变蓝 变内容
//关注
$('maincenterBanner1')[1].addEventListener('click',function(){
    turnblue($('maincenterBanner1')[1])
    maincenterList[0].innerHTML = ''
})

//判断向上滑还是向下
let scrollTop1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
,scrollTop2
let clientHeight = document.documentElement.clientHeight || document.body.clientHeight
let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

let  scrollBottom1 =  document.documentElement.scroll || document.body.scrollTop
window.addEventListener('scroll',function(){
    clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
              scrollTop2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    if (scrollTop2>scrollTop1) {//向下
                       
                            $('bigBannercenter')[0].style.transform = 'translateY(-53.3px)';
                    }
                    if(scrollTop2<scrollTop1) {
                      
                        $('bigBannercenter')[0].style.transform = 'translateY(0px)';
                    }
                scrollTop1 = scrollTop2;
                scrollTop1 = Math.round(scrollTop1)
                if($('maincenterBanner1')[0].className == 'maincenterBanner1 active'){
                if(scrollTop1 + clientHeight ==scrollHeight){
                           recommend()
                          
                            } }
                if($('maincenterBanner1')[1].className == 'maincenterBanner1 active'){
                                if(scrollTop1 + clientHeight ==scrollHeight){
                                           follow()
                                          
                                            } }
                //滑动超过一定高度后 出现TOP键
    
                if(scrollTop1>'200'){
                    $('other')[0].style.bottom = 0
                }
                else{
                    $('other')[0].style.bottom = '-50px'
                }
                });
        //推荐 懒加载

        

           
    //退出 点击出现
    function inline(obj1,obj2){
         obj1.addEventListener('click',function(){
        obj2.style.display = 'block'
    event.stopImmediatePropagation()}) 
    obj2.addEventListener('click',function(){
    event.stopImmediatePropagation()}) 
        document.body.addEventListener('click',function(){
            obj2.style.display = 'none'})
    }
    inline($('personimg')[0],$('banner3person')[0])

    //回到顶部
    $('otherbtn2')[0].addEventListener('click',function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })

    //提问 如何让点击那个后 input就聚焦
    $('questionLC3')[0].addEventListener('click',function(){
        $('questionLC3')[0].style.display = 'none'
        $('questionLC3_b')[0].style.display = 'inline'
    })
$('questionLC3_binp')[0].addEventListener('blur',function(){
    $('questionLC3')[0].style.display = 'inline'
    $('questionLC3_b')[0].style.display = 'none'
})
   //提问
   $('questionLC2')[0].addEventListener('click',function(){
    $('questionLC2')[0].style.border = 'solid 1px #8590a6';
    event.stopImmediatePropagation();
  
   })
   document.body.addEventListener('click',function(){
    
    $('questionLC2')[0].style.border = 'solid 1px #dbdada';
   })
   //提问 跳出弹窗  
  $('bannerInpbtn')[0].addEventListener('click',function(){
      $('cover')[0].style.display = 'inline'
      $('bigquestion')[0].style.display = 'inline'
  })
  $('questionR')[0].addEventListener('click',function(){
    $('cover')[0].style.display = 'none'
    $('bigquestion')[0].style.display = 'none'
  })
  //跳出Aa那个
  let Aanum = 0
  $('questionLC1btn')[0].addEventListener('click',function(){
      if(Aanum == 0){
    $('questionLC1btnsvg')[0].style.fill = '#0084ff';
    $('bigquestionLAa')[0].style.display = 'inline'
 Aanum++}
 else{
    $('questionLC1btnsvg')[0].style.fill = '#8590a6';
    $('bigquestionLAa')[0].style.display = 'none';
    Aanum = 0;
 }
  })
  //跳出写文章
  $('writeAri')[0].addEventListener('click',function(){
      window.location.href='writeArt.html'
  })
  //跳出主页
  $('banner3personitem')[0].addEventListener('click',function(){
    window.location.href='person.html'
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
  
