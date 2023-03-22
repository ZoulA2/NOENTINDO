export var Attribute2;
(function (Attribute2) {
    Attribute2["img"] = "img";
    Attribute2["info"] = "info";
    Attribute2["fesha"] = "fesha";
    Attribute2["moneh"] = "moneh";
    Attribute2["cons"] = "cons";
})(Attribute2 || (Attribute2 = {}));
class Mymv extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            info: null,
            fesha: null,
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
        <div class= "mv">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.fesha}</p>
        <p>${this.cons}<p>
        <h1>$:${this.moneh}</h1>
        </div>
        `;
        }
    }
}
export default Mymv;
customElements.define("my-mv", Mymv);
