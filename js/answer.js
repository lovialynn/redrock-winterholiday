function $(Nid) {
    return document.getElementsByClassName(Nid);
}

function inline(obj1, obj2) {
    obj1.addEventListener('click', function () {
        obj2.style.display = 'block'
        event.stopImmediatePropagation()
    })
    obj2.addEventListener('click', function () {
        event.stopImmediatePropagation()
    })
    document.body.addEventListener('click', function () {
        obj2.style.display = 'none'
    })
}
inline($('personimg')[0], $('banner3person')[0])

//
let scrollTop1 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
    scrollTop2
setInterval(() => {
    scrollTop2 = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop2 > scrollTop1 && scrollTop2 > '200') {

        $('bigBannercenter')[0].style.transform = 'translateY(-53.3px)';
    }
    if (scrollTop2 < scrollTop1) {
        $('bigBannercenter')[0].style.transform = 'translateY(0px)';
    }
    scrollTop1 = scrollTop2;
    //滑动超过一定高度后 出现TOP键

    if (scrollTop1 > '200') {
        $('other')[0].style.bottom = 0
    } else {
        $('other')[0].style.bottom = '-50px'
    }
}, 10);
$('otherbtn2')[0].addEventListener('click', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})
for (let i = 0; i < $('writeAnswerbtn').length; i++) {
    $('writeAnswerbtn')[i].addEventListener('click', function () {
        $('writeAnswer')[0].style.display = 'block'
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
}


//出现评论中的回复举报等按钮
for (let i = 0; i < $('replyItems').length; i++) {
    $('replyItems')[i].addEventListener('mouseover', function () {
        $('replyItemsbtnr')[i].style.display = 'inline'
    })
    $('replyItems')[i].addEventListener('mouseout', function () {
        $('replyItemsbtnr')[i].style.display = 'none'
    })
}

//点击回复 出现回复框
console.log($('replyBtn')[0].innerText)
for (let i = 0; i < $('replyBtn').length; i++) {

    $('replyBtn')[i].addEventListener('click', function () {

        if ($('replyBtn')[i].className == 'replyBtn') {
            $('replyBtn')[i].className = 'replyBtn active '
            $('replyBtn')[i].innerHTML = '<svg fill="currentColor" viewBox="0 0 24 24" width="16"height="16"> <path d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z" fill-rule="evenodd"></path> </svg>取消回复'
            $('replyItemsbottom2')[i].innerHTML = '<div class="replyItemsbottominp"><input><svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M7.523 13.5h8.954c-.228 2.47-2.145 4-4.477 4-2.332 0-4.25-1.53-4.477-4zM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"> </path></svg></div><button class="blue">发布</button>'
            replyCount++;
        }
        if ($('replyBtn')[i].className == 'replyBtn active ') {
            $('replyBtn')[i].className = 'replyBtn'
            $('replyBtn')[i].innerHTML = '<svg fill="currentColor" viewBox="0 0 24 24" width="16"height="16"> <path d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z" fill-rule="evenodd"></path> </svg>回复';
            $('replyItemsbottom2')[i].innerHTML = ' '
        }
    })
}


//回复
$('itemsComment')[0].addEventListener('click', function () {
    $('cover')[0].style.display = 'inline'
    $('bigreply')[0].style.display = 'inline'
})
$('replyR')[0].addEventListener('click', function () {
    $('cover')[0].style.display = 'none'
    $('bigreply')[0].style.display = 'none'
})

//点击变色
function clickturn(obj1, obj2) {
    obj1.addEventListener('focus', function () {
        obj2.style.border = "1px solid #8590a6"
    })
    obj1.addEventListener('blur', function () {
        obj2.style.border = "1px solid  #dbdada"
    })
}
clickturn($('collectDescribeTtext')[0], $('collectDescribe')[0])
clickturn($('collectTlitleinp')[0], $('collectTlitle')[0])


//当按下键盘 ...
$('collectTlitleinp')[0].addEventListener('keyup', function () {
    $('createColbtnright')[0].style.opacity = '1'
})

//返回
$('createColbtnreturn')[0].addEventListener('click', function () {
    $('createCol')[0].style.display = 'none'
    $('tocollect')[0].style.display = 'inline'
})
$('creatCollect')[0].addEventListener('click', function () {
    $('createCol')[0].style.display = 'inline'
    $('tocollect')[0].style.display = 'none'
})

//创建收藏夹
let tocollectLitems = ''
$('createColbtnright')[0].addEventListener('click', function () {
    let head = $('collectTlitleinp')[0].value;
    let add = $('collectDescribeTtext')[0].innerHTML;
    $('collectTlitleinp')[0].value ='';
    $('collectDescribeTtext')[0].innerHTML =''
    $('createCol')[0].style.display = 'none'
    $('tocollect')[0].style.display = 'inline'
    tocollectLitems = tocollectLitems + '<li ><div class="tocollectLCenteritem1"><span><h5>' + head + '</h5><h5 class= "tocollectLCenteritem1num" data="0" btn = "0">0条内容</h5></span><button class="tocollectLCenterbtn">收藏</button></div><div class="lineW"></div></li>'
    $('tocollectLCenter')[0].innerHTML = tocollectLitems
    for (let i = 0; i < $('tocollectLCenterbtn').length; i++) {
        $('tocollectLCenterbtn')[0].addEventListener('click', function () {
            let num = $('tocollectLCenteritem1num')[0].getAttribute('data');
            let btn = $('tocollectLCenteritem1num')[0].getAttribute('btn');
            if (btn == 0) {
                num++;
                btn++;
                $('tocollectLCenterbtn')[0].className = 'tocollectLCenterbtn active'
                $('tocollectLCenterbtn')[0].innerHTML = '已收藏'
                $('tocollectLCenteritem1num')[0].setAttribute('data', num)
                $('tocollectLCenteritem1num')[0].setAttribute('btn', btn)
                $('tocollectLCenteritem1num')[0].innerHTML = num + '条内容'
            }
            else{
                num--;
                btn--;
                $('tocollectLCenterbtn')[0].className = 'tocollectLCenterbtn'
                $('tocollectLCenterbtn')[0].innerHTML = '收藏'
                $('tocollectLCenteritem1num')[0].setAttribute('data', num)
                $('tocollectLCenteritem1num')[0].setAttribute('btn', btn)
                $('tocollectLCenteritem1num')[0].innerHTML = num + '条内容'
            }
        })
    }
})
$('createColR')[0].addEventListener('click', function () {
    $('createCol')[0].style.display = 'none'
    $('cover')[0].style.display = 'none'
})
$('tocollectR')[0].addEventListener('click', function () {
    $('tocollect')[0].style.display = 'none'
    $('cover')[0].style.display = 'none'
})

//出现收藏栏
$('itemsCollect')[0].addEventListener('click', function () {
    $('cover')[0].style.display = 'inline'
    $('tocollect')[0].style.display = 'inline'
})


//赞 
function clearagree(){
        agreebtn--;
        agreenum--;
            $('agreeactive')[0].className = 'maincenterListcontentbottom1 agree';
           
            $('agreeNum')[0].setAttribute('data', agreenum)
            $('agreeNum')[0].setAttribute('btn', agreebtn)
            $('agreeNum')[0].innerHTML = agreenum
        }
 let agreebtn = $('agreeNum')[0].getAttribute('data')
    let agreenum = $('agreeNum')[0].getAttribute('num')
$('agree')[0].addEventListener('click',function(){
   
    if(agreebtn == 0){
        if( disagreenum == 1){
            disagreenum--;
            $('disagree')[0].style= "color:#0084ff;background-color:#cde7ff";
        }
        $('agree')[0].className = 'maincenterListcontentbottom1 agreeactive';
        agreebtn++;
        agreenum++;
        $('disagree')[0].style.color = "color:#0084ff;background-color:#cde7ff";
        $('agreeNum')[0].setAttribute('data', agreenum)
        $('agreeNum')[0].setAttribute('btn', agreebtn)
        $('agreeNum')[0].innerHTML = agreenum}
     else{
        
            clearagree()}
})
//踩
let disagreenum = 0
$('disagree')[0].addEventListener('click',function(){
if(disagreenum == 0){
    if(agreebtn ==1){
    clearagree()}
    $('disagree')[0].style='color:white;background-color:#0084ff';
    disagreenum++;
}
else{
    disagreenum--;
    $('disagree')[0].style= "color:#0084ff;background-color:#cde7ff";
}
})
