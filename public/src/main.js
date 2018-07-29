window.onload = function() {
    // Event listener for clicking hamburger menu
    document.getElementById('hamburger').addEventListener('click', function(){
        // Swap visible / hidden hamburgers
        var classApplied = document.getElementById('nav').className;
        if(classApplied === 'visible') {
           document.getElementById('nav').className = 'hidden';
        } else {
            document.getElementById('nav').className = 'visible';
        }
    });

    // Highlight the current page for folder in the nav bar
    let pathArray = location.pathname.split('/');
    let folderName = pathArray[1];
    if(folderName === "" || folderName === "index.html") {
        document.getElementById('home').className = 'currentPage';
    } else {
        let nav = document.getElementById('nav');
        let links = nav.getElementsByTagName('a');
        for(let i=0; i < links.length; i++) {
            if(links[i].getAttribute('href').indexOf(folderName) > -1) {
                links[i].className = 'currentPage';
            }
        }
    }
};