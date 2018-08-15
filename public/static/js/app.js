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
        deferredPrompt.userChoice.then((choiceResultes) => {
            if (choiceResultes.outcome === 'accepted') {
                console.log('accepted');
            } else {
                console.log('user dissmissed');
            }
        });
    }
})


fetch('http://roocket.org/api/products')
    .then(response => response.json())
    .then(res => {
        let products = res.data.data;
        products.forEach(product => {
            createUi(product)
        })
    }).catch(err =>{
        if(!'indexedDB' in window){
            alert('Your browser dosent support of the indexedDB');
            return 0;
        }
        db.products.toArray().then(products =>{
            console.log('indexedDb',products);
            products.forEach(product =>{
                createUi(product);
            });
        });    
    });

function createUi(product) {
    // console.log(product);
    let card1 = `
        <div class="col s12 m4">
            <div class="card">
                <div class="card-image">
                    <img src="${product.image}">
                    <span class="card-title">${product.title}</span>
                </div>
                <div class="card-content">
                    <p>${product.body}</p>
                </div>
            </div>
        </div>
    `;

    let productContentElement = document.getElementById('products');
    // console.log(productContentElement);
    if(productContentElement != undefined)
        productContentElement.innerHTML += card1;
    
}