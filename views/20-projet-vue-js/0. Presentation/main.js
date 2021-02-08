const listProjet = [
    {
        nom: 'Quizz',
        lienCode: 'https://github.com/BillyRonico412/front-end/tree/main/views/20-projet-vue-js/1.%20Quizz',
        lienProjet: 'http://billy-ronico.ovh:8080/front-end/20-projet-vue-js/1.%20Quizz/',
        lienImage: './images/quizz.png'
    }, {
        nom: 'Horaire',
        lienCode: 'https://github.com/BillyRonico412/front-end/tree/main/views/20-projet-vue-js/21.%20Horaire',
        lienProjet: 'http://billy-ronico.ovh:8080/front-end/20-projet-vue-js/21.%20Horaire/',
        lienImage: './images/horaire.png'
    }, {
        nom: 'Nombre Aleatoire',
        lienCode: 'https://github.com/BillyRonico412/front-end/tree/main/views/20-projet-vue-js/22.%20NombreAleatoire',
        lienProjet: 'http://billy-ronico.ovh:8080/front-end/20-projet-vue-js/22.%20NombreAleatoire/',
        lienImage: './images/aleatoire.png'
    }, {
        nom: 'Cesar',
        lienCode: 'https://github.com/BillyRonico412/front-end/tree/main/views/20-projet-vue-js/23.%20Cesar',
        lienProjet: 'http://billy-ronico.ovh:8080/front-end/20-projet-vue-js/23.%20Cesar/',
        lienImage: './images/cesar.png'
    }
]

const projet = {
    template: `
    <div class="col-xl-4 col-lg-6 my-4">
        <div class="card carte-portfolio">
            <img :src="lienImage" style="width: 100%;" class="card-img-top bg-light p-3">
            <hr>
            <div class="card-body">
                <h3 class="card-title text-center fw-bold fst-italic">{{ nom }}</h3>
            </div>
            <div class="card-footer text-center py-3">
                <a type="button" :href="lienCode" class="btn btn-dark">Code
                    Source</a>
                <a type="button" :href="lienProjet" class="btn btn-dark">Le projet</a>
            </div>
        </div>
    </div>
    `,
    props: {
        nom: String,
        description: String,
        lienCode: String,
        lienProjet: String,
        lienImage: String
    },
}

const vm = new Vue({
    el: '#app',
    components: { projet },
    data: {
        listProjet
    }
})