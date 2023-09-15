function card() {
    class Card {
        constructor(src, alt, header, text, priсe, selector) {
            this.alt = alt;
            this.header = header;
            this.text = text;
            this.src = src;
            this.priсe = priсe;
            this.parants = document.querySelector(selector);
            this.tansfer = 97;
            this.changeToRub();
        }

        changeToRub() {
            this.priсe = this.priсe * this.tansfer;
        }

        render() {
            
            const elm = document.createElement('div');
            elm.innerHTML=`
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.header}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.priсe}</span> руб/день</div>
                    </div>
                </div>`;
                
            this.parants.append(elm);
            
        }
    }

    getResues('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Card(img, altimg, title, descr, price, '.menu .container').render()
            })
        })

    async function getResues(url) {
        let res = await fetch(url)
        if(!res.ok) throw new Error(`Ошибка! URL:${url}, Status: ${res.status}`);
        return await res.json();
    }
}
export default card;