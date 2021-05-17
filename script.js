url = 'https://api.unsplash.com/photos/random?client_id=NVf-oi5hMlI8RKMWqz8_Gti6spImU1tTYJkkl3hXFtY'

let fetchFromUrl = async () => {
    let dataFetch = await fetch(url);
    let jsonData = await dataFetch.json();
    
    let divinner = document.querySelector('.carousel-inner')
    
    let caritem = domMachine('div','carousel-item active')

    let img = domMachine('img','d-block w-100')

    var string = '&w=720&h=576'
    // var encodedString = btoa(string)
    // console.log(encodedString)
    // var resultstring = encodedString.substr(0, 15)
    // console.log(resultstring)
    img.src = `${jsonData.urls.raw}`
    //?ixid=ak_1e2a2efbb121c89b8e9edabb4a021d301b283ac8ff8c5146ca80beaa0144d371${string}`
    
    caritem.append(img)
    divinner.append(caritem)
    console.log(jsonData.urls);
    console.log(img.src)
}

// Dom machine for creating elements
let domMachine =  ((element, className = '', elementId = '') => {
    let domMachineElement = document.createElement(element);
    domMachineElement.setAttribute('class',className);
    domMachineElement.setAttribute('id',elementId);
    return domMachineElement;
})

fetchFromUrl();