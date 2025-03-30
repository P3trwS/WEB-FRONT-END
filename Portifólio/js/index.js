function scrollProjetos(direcao) {
    const container = document.getElementById("projetosGrid");
    const card = container.querySelector(".projeto-card");
    const scrollAmount = card.offsetWidth + 16; // 16 é o gap
    container.scrollLeft += direcao * scrollAmount;
}