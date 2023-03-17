export enum Attribute3{
    "img"= "img",
    "info"= "info",
    "fesha"="fesha",
    "noveda"="noveda",
    "moneh"="moneh",
    "cons" = "cons",
}

class Mynl extends HTMLElement{
    img?: string
    info?: string
    fesha?: string
    noveda?: string
    moneh?: string
    cons?: string

    static get observedAttributes(){
        const attrs : Record<Attribute3,null> ={
            img : null,
            info : null,
            fesha : null,
            noveda : null,
            moneh : null,
            cons : null,
        }
        return Object.keys(attrs)
    }
constructor(){
    super()
    this.attachShadow({mode: 'open'})
}
attributeChangedCallback(propName: Attribute3,oldValue: undefined,newValue: string){
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
        <div class= "nl">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.fesha}</p>
        <p>${this.noveda}</p>
        <p>${this.cons}<p>
        <h1>$:${this.moneh}</h1>
        </div>
        `
    }
}

}

export default Mynl;
customElements.define("my-nl", Mynl)