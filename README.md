## Distribuidor de Pokemon

-> Teste para vaga frontend na [Tino](https://www.tino.com.br/)

##_instruções_

Como a aplicação funciona:

    1 -  Carregue os detalhes do pokemon no momento da inicialização da aplicação.
        API GET para detalhes do pokemon https://pokeapi.co/api/v2/pokemon/{name}/.

    2 - Ao clicar no Botão, distribuir de forma aleatória os pokemons entre os treinadores.

    3 - Exiba os resultados na tela, respeitando os campos:
        Nome do treinador, Foto do treinador, Foto do Pokemon, Nome do Pokemon e ID do Pokemon.

        PS. A foto do pokemon que queremos utilizar está na seguinte posição do json: [POKEMON].sprites.other.dream_world.front_default

    4 - Colocando efeitos visuais da lista dos treinadores meio de CSS classe no elemento HTML <div className="item undefined | ready ">.

          1 - Se o Treinador receber um Pokémon: `<div className="item ready">`
          2 - Enquanto o **Treinador** não receber um pokemon: `<div className="item">`
          3 - Se o Treinador receber um Pokémon que não existe: `<div className="item undefined">`

    5 - (Opcional) Escreva um teste automátizado para a aplicação.
