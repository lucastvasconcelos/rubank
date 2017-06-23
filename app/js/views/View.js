class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    template(model) {
        throw new Error("não permitido a implementação desse método");
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
