async function getDataLand(){
    const response = await fetch('land.json');
    const data = await response.json();

    return data;
}

async function getDataStad(){
    const response = await fetch('stad.json');
    const data = await response.json();

    return data;
}

function load(){
    let dataLand = getDataLand();
    let dataStad = getDataStad();
}

function display(x){
    console.log(x);
    document.getElementById('Land').innerHTML = land[x].countryname;
}
