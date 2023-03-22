import { Attribute } from "./components/destc/destc.js";
import { Attribute2 } from "./components/mv/mv.js";
import { Attribute3 } from "./components/nl/nl.js";
import { Attribute4 } from "./components/novone/novone.js";
import { Attribute5 } from "./components/novtwo/novtwo.js";
import { Attribute6 } from "./components/te/te.js";
import destcdata from './destcdata.js';
import mvdata from './mvdata.js';
import nldata from './nldata.js';
import novonedata from './novonedata.js';
import novtwodata from './novtwodata.js';
import tedata from './tedata.js';
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
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/destc/destc.css">`;
        const destccards = this.ownerDocument.createElement("section");
        destccards.className = 'destcontainer';
        this.destcs.forEach((destccard) => {
            destccards.appendChild(destccard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(destccards);
    }
}
customElements.define("destc-container", destcontainer);
class tecontainer extends HTMLElement {
    constructor() {
        super();
        this.tes = [];
        this.attachShadow({ mode: "open" });
        tedata.forEach((user) => {
            const tecard = this.ownerDocument.createElement("my-te");
            tecard.setAttribute(Attribute6.tit, user.tit);
            tecard.setAttribute(Attribute6.img, user.img);
            tecard.setAttribute(Attribute6.info, (user.info));
            tecard.setAttribute(Attribute6.but, user.but);
            this.tes.push(tecard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="./app/components/te/te.css">`;
        const tecards = this.ownerDocument.createElement("section");
        tecards.className = 'tecontainer';
        this.tes.forEach((tecard) => {
            tecards.appendChild(tecard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(tecards);
    }
}
customElements.define("te-container", tecontainer);
class novonecontainer extends HTMLElement {
    constructor() {
        super();
        this.novones = [];
        this.attachShadow({ mode: "open" });
        novonedata.forEach((user) => {
            const novonecard = this.ownerDocument.createElement("my-novone");
            novonecard.setAttribute(Attribute4.img, user.img);
            novonecard.setAttribute(Attribute4.info, (user.info));
            novonecard.setAttribute(Attribute4.ix, (user.ix));
            novonecard.setAttribute(Attribute4.fesha, user.fesha);
            novonecard.setAttribute(Attribute4.moar, user.moar);
            this.novones.push(novonecard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="./app/components/novone/novone.css">`;
        const novonecards = this.ownerDocument.createElement("section");
        novonecards.className = 'novonecontainer';
        this.novones.forEach((novonecard) => {
            novonecards.appendChild(novonecard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(novonecards);
    }
}
customElements.define("novone-container", novonecontainer);
class novtwocontainer extends HTMLElement {
    constructor() {
        super();
        this.novtwos = [];
        this.attachShadow({ mode: "open" });
        novtwodata.forEach((user) => {
            const novtwocard = this.ownerDocument.createElement("my-novtwo");
            novtwocard.setAttribute(Attribute5.img, user.img);
            novtwocard.setAttribute(Attribute5.info, (user.info));
            novtwocard.setAttribute(Attribute5.fesha, user.fesha);
            novtwocard.setAttribute(Attribute5.moar, user.moar);
            this.novtwos.push(novtwocard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
                            <link rel="stylesheet" href="./app/components/novtwo/novtwo.css">`;
        const novtwocards = this.ownerDocument.createElement("section");
        novtwocards.className = 'novtwocontainer';
        this.novtwos.forEach((novtwocard) => {
            novtwocards.appendChild(novtwocard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(novtwocards);
    }
}
customElements.define("novtwo-container", novtwocontainer);
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
/* class mvcontainer extends HTMLElement {
    mvs: components.Mymv[] = []
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){

        
    const mvcard = mvdata.map((mv) =>
           `<my-mv img="${mv.img}" info="${mv.info}" fecha="${mv.fesha}" cons="${mv.cons}" moneh="${mv.moneh}"
            </my-mv>`
        )
       

         if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <div class="cont2">${mvcard.join("")}</div>`
           }
    
           this.mvs.forEach((Mymv) => {
            this.shadowRoot?.appendChild(Mymv);
            
          });
        }
    

    }

customElements.define("mv-container",mvcontainer);
 */
class mvcontainer extends HTMLElement {
    constructor() {
        super();
        this.mvs = [];
        this.attachShadow({ mode: "open" });
        mvdata.forEach((user) => {
            const mvcard = this.ownerDocument.createElement("my-mv");
            mvcard.setAttribute(Attribute2.img, user.img);
            mvcard.setAttribute(Attribute2.info, (user.info));
            mvcard.setAttribute(Attribute2.fesha, user.fesha);
            mvcard.setAttribute(Attribute2.cons, user.cons);
            mvcard.setAttribute(Attribute2.moneh, user.moneh);
            this.mvs.push(mvcard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/mv/mv.css">`;
        const mvcards = this.ownerDocument.createElement("section");
        mvcards.className = 'mvcontainer';
        this.mvs.forEach((mvcard) => {
            mvcards.appendChild(mvcard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(mvcards);
    }
}
customElements.define("mv-container", mvcontainer);
class nlcontainer extends HTMLElement {
    constructor() {
        super();
        this.nls = [];
        this.attachShadow({ mode: "open" });
        nldata.forEach((user) => {
            const nlcard = this.ownerDocument.createElement("my-nl");
            nlcard.setAttribute(Attribute3.img, user.img);
            nlcard.setAttribute(Attribute3.info, (user.info));
            nlcard.setAttribute(Attribute3.fesha, user.fesha);
            nlcard.setAttribute(Attribute3.noveda, user.noveda);
            nlcard.setAttribute(Attribute3.moneh, user.moneh);
            nlcard.setAttribute(Attribute3.cons, user.cons);
            this.nls.push(nlcard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="./app/components/nl/nl.css">`;
        const nlcards = this.ownerDocument.createElement("section");
        nlcards.className = 'nlcontainer';
        this.nls.forEach((nlcard) => {
            nlcards.appendChild(nlcard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(nlcards);
    }
}
customElements.define("nl-container", nlcontainer);
