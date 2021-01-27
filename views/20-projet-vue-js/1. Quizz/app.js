const listQuiz = [
    {
        question: "Qui est l'emperreur de France le 2 decembre 1804",
        reponses: [
            "Clovis", "Abraham Lincoln", "Napoleon Bonaparte"
        ], indexRep: 2
    }, {
        question: "Quelle est la date de l'independance des Etas Unis",
        reponses: [
            "4 Juillet 1776", "18 Avril 1856", "30 Juin 1925"
        ], indexRep: 0
    }, {
        question: "La chute de l'empire Romain se situe en",
        reponses: [
            "15 ap. J.-C", "395 ap. J.-C", "-740 av. J.-C"
        ], indexRep: 1
    }, {
        question: "Quel est la capitale de la Slovenie",
        reponses: [
            "Ljubljana", "Belgrade", "Batislavie"
        ], indexRep: 0
    }, {
        question: "Combien d'habitant compte l'Irlande en 2020",
        reponses: [
            "1,365 Million", "21 Million", "4,9 Million"
        ], indexRep: 2
    }
]

const quiz = {
    template: `
        <div class="border rounded px-5 py-3 my-5 carte-quiz">
            <h5 class="text-center py-3 text-dark">
                {{ question }} ?
            </h5>
            <div class="container py-1">
                <div class="row">
                    <div class="col-lg text-center rounded mx-lg-3 my-1 mx-auto py-3 reponse fs-6" 
                    v-for="(reponse, index) in reponses" :key="'reponse' + index" @click="choixIndex(index)"
                    :class="{ 'reponse-choisi': indexChoix === index }"> 
                        {{ reponse }}</div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            indexChoix: null
        }
    },
    props: {
        question: String,
        reponses: Array,
        indexRep: Number,
        indexQuiz: Number
    },
    methods: {
        choixIndex(index) {
            if (this.indexChoix === index)
                this.indexChoix = null
            else this.indexChoix = index
            this.$emit('choix', this.indexChoix, this.indexQuiz, this.indexRep)
        }
    },
}

const vm = new Vue({
    el: "#app",
    data: {
        listQuiz,
        listResultat: listQuiz.map(() => null),
        note: '',
        textResultat: '',
        afficheTextResultat: false
    },
    components: { quiz },
    methods: {
        choix(indexChoix, indexQuiz, indexRep) {
            if (indexChoix === null) this.listResultat[indexQuiz] = null
            else this.listResultat[indexQuiz] = indexChoix === indexRep
        },

        valideResultat() {
            let nbreReponse = this.listResultat.filter(bool => bool !== null).length
            if (nbreReponse < this.listQuiz.length) console.log(nbreReponse)
            else {
                let nbreFaute = this.listResultat.filter(bool => !bool).length
                console.log(nbreFaute)
                switch (nbreFaute) {
                    case 0:
                        this.note = '5 / 5'
                        this.textResultat = `😎 Bravo, c'est un sans faute !!! 😎`
                        break
                    case 1:
                        this.note = '4 / 5'
                        this.textResultat = `🤏 Vous y êtes presque !!! 🤏`
                        break
                    case 2:
                        this.note = '3 / 5'
                        this.textResultat = `🤟 Encore un éffort !!! 🤟`
                        break
                    case 3:
                        this.note = '2 / 5'
                        this.textResultat = `😢 Il reste quelques érreurs !!! 😢`
                    case 4:
                        this.note = '1 / 5'
                        this.textResultat = `😤 Peut faire mieux !!! 😤`
                        break
                    case 5:
                        this.note = '0 / 5'
                        this.textResultat = `👎 T'es trop null !!! 👎`
                        break
                }
                this.afficheTextResultat = true
            }
        }
    }
})