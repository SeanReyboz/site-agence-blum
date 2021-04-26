    /*
        Script menu responsive. Permet d'ajouter la classe `responsive` a l'element d'id `TopNav`
    */
    function MenuResponsive() {
        var menuDeroulant = document.getElementById("TopNav");
        if (menuDeroulant.className === "navbar") {
            menuDeroulant.className += " responsive";
        } else {
            menuDeroulant.className = "navbar";
        }
    }

    function derouler_graph() {

        document.getElementById("content-graph").style.display = "inline-block";

        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-com").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-graph").style.cursor = "pointer";
        document.getElementById("plus-button-graph").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function derouler_av() {

        document.getElementById("content-AV").style.display = "inline-block";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-com").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-av").style.cursor = "pointer";
        document.getElementById("plus-button-av").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-graph").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function derouler_com() {

        document.getElementById("content-com").style.display = "inline-block";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-prog").style.display = "none";

        document.getElementById("plus-button-com").style.cursor = "pointer";
        document.getElementById("plus-button-com").style.display = "none";


        document.getElementById("plus-button-prog").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-graph").style.display = "block";


    }

    function derouler_prog() {

        document.getElementById("content-prog").style.display = "inline-block";

        document.getElementById("content-graph").style.display = "none";
        document.getElementById("content-AV").style.display = "none";
        document.getElementById("content-com").style.display = "none";

        document.getElementById("plus-button-prog").style.cursor = "pointer";
        document.getElementById("plus-button-prog").style.display = "none";


        document.getElementById("plus-button-graph").style.display = "block";
        document.getElementById("plus-button-av").style.display = "block";
        document.getElementById("plus-button-com").style.display = "block";


    }

    function MenuResponsive() {
        var menuDeroulant = document.getElementById("TopNav");
        if (menuDeroulant.className === "navbar") {
            menuDeroulant.className += " responsive";
        } else {
            menuDeroulant.className = "navbar";
        }
    }