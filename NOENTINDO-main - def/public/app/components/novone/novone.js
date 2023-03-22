export var Attribute4;
(function (Attribute4) {
    Attribute4["img"] = "img";
    Attribute4["fesha"] = "fesha";
    Attribute4["info"] = "info";
    Attribute4["ix"] = "ix";
    Attribute4["moar"] = "moar";
})(Attribute4 || (Attribute4 = {}));
class Mynovone extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            img: null,
            fesha: null,
            info: null,
            ix: null,
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
        <link rel="stylesheet" href="./app/components/novone/novone.css">
        <div class= "novone">
        <img class="imag" src="${this.img}">
        <p>${this.fesha}</p>
        <p1><strong>${this.info}</strong></p1>
        <p2>${this.ix}</p2>
        <h1>${this.moar}</h1>
        </div>
        `;
        }
    }
}
export default Mynovone;
customElements.define("my-novone", Mynovone);
