function $(Nid) {
    return document.getElementsByClassName(Nid);
}
let loginBanner1active = document.getElementsByClassName('loginBanner1active');
let loginBanner1 = document.getElementsByClassName('loginBanner1')
let loginBannerleft1 = document.getElementById('loginBannerleft1')
let loginBannerleft2 = document.getElementById('loginBannerleft2')
let loginInp = document.getElementsByClassName('loginInp')
let loginInp2 = document.getElementsByClassName('loginInp2')
let loginInpnumr = document.getElementsByClassName('loginInpnumr')
let loginInppass1 = document.getElementsByClassName('loginInppass1')
loginBannerleft2.addEventListener('click', function () {
    loginBannerleft1.className = 'loginBanner1'
    loginBannerleft2.className = 'loginBanner1active'
    loginInp[0].style.marginLeft = '-400px'
})
loginBannerleft1.addEventListener('click', function () {
    loginBannerleft2.className = 'loginBanner1'
    loginBannerleft1.className = 'loginBanner1active'
    loginInp[0].style.marginLeft = '0'
})
let i = 0
//  点击input框里面文字消失，点外面出现文字,为什么功能还是好像不太对
function inp(title1,obj1, char,orichar,change,ori) {
    obj1.addEventListener('blur', function (){
           if(obj1.value == ''){
                obj1.placeholder = char
                obj1.className = change
            }
               } );
        
obj1.addEventListener('click',function(){
    if (obj1.placeholder == char) {
        obj1.placeholder = orichar
        obj1.className = ori
        
    }
})
function rec(obj){
    obj.addEventListener('click',function(){
        obj1.placeholder = orichar
        obj1.className = ori
    })
}
rec(title1)

}
inp(loginBannerleft2,loginInpnumr[0], '请输入手机号','手机号','loginInpnumrchange','loginInpnumr')
inp(loginBannerleft2,loginInppass1[0], '请输入短信验证码','输入6位短信验证码','loginInppass1change','loginInppass1')
inp(loginBannerleft1,loginInppass1[1], '请输入手机号或邮箱','手机号或邮箱','loginInppass1change','loginInppass1')
inp(loginBannerleft1,loginInppass1[2], '请输入密码','密码','loginInppass1 loginInp2code1change','loginInppass1 loginInp2code1')
//切换登录方式时 提示消失
function rec(obj,obj1,obj2,char1,char2){
obj.addEventListener('click',function(){
  obj1.className = 'loginInpnumr'
  obj1.placeholder = char1;
  obj2.placeholder = char2;
})}
rec(loginBannerleft2,loginInpnumr[0],loginInppass1[0],'手机号','输入6位短信验证码')

//点击出现验证码
function vercode(obj1,obj2) {
    obj1.addEventListener('keyup', function () {
        obj2.style.display = 'inline'
    })
}
vercode(loginInpnumr[0],$('verCode')[0])
vercode($('loginInp2code')[0],$('verCode')[1])
//可见 和 不可见
let view = document.getElementsByClassName('view')
view[0].addEventListener('click', function () {
    if ($('loginInp2code1')[0].type == 'text') {
        $('loginInp2code1')[0].type = 'password'
        view[0].setAttribute('src', '../img/login/不可见.png')
        
    } else{
        $('loginInp2code1')[0].type = 'text'
        view[0].setAttribute('src', '../img/login/可见.png')
    }
})

// //保持登录状态 cookie
// function setCookie(json,time){
// let date = new Date (new Date().getTime()+time*24*60*60*1000).toUTCString
// for(let key in json){
//     document.cookie = key+'='+json[key]+';expires'+date
// }
// }
// // $('loginBtn')[1].addEventListener('click',function(){
// //    setCookie({
// //     ueser:loginInppass1[1].value,
// //     password:loginInppass1[2].value
// // },7) 
// // console.log(document.cookie)
// // })
// setCookie({
//     name:'lll',
//     age:'222'
// },1)
//登录跳转
for(let i = 0;i<$('loginBtn').length;i++){
$('loginBtn')[i].addEventListener('click',function(){
    window.location.href='home.html'
})}