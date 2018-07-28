window.onload = function() {
    document.getElementById('hamburger').addEventListener('click', function(){
        var classApplied = document.getElementById('nav').className;
        if(classApplied === 'visible') {
           document.getElementById('nav').className = 'hidden';
        } else {
            document.getElementById('nav').className = 'visible';
        }
    });

    let pathArray = location.pathname.split('/');
    let folderName = pathArray[1];
    if(folderName === "" || folderName === "index.html") {

    }
};