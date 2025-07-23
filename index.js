class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque indefinido';
        }

        console.log(`O ${this.tipo} com nome ${this.nome} e idade ${this.idade} anos, atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe
const heroi1 = new Hero('Stalfy', 30, 'monge');
const heroi2 = new Hero('Takayashy', 1000, 'ninja');
const heroi3 = new Hero('Andergor', 54, 'guerreiro');
const heroi4 = new Hero('Gensormir', 3254, 'mago');


heroi1.atacar();  // Saída: o guerreiro atacou usando espada
heroi2.atacar();  // Saída: o mago atacou usando magia
heroi3.atacar();
heroi4.atacar();