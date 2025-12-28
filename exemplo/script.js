/*
    Elaborar um programa para um cnama que o usuaroi coloque a duração 
    em minutos do filme e hretorne em hora(s)

    1. Nome do  filme  
    2. Duração em minutos
    3. Converter a duração e minutos em horas 
    3.1 Fazer a duraçõa de minutos dividida por 60 parapegar a duraão de horas 
    3.2 Arredondar a quantidade de horas para pegar somente as cheias
    3.3 Pegar o resultado da duração em minutos e rempover as horas cheias (horas * 60)
        1 hora = 60m
        10 minutos
        70 / 60 = 1.16 (arredondar para baixo) = 1 hora
        const inutos = 70 - 1 * 60 = 10
    4. Exibir o nome o filme 
    5. Exibir a duração em horas e minutos
*/

function  algoritimo(){

    //entrada de dados
    const titilo=document.getElementById("titulo").value;
    const duracao=document.getElementById("duraction").value;

    //processameno
    const horas= Math.floor(duracao/60);
    const minutos= duracao -(horas*60);

    //saida de dados
    document.getElementById("tituloSaida").textContent=titilo.toUpperCase();
    document.getElementById("duraSaida").textContent=horas+"hora(s) "+minutos+" minuto(s)";
}
