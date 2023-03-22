export enum Attribute4{
    "img"= "img",
    "fesha"="fesha",
    "info"= "info",
    "ix"= "ix",
    "moar"="moar",

}

class Mynovone extends HTMLElement{
    img?: string
    fesha?: string
    info?: string
    ix?: string
    moar?: string

    static get observedAttributes(){
        const attrs : Record<Attribute4,null> ={
            img : null,
            fesha : null,
            info : null,
            ix : null,
            moar : null,

        }
        return Object.keys(attrs)
    }
constructor(){
    super()
    this.attachShadow({mode: 'open'})
}
attributeChangedCallback(propName: Attribute4,oldValue: undefined,newValue: string){
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
        <link rel="stylesheet" href="./app/components/novone/novone.css">
        <div class= "novone">
        <img class="imag" src="${this.img}">
        <p>${this.fesha}</p>
        <p1><strong>${this.info}</strong></p1>
        <p2>${this.ix}</p2>
        <h1><strong>${this.moar}</strong></h1>
        </div>
        `
    }
}

}


export default Mynovone;
customElements.define("my-novone", Mynovone)