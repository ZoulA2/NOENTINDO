export var Attribute6;
(function (Attribute6) {
    Attribute6["tit"] = "tit";
    Attribute6["img"] = "img";
    Attribute6["info"] = "info";
})(Attribute6 || (Attribute6 = {}));
class Myte extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tit: null,
            img: null,
            info: null,
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
        <link rel="stylesheet" href="./app/components/te/te.css">
        <div class= "te">
        <h1> ${this.tit}</h1>
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        </div>
        `;
        }
    }
}
export default Myte;
customElements.define("my-te", Myte);
