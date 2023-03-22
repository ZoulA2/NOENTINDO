export enum Attribute6{
    "tit"="tit",
    "img"= "img",
    "info"= "info",
    "but"="but",
}

class Myte extends HTMLElement{
    tit?: string
    img?: string
    info?: string
    but?: string


    static get observedAttributes(){
        const attrs : Record<Attribute6,null> ={
            tit : null,
            img : null,
            info :null,
            but :null,

        }
        return Object.keys(attrs)
    }
constructor(){
    super()
    this.attachShadow({mode: 'open'})
}
attributeChangedCallback(propName: Attribute6,oldValue: undefined,newValue: string){
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
        <link rel="stylesheet" href="./app/components/te/te.css">
        <div class= "te">
        <h1> ${this.tit}</h1>
        <img class="imag" src="${this.img}">
        <p1><strong>${this.info}</strong></p1><button class="button">${this.but}</button>
        
        </div>
        `
    }
}

}

export default Myte;
customElements.define("my-te", Myte)
