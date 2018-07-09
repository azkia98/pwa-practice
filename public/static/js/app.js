if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('/service-worker.js', ).then(registration => {
            // console.log('Your service worker has been registred !',registration);
        });
}


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log('deferredPrompt');
});


document.querySelector('.fixed-action-btn a').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(deferredPrompt);
    if (deferredPrompt) {
        console.log('hello');
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResultes)=>{
            if(choiceResultes.outcome === 'accepted')
            {
                console.log('accepted');
            }else{
                console.log('user dissmissed');
            }
        });
    }
})