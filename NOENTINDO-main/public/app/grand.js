import destcdata from './destcdata.js';
class destcontainer extends HTMLElement {
    constructor() {
        super();
        this.destcs = [];
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        /* let destcmap = new Map<string, string>([
            ["destcmap.set", "${destc.img}"],
            ["destcmap.set", "${destc.info}"],
            ["destcmap.set", "${destc.cons}"],
        ]); */
        const destccard = destcdata.map((destcs) => `<my-destc img="${destcs.img}" info="${destcs.info}" cons="${destcs.cons}"
            </my-destc>`);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div class="cont">${destccard.join("")}</div>`;
        }
        this.destcs.forEach((Mydestc) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Mydestc);
        });
    }
}
customElements.define("destc-container", destcontainer);
