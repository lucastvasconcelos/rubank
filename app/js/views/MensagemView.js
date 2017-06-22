class MensagemView {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
