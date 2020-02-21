function $(Nid) {
    return document.getElementsByClassName(Nid);
}
let scrollTop1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
,scrollTop2
        setInterval(() => {
              scrollTop2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    if (scrollTop2>scrollTop1&&scrollTop1>'200') {
                        
                        $('bigBannercenter')[0].style.transform = 'translateY(-53.3px)';
                    }
                    if(scrollTop2<scrollTop1) {
                        $('bigBannercenter')[0].style.transform = 'translateY(0px)';
                    }
                scrollTop1 = scrollTop2;  
                //滑动超过一定高度后 出现TOP键
    
                if(scrollTop1>'200'){
                    $('other')[0].style.bottom = 0
                }
                else{
                    $('other')[0].style.bottom = '-50px'
                }
                }, 10);
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

    //回答 
    function myactive(){
        $('mainLeftcenter')[0].innerHTML = '<h4 class="myactive">我的动态</h3><div class="lineW"></div><ul><li><div class="myactiveCollect"><h4>收藏了了文章</h4><h4>2个月前</h4></div><h2 class="fw600">有哪些文艺到爆炸的句子？</h2><div class="myactiveInf row"><img class="myactiveHead"><div><h4 class="fw600">噜噜噜</h4><h4>不知道说啥，先空着吧！</h4></div></div><h4>404 人也收藏了该文章</h4><div class="maincenterListcontent"><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg"src="../img/home/v2-75bd20d3efb4ac2dcf85b22439a3bbe7_hd.jpg"></div><h4 class="maincenterListcontentC21">1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被点亮。后来才发现那是我眼睛里的光，可那又如何，我爱慕的是你，而非你发着光的模样。1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被...</h4></div><div class="maincenterListcontentbottom"><button class="maincenterListcontentbottom1"><span class="d4up"></span><p>赞同</p><p>2.9k</p></button><button class="maincenterListcontentbottom1 maincenterListcontentbottom2"><span class="d4down"></span></button><ul class="maincenterListcontentbottom3"><li><img src="../img/home/评论.png"><p>225</p><p>条评论</p></li><li><img src="../img/home/纸飞机.png"><p>分享</p> </li><li><img src="../img/home/收藏.png"><p>收藏</p></li><li><img src="../img/home/喜欢.png"><p>喜欢</p></li></ul></div><div class="lineW"></div></li><li><div class="myactiveCollect"><h4>收藏了了文章</h4><h4>2个月前</h4></div><h2 class="fw600">有哪些文艺到爆炸的句子？</h2><div class="myactiveInf row"><img class="myactiveHead"><div><h4 class="fw600">噜噜噜</h4><h4>不知道说啥，先空着吧！</h4></div></div><h4>404 人也收藏了该文章</h4><div class="maincenterListcontent"><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg"src="../img/home/v2-75bd20d3efb4ac2dcf85b22439a3bbe7_hd.jpg"></div><h4 class="maincenterListcontentC21">1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被点亮。后来才发现那是我眼睛里的光，可那又如何，我爱慕的是你，而非你发着光的模样。1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被...</h4></div><div class="maincenterListcontentbottom"><button class="maincenterListcontentbottom1"><span class="d4up"></span><p>赞同</p><p>2.9k</p></button><button class="maincenterListcontentbottom1 maincenterListcontentbottom2"><span class="d4down"></span></button><ul class="maincenterListcontentbottom3"><li><img src="../img/home/评论.png"><p>225</p><p>条评论</p></li><li><img src="../img/home/纸飞机.png"><p>分享</p> </li><li><img src="../img/home/收藏.png"><p>收藏</p></li><li><img src="../img/home/喜欢.png"><p>喜欢</p></li></ul></div><div class="lineW"></div></li><li><div class="myactiveCollect"><h4>收藏了了文章</h4><h4>2个月前</h4></div><h2 class="fw600">有哪些文艺到爆炸的句子？</h2><div class="myactiveInf row"><img class="myactiveHead"><div><h4 class="fw600">噜噜噜</h4><h4>不知道说啥，先空着吧！</h4></div></div><h4>404 人也收藏了该文章</h4><div class="maincenterListcontent"><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg"src="../img/home/v2-75bd20d3efb4ac2dcf85b22439a3bbe7_hd.jpg"></div><h4 class="maincenterListcontentC21">1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被点亮。后来才发现那是我眼睛里的光，可那又如何，我爱慕的是你，而非你发着光的模样。1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被...</h4></div><div class="maincenterListcontentbottom"><button class="maincenterListcontentbottom1"><span class="d4up"></span><p>赞同</p><p>2.9k</p></button><button class="maincenterListcontentbottom1 maincenterListcontentbottom2"><span class="d4down"></span></button><ul class="maincenterListcontentbottom3"><li><img src="../img/home/评论.png"><p>225</p><p>条评论</p></li><li><img src="../img/home/纸飞机.png"><p>分享</p> </li><li><img src="../img/home/收藏.png"><p>收藏</p></li><li><img src="../img/home/喜欢.png"><p>喜欢</p></li></ul></div><div class="lineW"></div></li><ul>'
    }
    myactive()
 for(let i = 0;i<$('normal').length;i++){
    
    $('normal')[i].addEventListener('click',function(){
        for(let i = 0;i<$('normal').length;i++){
          $('normal')[i].className = 'normal'
          $('thin')[i].className = 'thin'
     }
     $('normal')[i].className = 'normal active'
        
     $('thin')[i].className = 'thin weight'
     if(i==1){
         $('mainLeftcenter')[0].innerHTML = '<h4 class="myactive">我的回答</h3><div class="lineW"></div><ul><li><div class="myactiveCollect"><h4>回答了文章</h4><h4>2个月前</h4></div><h2 class="fw600">有哪些文艺到爆炸的句子？</h2><div class="myactiveInf row"><img class="myactiveHead"><div><h4 class="fw600">噜噜噜</h4><h4>不知道说啥，先空着吧！</h4></div></div><h4>404 人也收藏了该文章</h4><div class="maincenterListcontent"><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg"src="../img/home/v2-75bd20d3efb4ac2dcf85b22439a3bbe7_hd.jpg"></div><h4 class="maincenterListcontentC21">1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被点亮。后来才发现那是我眼睛里的光，可那又如何，我爱慕的是你，而非你发着光的模样。1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被...</h4></div><div class="maincenterListcontentbottom"><button class="maincenterListcontentbottom1"><span class="d4up"></span><p>赞同</p><p>2.9k</p></button><button class="maincenterListcontentbottom1 maincenterListcontentbottom2"><span class="d4down"></span></button><ul class="maincenterListcontentbottom3"><li><img src="../img/home/评论.png"><p>225</p><p>条评论</p></li><li><img src="../img/home/纸飞机.png"><p>分享</p> </li><li><img src="../img/home/收藏.png"><p>收藏</p></li><li><img src="../img/home/喜欢.png"><p>喜欢</p></li></ul></div><div class="lineW"></div></li><ul>'
     }
    else if(i==0){

       myactive()
    }
    else if(i==2){
        $('mainLeftcenter')[0].innerHTML = '<h4 class="myactive">我的提问</h3><div class="lineW"></div><ul><li><div class="myactiveCollect"><h4>提出了问题</h4><h4>2个月前</h4></div><h2 class="fw600">有哪些文艺到爆炸的句子？</h2><div class="myactiveInf row"><img class="myactiveHead"><div><h4 class="fw600">噜噜噜</h4><h4>不知道说啥，先空着吧！</h4></div></div><h4>404 人也收藏了该文章</h4><div class="maincenterListcontent"><div class="maincenterListcontentC"><div><img class="maincenterListcontentCimg"src="../img/home/v2-75bd20d3efb4ac2dcf85b22439a3bbe7_hd.jpg"></div><h4 class="maincenterListcontentC21">1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被点亮。后来才发现那是我眼睛里的光，可那又如何，我爱慕的是你，而非你发着光的模样。1、我在贩卖日落，你像神明一样慷慨地将光洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被洒向我，从此人间被...</h4></div><div class="maincenterListcontentbottom"><button class="maincenterListcontentbottom1"><span class="d4up"></span><p>赞同</p><p>2.9k</p></button><button class="maincenterListcontentbottom1 maincenterListcontentbottom2"><span class="d4down"></span></button><ul class="maincenterListcontentbottom3"><li><img src="../img/home/评论.png"><p>225</p><p>条评论</p></li><li><img src="../img/home/纸飞机.png"><p>分享</p> </li><li><img src="../img/home/收藏.png"><p>收藏</p></li><li><img src="../img/home/喜欢.png"><p>喜欢</p></li></ul></div><div class="lineW"></div></li><ul>'
    }
    else{
        $('mainLeftcenter')[0].innerHTML =''
    }
    })}
   