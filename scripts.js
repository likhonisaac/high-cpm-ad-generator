// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded. Initializing ads...");

    // Lazy load ads after 5 seconds
    setTimeout(() => {
        const lazyAd = document.getElementById("lazy-ad");
        if (lazyAd) {
            lazyAd.classList.remove("hidden");
            console.log("Lazy-loaded ad is now visible.");
        }
    }, 5000);

    // Display a message when the sticky ad is clicked
    const stickyAd = document.getElementById("sticky-ad");
    if (stickyAd) {
        stickyAd.addEventListener("click", () => {
            alert("Thank you for supporting us by interacting with ads!");
        });
    }
});
