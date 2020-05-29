import words from './words.json'

export default class PoemMaker {


    constructor(p) {
        this.def = "ال"
        this.adjF = "ة"
        this.vF = "ت"
        this.c = words.connectors;
        this.p = p?p:5
        this.filterWords(this.p)
    }

    filterWords = function (p) {
        this.n = words.nouns;
        this.v = words.verbs;
        this.adj = words.adjectives;
        this.adv = words.adverbs;

        //FILTER BY SEX
        this.nM = this.n.filter(x => x.g === "m")
        this.adjM = this.adj.filter(x => x.g === "m")

        // this.n = this.n.filter(x => Math.abs(p - x.p) < 3)
        // this.adj = this.adj.filter(x => Math.abs(p - x.p) < 3)
        // this.adv = this.adv.filter(x => Math.abs(p - x.p) < 3)
    }


    vRand = function (g) {
        let i = Math.floor(Math.random() * this.v.length);
        if (g === "f"){
            return "ت" + this.v[i].substring(1)
        }
        return this.v[i]
    }

    cRand = function (g) {
        let i = Math.floor(Math.random() * this.c.length);
        return this.c[i]
    }

    advRand = function (g) {
        let i = Math.floor(Math.random() * this.adv.length);
        return this.adv[i].w
    }

    adjRand = function (g) {
        let word = this.adj[Math.floor(Math.random() * this.adj.length)].w
        if (g==="f")return word + "ة"
        return word

    }

    nRand = function (g) {
        if (g==="f")return this.nF[Math.floor(Math.random() * this.nF.length)].w
         return this.nM[Math.floor(Math.random() * this.nM.length)].w
 
    }

    makePoem(n) {

        let poem = []

        if (!n) n = 1
        for (let index = 0; index < n; index++) {
            let connector = "";
            if(index<n){
                connector = this.cRand()
            }
            poem.push(connector + " " + this.makeSentence());
        }
        return poem;
    }

    makeSentence() {
        let type = Math.floor(Math.random() * 8)
        let s = "";
        let g = Math.floor(Math.random * 2)?"f":"m"
        if (type === 0){
            s = s + this.vRand(g) + " " + this.def + this.nRand(g) + " " + this.def + this.adjRand(g) 
        }
        else if (type === 1){
            s = s + this.vRand(g) + " " + this.def + this.nRand(g) + " " + this.advRand(g)
        }
        else if (type === 2){
            s = s + this.vRand(g) + " " + this.advRand(g) + " " + this.cRand(g) + " " + this.vRand(g) + " " + this.advRand(g)
        }
        else if (type === 3){
            s = s + this.def + this.nRand(g) + " " + this.vRand(g) + " " + this.nRand(g) 
        }
        else if (type === 4){
            s = s + this.def + this.nRand(g) + " " + this.vRand(g) + " " + this.cRand(g) + " " + this.vRand(g) 
        }
        else if (type === 5){
            s = s + this.nRand(g) + " " + this.def + this.nRand(g) + " " + this.vRand(g)
        }
        else if (type === 6){
            s = s + this.advRand(g) + " " + this.vRand(g) + " " + this.def + this.nRand(g) + " " + this.advRand(g) 
        }
        else if (type === 7){
            s = s + this.def + this.nRand(g) + " " + this.vRand(g) + " " + this.def + this.nRand(g) + " " + this.advRand(g)
        }

        return s;
    }
}