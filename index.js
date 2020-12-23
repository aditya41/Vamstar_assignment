const solve = () => {

    // publication date
    console.log('Publication date is: ' + document.querySelector('.lbl-licitacao > font > font').innerText);

    // bidding date
    let arr = document.querySelectorAll('.lbl-licitacao');
    console.log('Bidding date is: ' + arr[5].querySelectorAll('font > font')[1].innerText);

    // object
    console.log('Object is: ' + document.querySelector('.field-content > p > font > font').innerText);

    // links
    let links_array = document.querySelectorAll('.field--name-field-icone > a');
    console.log('All links related to this tender are:')
    links_array.forEach((link) => {
        console.log(link.href);
    })
}

// function call
solve();