console.log("Hello world!");

// IIFE
(function(){
    const header = document.querySelector('h1');
    header.style.color = "green";

    document.querySelector('body').addEventListener('click', function(){
        console.log("Clicked!");
        header.style.color ="blue";
    })
})();
