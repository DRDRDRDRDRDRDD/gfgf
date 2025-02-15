function sortByPrice(order) {
    const container = document.getElementById('current-price');
    const items = Array.from(container.children);

    items.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        if (order === 'asc') {
            return priceA - priceB;
        } else {
            return priceB - priceA;
        }
    });

    items.forEach(item => container.appendChild(item));
}