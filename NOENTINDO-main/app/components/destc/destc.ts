export enum Attribute{
    "img"= "img",
    "info"= "info",
    "cons" = "cons",
}

class Mydestc extends HTMLElement{
    img?: string
    info?: string
    cons?: string

    static get observedAttributes(){
        const attrs : Record<Attribute,null> ={
            img : null,
            info :null,
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

connectedCallback(): void{
    this.render();
}

render(){
    if (this.shadowRoot){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./app/components/destc/destc.css">

       <div class= "destc">
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1>
        <p>${this.cons}<p>
        </div>
        `
    }
}

}

export default Mydestc;
customElements.define("my-destc", Mydestc)
