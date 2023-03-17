import { Attribute } from "./components/destc/destc.js";
import destcdata from './destcdata.js';
import mvdata from './mvdata.js';
class destcontainer extends HTMLElement {
    constructor() {
        super();
        this.destcs = [];
        this.attachShadow({ mode: "open" });
        destcdata.forEach((user) => {
            const destccard = this.ownerDocument.createElement("my-destc");
            destccard.setAttribute(Attribute.img, user.img);
            destccard.setAttribute(Attribute.info, (user.info));
            destccard.setAttribute(Attribute.cons, user.cons);
            this.destcs.push(destccard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        const destccards = this.ownerDocument.createElement("section");
        destccards.className = 'destcontainer';
        this.destcs.forEach((destccard) => {
            destccards.appendChild(destccard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(destccards);
    }
}
customElements.define("destc-container", destcontainer);
/* class destcontainer extends HTMLElement {
    destcs: components.Mydestc[] = []
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){

        
    const destccard = destcdata.map((destc) =>
           `<my-destc img="${destc.img}" info="${destc.info}" cons="${destc.cons}"
            </my-destc>`
        )
       

         if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <div class="cont1">${destccard.join("")}</div>`
           }
    
           this.destcs.forEach((Mydestc) => {
            this.shadowRoot?.appendChild(Mydestc);
            
          });
        }
    

    }

customElements.define("destc-container",destcontainer); */
class mvcontainer extends HTMLElement {
    constructor() {
        super();
        this.mvs = [];
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const mvcard = mvdata.map((mv) => `<my-mv img="${mv.img}" info="${mv.info}" fecha="${mv.fesha}" cons="${mv.cons}" moneh="${mv.moneh}"
            </my-mv>`);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <div class="cont2">${mvcard.join("")}</div>`;
        }
        this.mvs.forEach((Mymv) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(Mymv);
        });
    }
}
customElements.define("mv-container", mvcontainer);
