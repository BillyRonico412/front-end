const getAllPokemons = () => new Promise(next => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(reponses => next(reponses.data.results))
})

const getInfoPokemon = urlPokemon => new Promise(next => {
    axios.get(urlPokemon).then(reponses => next(reponses.data))
})

const getNameFrPokemon = nameEn => new Promise(next => {
    axios.get('https://pokeapi.co/api/v2/pokemon-species/' + nameEn)
        .then(reponses => next(reponses.data.names[4].name))
})

const typeColors = {
    grass: '#78c850',
    ground: '#E2BF65',
    dragon: '#6F35FC',
    fire: '#F58271',
    electric: '#F7D02C',
    fairy: '#D685AD',
    poison: '#966DA3',
    bug: '#B3F594',
    water: '#6390F0',
    normal: '#D9D5D8',
    psychic: '#F95587',
    flying: '#A98FF3',
    fighting: '#C25956',
    rock: '#B6A136',
    ghost: '#735797',
    ice: '#96D9D6'
};

const pokemon = {
    template: `
    <div class="carte-pokemon text-center rounded m-2" :style="{ 'background-color': color}">
        <img :src="image" style="width: 60%;">
        <h5 class="text-dark pb-3 text-capitalize">{{ nom }}</h5>
    </div>
    `,
    props: {
        nom: String,
        type: String,
        image: String
    },
    computed: {
        color() {
            return typeColors[this.type]
        }
    }
}

const vm = new Vue({
    el: '#app',
    data: {
        pokemons: [],
        finChargement: false,
        texte: ''
    },
    components: { pokemon },
    methods: {
        testRecherche(nom) {
            return new RegExp('^[a-zA-Z]*' + this.texte + '[a-zA-Z]*$', 'i').test(nom)
        }
    },
    created() {
        (async () => {
            let allPokemons = await getAllPokemons()
            console.log(allPokemons)
            allPokemons.forEach(async pokemonData => {
                let pokemonInfo = await getInfoPokemon(pokemonData.url)
                this.pokemons.push({
                    nom: await getNameFrPokemon(pokemonInfo.name),
                    image: pokemonInfo.sprites.front_default,
                    type: pokemonInfo.types[0].type.name
                })
                setTimeout(() => this.finChargement = true, 3000)  
            })
        })()
    },
})