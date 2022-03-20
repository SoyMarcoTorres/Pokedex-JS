const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; // Busca el nombre en la API
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./imgs/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        console.log(pokeImg);

        let pokeID = data.id;
        console.log(pokeID);
        pokeNumber(pokeID);
        
        let pokeNames = data.name;
        pokeNames = pokeNames.toUpperCase();
        pokeNombre(pokeNames);
        console.log(pokeNames);
        
        let pokeType = data.types[0].type.name;
        pokeTypes(pokeType);
        console.log(pokeType);
        
        let pokeHP = data.stats[0].base_stat;
        pokeStatHP(pokeHP);
        console.log(pokeHP);
        
        let pokeAT = data.stats[1].base_stat;
        pokeAttack(pokeAT)
        console.log(pokeAT);
        
        let pokeDF = data.stats[2].base_stat;
        pokeDefense(pokeDF),
        console.log(pokeDF);
        
        let pokeSA = data.stats[3].base_stat;
        pokeSAttack(pokeSA);
        console.log(pokeSA);

        let pokeSD = data.stats[4].base_stat;
        pokeSDefense(pokeSD);
        console.log(pokeSD);

        let pokeSP = data.stats[5].base_stat;
        pokeSpeed(pokeSP);
        console.log(pokeSP);
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombre = (url) => {
    const nombre = document.getElementById("pokeNames");
    nombre.innerHTML = url;
}

const pokeNumber = (url) => {
    const id = document.getElementById("pokeID");
    id.innerHTML = url;
}

const pokeTypes = (url) => {
    const types = document.getElementById("pokeType");
    types.innerHTML = url;
}

const pokeStatHP = (url) => {
    const statsHP = document.getElementById("pokeHP");
    statsHP.innerHTML = url;
}

const pokeAttack = (url) => {
    const attack = document.getElementById("pokeAT");
    attack.innerHTML = url;
}

const pokeDefense = (url) => {
    const defense = document.getElementById("pokeDF");
    defense.innerHTML = url;
}

const pokeSAttack = (url) => {
    const sattack = document.getElementById("pokeSA");
    sattack.innerHTML = url;
}

const pokeSDefense = (url) => {
    const sdefense = document.getElementById("pokeSD");
    sdefense.innerHTML = url;
}

const pokeSpeed = (url) => {
    const speed = document.getElementById("pokeSP");
    speed.innerHTML = url;
}