// satisfactionRating.js
import { LightningElement, track } from 'lwc';

export default class SatisfactionRating extends LightningElement {
    @track stars = [
        { value: 1, cssClass: 'star' },
        { value: 2, cssClass: 'star' },
        { value: 3, cssClass: 'star' },
        { value: 4, cssClass: 'star' },
        { value: 5, cssClass: 'star' }
    ];

    handleRatingClick(event) {
        const selectedValue = parseInt(event.currentTarget.dataset.value, 10);

        // Atualize a classe CSS das estrelas com base no valor selecionado
        this.stars = this.stars.map(star => ({
            ...star,
            cssClass: star.value <= selectedValue ? 'star selected' : 'star'
        }));

        // Dispare um evento personalizado com o valor selecionado
        const ratingChangeEvent = new CustomEvent('ratingchange', {
            detail: selectedValue
        });
        this.dispatchEvent(ratingChangeEvent);
    }
}

