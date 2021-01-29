const nbreAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1)
}

const vm = new Vue({
    el: '#app',
    data: {
        min: 0,
        max: 10,
        nbre: 0,
        boolBouton: false
    },
    methods: {
        generer() {
            if (0 <= this.min && this.min <= this.max) {
                this.boolBouton = true
                let interval = setInterval(() => {
                    this.nbre = nbreAleatoire(this.min, this.max)
                }, 100)
    
                setTimeout(() => {
                    clearInterval(interval)
                    this.boolBouton = false
                }, 2000)
            }
        }
    },
})