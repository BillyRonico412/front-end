let vm = new Vue({
    el: '#app',
    data: {
        heure: 0,
        minute: 0,
        seconde: 0
    },
    methods: {
        deuxChiffre(nbre) {
            return nbre < 10 ? `0${nbre}` : `${nbre}`
        }
    },
    created() {
        let now = new Date()
        this.heure = now.getHours()
        this.minute = now.getMinutes()
        this.seconde = now.getSeconds()

        setInterval(() => {
            let now = new Date()
            this.heure = now.getHours()
            this.minute = now.getMinutes()
            this.seconde = now.getSeconds()
        })

        setInterval(() => {
            this.seconde++
            if (this.seconde === 60) {
                this.minute++
                this.seconde = 0
                if (this.minute === 60) {
                    this.heure++
                    this.minute = 0
                    if (this.heure === 24)
                        this.heure = 0
                }
            }
        }, 1000)
    },
})