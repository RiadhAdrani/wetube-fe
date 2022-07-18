function subscribersText(count) {
    if (typeof count !== "number") return "0 subscriber";

    if (count == 1) return "1 subscriber";

    return `${count} subscribers`;
}

export { subscribersText };
