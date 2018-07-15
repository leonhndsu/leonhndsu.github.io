function init()
{
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = document.getElementsByClassName("content");
            if (content[0].style.display === "block") {
                content[0].style.display = "none";

            } else {
                content[0].style.display = "block";

            }
        });
    }
}
