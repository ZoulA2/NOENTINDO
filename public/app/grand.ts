import * as components from "./components/fath.js"
import Mydestc, {Attribute} from "./components/destc/destc.js"
import Mymv, {Attribute} from "./components/mv/mv.js"
import Mynl, {Attribute} from "./components/nl/nl.js"
import Mynovone, {Attribute}from "./components/novone/novone.js"
import Mynovtwo, {Attribute}from "./components/novtwo/novtwo.js"
import Myte, {Attribute} from "./components/te/te.js"

import destcdata from './destcdata.js'

import mvdata from './mvdata.js'

import nldata from './nldata.js'

import novonedata from './novonedata.js'

import novtwodata from './novtwodata.js'

import tedata from './tedata.js'



class Container extends HTMLElement {
    desta: Mydestc[] =[]
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    render(){

        const.destcs = destcdata.map((destc) =>
            `<my-destc img="${destc.img}" info="${destc.info}" cons="${destc.cons}">
            </my-destc>`
        )

        if(this.shadowRoot){
            this.shadowRoot.innerHTML=``
           }

           this.desta.forEach((destc) => {
            this.shadowRoot?.appendChild(destc);
          });
        }

    }

customElements.define("app-container",Container);
