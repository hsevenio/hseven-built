const sleep=timeout=>new Promise(resolve=>setTimeout(resolve,timeout))
const overlayEl=document.getElementById('flat-preloader-overlay')
const showPreloaderInstantly=flatPreloader.showPreloaderInstantly==='1'?!0:!1
window.addEventListener('DOMContentLoaded',async function(){if(!overlayEl){return}
const delayTime=flatPreloader.delayTime
await sleep(delayTime)
document.body.classList.remove('flat-preloader-active')
overlayEl.classList.add('hide')
await sleep(300)
if(showPreloaderInstantly){document.querySelectorAll('a').forEach(link=>{link.addEventListener('click',e=>{let href=link.getAttribute('href')
if(isIgnored(href)){return}
e.preventDefault()
document.body.classList.add('flat-preloader-active')
overlayEl.classList.remove('hide')
window.location.href=href})})}})
function isIgnored(url){if(!url.includes(flatPreloader.host)){return!0}
let ignore=!1
flatPreloader.ignores.forEach(regex=>{if(new RegExp(regex).test(url)){ignore=!0
return}})
return ignore}
;