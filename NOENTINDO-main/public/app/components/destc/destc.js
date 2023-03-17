export var Attribute;
(function (Attribute) {
    Attribute["img"] = "img";
    Attribute["info"] = "info";
    Attribute["cons"] = "cons";
})(Attribute || (Attribute = {}));
class Mydestc extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            info: null,
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
       
     <link rel="stylesheet" href="./app/components/destc/destc.css">
       <div class= "destc">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.cons}<p>
        </div>
        `;
        }
    }
}

export default Mydestc;
customElements.define("my-destc", Mydestc);
