class MyBalise extends HTMLElement {
        constructor() {
            super();
            //this.content_od = this.getAttribute("content");
            this.innerText = this.textContent; // Set the innerText of the custom element
            this.style.color = "white";
            this.style.fontSize = "15px";
            this.style.fontFamily = 'Rubik';
            this.style.background = "linear-gradient(to right, white,dodgerblue)";
            this.style.padding = "10px 15px";
            this.style.marginTop = "10px";
            this.style.borderRadius = "5px";
        }
    }
    customElements.define('button-od', MyBalise);
