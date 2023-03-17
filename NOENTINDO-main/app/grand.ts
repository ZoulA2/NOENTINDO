import * as components from "./components/fath.js"
import destccontent, {Attribute} from "./components/destc/destc.js"
import mvcocntent, {Attribute2} from "./components/mv/mv.js"
import nlcontent, {Attribute3} from "./components/nl/nl.js"
import novonecontent, {Attribute4}from "./components/novone/novone.js"
import novtwocontent, {Attribute5}from "./components/novtwo/novtwo.js"
import tecontent, {Attribute6} from "./components/te/te.js"

import destcdata from './destcdata.js'

import mvdata from './mvdata.js'

import nldata from './nldata.js'

import novonedata from './novonedata.js'

import novtwodata from './novtwodata.js'

import tedata from './tedata.js'

class destcontainer extends HTMLElement {
    destcs: components.Mydestc[] = [];
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        destcdata.forEach((user) => {
            const destccard = this.ownerDocument.createElement(
                "my-destc" ) as components.Mydestc;
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

            const destccards = this.ownerDocument.createElement("section");
            destccards.className = 'destcontainer'
            this.destcs.forEach((destccard) => {
                destccards.appendChild(destccard);
               
            })
            this.shadowRoot?.appendChild(destccards);
           
            }
        }

        customElements.define("destc-container", destcontainer)

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




