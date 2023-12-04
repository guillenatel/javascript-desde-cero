async function getLocation(){
    try{
        const res = await fetch("https://rickandmortyapi.com/api/location?page=2"); 
        const data = await res.json(); 
        console.log(data); 
        data.results.forEach(location => {
            document.querySelector("body").innerHTML += `
            <h1>${location.name}</h1>
            <small>${location.id}</small>
            <p>${location.type}</p>
            `
        })
    }catch{
        console.log("Algo salio mal.")
    }
}

getLocation();