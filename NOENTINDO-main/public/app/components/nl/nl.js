export var Attribute3;
(function (Attribute3) {
    Attribute3["img"] = "img";
    Attribute3["info"] = "info";
    Attribute3["fesha"] = "fesha";
    Attribute3["noveda"] = "noveda";
    Attribute3["moneh"] = "moneh";
    Attribute3["cons"] = "cons";
})(Attribute3 || (Attribute3 = {}));
class Mynl extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            info: null,
            fesha: null,
            noveda: null,
            moneh: null,
            cons: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/mv/mv.css">
        <div class= "nl">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.fesha}</p>
        <p>${this.noveda}</p>
        <p>${this.cons}<p>
        <h1>$:${this.moneh}</h1>
        </div>
        `;
        }
    }
}
export default Mynl;
customElements.define("my-nl", Mynl);
