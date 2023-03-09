async function comm(partid, text){ return await fetch("https://ficbook.net/comment/add", {
  "headers": {
    "accept": "*/*",
    "accept-language": "be-BY,be;q=0.9",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryxs7pqwp9AfXOQQo5",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/readfic/13065628/33546218?show_comments=1&rnd=0.6002095438792745&part_id=33546218&status=1",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundaryxs7pqwp9AfXOQQo5\r\nContent-Disposition: form-data; name=\"part_id\"\r\n\r\n"+partid+"\r\n------WebKitFormBoundaryxs7pqwp9AfXOQQo5\r\nContent-Disposition: form-data; name=\"comment\"\r\n\r\n"+text+"\r\n------WebKitFormBoundaryxs7pqwp9AfXOQQo5\r\nContent-Disposition: form-data; name=\"cf-turnstile-response\"\r\n\r\n"+buildtoken()+"\r\n------WebKitFormBoundaryxs7pqwp9AfXOQQo5--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((x)=>x.json()).then((w)=>{return w});}
async function pb(partid,comment,error,st,en){return await fetch("https://ficbook.net/ajax/public_beta", {
  "headers": {
    "accept": "*/*",
    "accept-language": "be-BY,be;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://ficbook.net/readfic/13065628/33546218?show_comments=1&rnd=0.0423809199309797&part_id=33546218&status=1",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "selected_text=<span>"+error.replace(' ','+')+"</span>&context=..."+st.replace(' ','+')+"<span+class=\"grammar_error\">"+error.replace(' ','+')+"</span>"+en.replace(' ','+')+"...&comment="+comment.replace(' ','+')+"&fanfic_id=1&part_id="+partid+"&type=1&cf-turnstile-response="+buildtoken(),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((x)=>x.json()).then((w)=>{return w});}
async function Login(login,password){return await fetch("https://ficbook.net/login_check", {
    "headers": {
      "accept": "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://ficbook.net/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "login="+login+"&password="+password+"&remember=on",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })}
function randel(arr) {
    return arr[Math.floor((Math.random() * arr.length))];
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function getpartid(dev=false){
    if(dev){
        return 33546218;
    }
    else{
        return rnd(1,34028132);
    }
}
function gs(l,s){
    let res="";
    for(let q = 0;q<s;q++){
        res+=l.charAt(Math.floor(Math.random() * l.length));
    }
    return res;
}
function buildtoken(){
    let t = "0.";
    t+=gs("LI9yNLg5akVl4VgcWy1Q8Sd1kJxXOev7AIPYY-XW2ldUWKpQdD0OMsO8C1gc4df-quy_WA-HueNM5JHVaftpyxPE8UXZNKBjuT4ouCU6Uj2FKZYe-71FnX9binzvHZ9VT8ciTjrDQn5TXXcIM8YYXva4a7hUH_maoyf0a5IxY32SboLiarVBBa5LJ9y8DeiCwY7khcQk2wJYyCmAdTcLTMdqQBtriBDCm8pNZpJapEA_uXbpVBa986_WfqifY5tcRKPNcN_xr3dOgU_YkRQcMQEP3HdLQDr1hHQGvKzzrw37cJ4evMLaORDw2xBsF9FQToc8Gu8lbqQpW8u1EA3U4bn-f8OwO_zJh3M_9Hq4pasnwb6ISYpF-NKauiFphSlGYlI7uIoxzx4b6IENA7EtyJ0bJS6ZpjcrcpNZK0x3fH3zT_NASlqK2svuEIQAJ1GytVh1fvYUeGzxtYEcxjsSqgpW2nFXR_sq0iRhrQjsFoB9TUcWSaWI5Hz-qHjz7xBstigPQiMJcFczwPoC9ZI6tC6GJOVXrFjSsHi8Ru7NnzU3_6UcM1aStFny7Tv17G2ZFnhbjWDVOB6mbTPU578zhHE0JG0eXP32D1BQKpZXnA9Lta-TIyvfIeKTFiaViIbsARI8ySwsG_3gJ2-LSUM5BAV01h-yF2Tjyrplzt51S7UA",342);
    t+='.';
    t+=gs("mH7DO8zlXvYvhuqnOkV9RZy2mLuxJVwFJyxSin",19);
    t+='-';
    t+=gs("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM",2);
    t+='.'
    t+=gs("8b8c37bb845d7e8b8c37bb848d6b98bcbf041375a42e123050c3fda15990f861e0f65344808d6b98bcbf041375a42e123050c3fda15990f861e0",64);
    return t;
}
async function q(login, pass, messages, err, st,en){
    await Login(login,pass);
    let cachedarr = messages.concat(err);
    while(true){
        let tar = getpartid();
        try{
        await comm(getpartid(),randel(cachedarr));
        await  pb(getpartid(), randel(messages), randel(err), randel(st), randel(en));
        await sleep(400);
        }
        catch{console.log("Fall cycle with error!");await sleep(2000);}
    }
}
