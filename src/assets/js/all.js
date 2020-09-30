var modalOverlay = document.getElementById("modal_overlay");
var heroButton = document.getElementById("hero_button");
var communityButton = document.getElementById("community_button");
var modalClose = document.getElementById("modal_close");

heroButton.onclick = function() {
    if(modalOverlay.className == "open") {
        // Close modal
        modalOverlay.className == "";
    } else {
        // Open modal
        modalOverlay.className = "open";
    }
};

communityButton.onclick = function() {
    if(modalOverlay.className == "open") {
        // Close modal
        modalOverlay.className == "";
    } else {
        // Open modal
        modalOverlay.className = "open";
    }
};

modalClose.onclick = function() {
    modalOverlay.classList.remove("open");
};


