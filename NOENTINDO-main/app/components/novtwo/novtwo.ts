

export enum Attribute5{
    "img"= "img",
    "fesha"="fesha",
    "info"= "info",
    "moar"="moar",

}

class Mynovtwo extends HTMLElement{
    img?: string
    fesha?: string
    info?: string
    moar?: string

    static get observedAttributes(){
        const attrs : Record<Attribute5,null> ={
            img : null,
            fesha : null,
            info : null,
            moar : null,

        }
        return Object.keys(attrs)
    }
constructor(){
    super()
    this.attachShadow({mode: 'open'})
}
attributeChangedCallback(propName: Attribute5,oldValue: undefined,newValue: string){
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
        <link rel="stylesheet" href="./app/components/novtwo/novtwo.css">
        <div class= "novtwo">
        <img class="imag" src="${this.img}">
        <p>${this.fesha}</p>
        <p1><strong>${this.info}</strong></p1>
        <h1>${this.moar}</h1>
        </div>
        `
    }
}

}


export default Mynovtwo;
customElements.define("my-novtwo", Mynovtwo)