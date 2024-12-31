async function chooseGenre(){
    const movies = await fetchAPI()
    const genreChoice = valet i dropdown

    for(let i = 0; i < movies; i++){
        if(genreChoice === movies[i].genres){
            console.log(genreChoice)
        }
        else{
            console.log("Tyvärr kan vi inte hitta det du söker efter")
        }
    }
    
}
