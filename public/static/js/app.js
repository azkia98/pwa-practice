if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('/service-worker.js',).then(registration =>{
            // console.log('Your service worker has been registred !',registration);
        });
}
