export enum Attribute{
    "img"= "img",
    "info"= "info",
    "fesha"="fesha",
    "moneh"="moneh",
    "cons" = "cons",
}

class Mymv extends HTMLElement{
    img?: string
    info?: string
    fesha?: string
    moneh: number
    cons?: string

    static get observedAttributes(){
        const attrs : Record<Attribute,null> ={
            img : null,
            info : null,
            fesha : null,
            moneh : null,
            cons : null,
        }
        return Object.keys(attrs)
    }
constructor(){
    super()
    this.attachShadow({mode: 'open'})
}
attributeChangedCallback(propName: Attribute,oldValue: undefined,newValue: string){
    switch(propName){
     default:
     this[propName] = newValue;
     this.render();
     break;
    }
    this.render()
}

connectedCallback(){
    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/mv/mv.css">
        <div class= "mv">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.fesha}</p>
        <p>${this.cons}<p>
        <h1>$:${this.moneh}</h1>
        </div>
        `
    }
}

}


export default Mymv;
customElements.define("my-mv", Mymv)