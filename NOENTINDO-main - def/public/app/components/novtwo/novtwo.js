export var Attribute5;
(function (Attribute5) {
    Attribute5["img"] = "img";
    Attribute5["fesha"] = "fesha";
    Attribute5["info"] = "info";
    Attribute5["moar"] = "moar";
})(Attribute5 || (Attribute5 = {}));
class Mynovtwo extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            fesha: null,
            info: null,
            moar: null,
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
        <link rel="stylesheet" href="./app/components/novtwo/novtwo.css">
        <div class= "novtwo">
        <img class="imag" src="${this.img}">
        <p>${this.fesha}</p>
        <p1><strong>${this.info}</strong></p1>
        <h1>${this.moar}</h1>
        </div>
        `;
        }
    }
}
export default Mynovtwo;
customElements.define("my-novtwo", Mynovtwo);
