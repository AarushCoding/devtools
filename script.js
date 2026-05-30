const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".tool-card");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(value) ? "flex" : "none";
        });
    });
}
