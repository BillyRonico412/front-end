const coder = (texte, decalage) => {

    let result = ""

    for (let i = 0; i < texte.length; i++) {
        let codeA = 0
        let boolLettre = false

        if ("A".charCodeAt(0) <= texte.charCodeAt(i) && texte.charCodeAt(i) <= "Z".charCodeAt(0)) {
            codeA = "A".charCodeAt(0)
            boolLettre = true
        }

        else if ("a".charCodeAt(0) <= texte.charCodeAt(i) && texte.charCodeAt(i) <= "z".charCodeAt(0)) {
            codeA = "a".charCodeAt(0)
            boolLettre = true
        }

        if (boolLettre) {
            let rang = texte.charCodeAt(i) - codeA
            rang = (rang + decalage) % 26
            result += String.fromCharCode(rang + codeA)
        }
        
        else result += texte.charAt(i)
    }

    return result

}

const decoder = (texte, decalage) => {

    let result = ""

    for (let i = 0; i < texte.length; i++) {
        let codeA = 0
        let boolLettre = false

        if ("A".charCodeAt(0) <= texte.charCodeAt(i) && texte.charCodeAt(i) <= "Z".charCodeAt(0)) {
            codeA = "A".charCodeAt(0)
            boolLettre = true
        }

        else if ("a".charCodeAt(0) <= texte.charCodeAt(i) && texte.charCodeAt(i) <= "z".charCodeAt(0)) {
            codeA = "a".charCodeAt(0)
            boolLettre = true
        }

        if (boolLettre) {
            let rang = texte.charCodeAt(i) - codeA
            rang = rang - decalage
            if (rang < 0) rang += 26
            result += String.fromCharCode(rang + codeA)
        }
        
        else result += texte.charAt(i)
    }

    return result

}

const vm = new Vue({
    el: '#app',
    data: {
        decalage1: 3,
        textCoder1: '',
        decalage2: 3,
        textCoder2: '',
        onglet: 0,
        textResult1: '',
        textResult2: ''
    },
    methods: {
        code() {
            this.textResult1 = coder(this.textCoder1, parseInt(this.decalage1))
        },
        decode() {
            this.textResult2 = decoder(this.textCoder2, parseInt(this.decalage2))
        },
    },
})