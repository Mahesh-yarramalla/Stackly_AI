var scrollText = document.querySelector(".scrollText");

    // Array of words to scroll through
const words = [ "Interiors","Living Room", "Balcony","Mini Theatre", "Bedroom", "Kitchen"];
    let index = 0;

    function changeWord() {
        scrollText.classList.remove("scroll-up");
        void scrollText.offsetWidth;
        scrollText.classList.add("scroll-up");

        scrollText.textContent = `"${words[index]}"`;
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000);