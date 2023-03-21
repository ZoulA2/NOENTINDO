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
            this.shadowRoot!.innerHTML = `
        <link rel="stylesheet" href="./app/components/destc/destc.css">`

            const destccards = this.ownerDocument.createElement("section");
            destccards.className = 'destcontainer'
            this.destcs.forEach((destccard) => {
                destccards.appendChild(destccard);
               
            })
            this.shadowRoot?.appendChild(destccards);
           
            }
        }

        customElements.define("destc-container", destcontainer)

        class tecontainer extends HTMLElement {
            tes: components.Myte[] = [];
           
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
        
                tedata.forEach((user) => {
                    const tecard = this.ownerDocument.createElement(
                        "my-te" ) as components.Myte;
                        tecard.setAttribute(Attribute6.tit, user.tit);
                        tecard.setAttribute(Attribute6.img, user.img);
                        tecard.setAttribute(Attribute6.info, (user.info));
                        
                        this.tes.push(tecard);
                    });
                }
        
                connectedCallback() {
                    this.render();
                }
               
                render() {
                    this.shadowRoot!.innerHTML = `
                    <link rel="stylesheet" href="./app/components/te/te.css">`
        
                    const tecards = this.ownerDocument.createElement("section");
                    tecards.className = 'tecontainer'
                    this.tes.forEach((tecard) => {
                        tecards.appendChild(tecard);
                       
                    })
                    this.shadowRoot?.appendChild(tecards);
                   
                    }
                }
        
                customElements.define("te-container", tecontainer)     

        
        class novonecontainer extends HTMLElement {
            novones: components.Mynovone[] = [];
           
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
        
                novonedata.forEach((user) => {
                    const novonecard = this.ownerDocument.createElement(
                        "my-novone" ) as components.Mynovone;
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
                    this.shadowRoot!.innerHTML = `
                    <link rel="stylesheet" href="./app/components/novone/novone.css">`
        
                    const novonecards = this.ownerDocument.createElement("section");
                    novonecards.className = 'novonecontainer'
                    this.novones.forEach((novonecard) => {
                        novonecards.appendChild(novonecard);
                       
                    })
                    this.shadowRoot?.appendChild(novonecards);
                   
                    }
                }
        
                customElements.define("novone-container", novonecontainer)

                class novtwocontainer extends HTMLElement {
                    novtwos: components.Mynovtwo[] = [];
                   
                    constructor() {
                        super();
                        this.attachShadow({ mode: "open" });
                
                        novtwodata.forEach((user) => {
                            const novtwocard = this.ownerDocument.createElement(
                                "my-novtwo" ) as components.Mynovtwo;
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
                            this.shadowRoot!.innerHTML = `
                            <link rel="stylesheet" href="./app/components/novtwo/novtwo.css">`
                
                            const novtwocards = this.ownerDocument.createElement("section");
                            novtwocards.className = 'novtwocontainer'
                            this.novtwos.forEach((novtwocard) => {
                                novtwocards.appendChild(novtwocard);
                               
                            })
                            this.shadowRoot?.appendChild(novtwocards);
                           
                            }
                        }
                
                        customElements.define("novtwo-container", novtwocontainer)
        
                        

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
    mvs: components.Mymv[] = [];
   
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        mvdata.forEach((user) => {
            const mvcard = this.ownerDocument.createElement(
                "my-mv" ) as components.Mymv;
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
            this.shadowRoot!.innerHTML = `
            <link rel="stylesheet" href="./app/components/mv/mv.css">`

            const mvcards = this.ownerDocument.createElement("section");
            mvcards.className = 'mvcontainer'
            this.mvs.forEach((mvcard) => {
                mvcards.appendChild(mvcard);
               
            })
            this.shadowRoot?.appendChild(mvcards);
           
            }
        }

        customElements.define("mv-container", mvcontainer)


        class nlcontainer extends HTMLElement {
            nls: components.Mynl[] = [];
           
            constructor() {
                super();
                this.attachShadow({ mode: "open" });
        
                nldata.forEach((user) => {
                    const nlcard = this.ownerDocument.createElement(
                        "my-nl" ) as components.Mynl;
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
                    this.shadowRoot!.innerHTML = `
                    <link rel="stylesheet" href="./app/components/nl/nl.css">`
        
                    const nlcards = this.ownerDocument.createElement("section");
                    nlcards.className = 'nlcontainer'
                    this.nls.forEach((nlcard) => {
                        nlcards.appendChild(nlcard);
                       
                    })
                    this.shadowRoot?.appendChild(nlcards);
                   
                    }
                }
        
                customElements.define("nl-container", nlcontainer)

                
