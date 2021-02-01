const nbreAleatoire = max => {
    return Math.floor(Math.random() * max)
}

const shuffleArray = (taille) => {
    let array = new Array()
    for (let i = 0; i < taille; i++) {
        let alea = nbreAleatoire(taille)
        while (array.includes(alea)) alea = (alea + 1) % taille
        array[i] = alea
    }
    return array
}

const carteMemoire = {
    template: `
    <div class="w-100 d-flex justify-content-center" @click="tourne">
        <div class="carte-memoire" :style="{transform: 'rotateY(' + angle + 'deg)'}">
            <img :src="'./ressources/' + image +'.svg'" v-if="boolTourne">
        </div>
    </div>
    `,
    data() {
        return {
            angle: 180,
        }
    },
    props: {
        image: String,
        position: Number,
        boolTourne: Boolean
    },
    watch: {
        boolTourne() {
            this.angle = this.boolTourne ? 0 : 180
        }
    },
    methods: {
        tourne() {
            this.$emit('click-carte', this.position)
        }
    },
}

const vm = new Vue({
    el: '#app',
    components: { carteMemoire },
    data: {
        tabImage: ['apple', 'banana', 'brocoli', 'cherry', 'pepper', 'straw'],
        tabRandomPosition: shuffleArray(12),
        tabTourne: [false, false, false, false, false, false, false, false, false, false, false, false]
    },
    methods: {
        tourne(index) {
            this.tabTourne[index] = true
        }
    },
    watch: {
        tabTourne() {
            console.log('ca change')
        }
    }
})