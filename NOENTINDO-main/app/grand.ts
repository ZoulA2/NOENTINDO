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
    destcs: components.Mydestc[] = []
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){


        /* let destcmap = new Map<string, string>([
            ["destcmap.set", "${destc.img}"],
            ["destcmap.set", "${destc.info}"],
            ["destcmap.set", "${destc.cons}"],
        ]); */
        
    const destccard = destcdata.map((destcs) =>
           `<my-destc img="${destcs.img}" info="${destcs.info}" cons="${destcs.cons}"
            </my-destc>`
        )
       

         if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <div class="cont">${destccard.join("")}</div>`
           }
    
           this.destcs.forEach((Mydestc) => {
            this.shadowRoot?.appendChild(Mydestc);
            
          }); 
        }
    

    }


customElements.define("destc-container",destcontainer);
