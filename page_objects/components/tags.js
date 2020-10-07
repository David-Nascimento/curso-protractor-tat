class Tags {
    constructor() {
        this.cards = element.all(by.css('.tags .cards .card'));
        this.firstCard = this.cards.first();

        this.imageOfirstCard = this.firstCard.element(by.css("img"));
        this.headingOfirstCard = this.firstCard.element(by.css("h2"));
        this.anchorOfirstCard = this.firstCard.element(by.css("a"));
    }
}

module.exports = Tags;
