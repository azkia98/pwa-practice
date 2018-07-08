self.addEventListener('install',()=>{
    console.log('installing service worker');
})

self.addEventListener('activate',()=>{
    console.log('activateing service worker');
    console.log('v4');
})

self.addEventListener('fetch',(event)=>{
    console.log(event);
})