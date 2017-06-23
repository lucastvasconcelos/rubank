class View<T>{
    private _element : Element
    constructor(selector: string){
        this._element = document.querySelector(selector)
    }

    template(model: T): string {
        throw new Error("não permitido a implementação desse método")
    }
    update(model: T){
        this._element.innerHTML = this.template(model)
    }

}