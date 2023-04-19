const itemshiba = nftsShiba;
const itemmonkey = nftsMonkey;
const itemninja = nftsNinja;
const itemhero = nftsHeroes;

function ChangeToShiba () {
    document.querySelector('.slide-infos-area-geral #img1').src = itemshiba[0].src;
    document.getElementById('slide-title1').innerHTML = itemshiba[0].title;
    document.getElementById('slide-price1').innerHTML = itemshiba[0].price;

    document.querySelector('.slide-infos-area-geral #img2').src = itemshiba[1].src;
    document.getElementById('slide-title2').innerHTML = itemshiba[1].title;
    document.getElementById('slide-price2').innerHTML = itemshiba[1].price;

    document.querySelector('.slide-infos-area-geral #img3').src = itemshiba[2].src;
    document.getElementById('slide-title3').innerHTML = itemshiba[2].title;
    document.getElementById('slide-price3').innerHTML = itemshiba[2].price;

    document.querySelector('.slide-infos-area-geral #img4').src = itemshiba[3].src;
    document.getElementById('slide-title4').innerHTML = itemshiba[3].title;
    document.getElementById('slide-price4').innerHTML = itemshiba[3].price;
}

function ChangeToMonkey () {
    document.querySelector('.slide-infos-area-geral #img1').src = itemmonkey[0].src;
    document.getElementById('slide-title1').innerHTML = itemmonkey[0].title;
    document.getElementById('slide-price1').innerHTML = itemmonkey[0].price;

    document.querySelector('.slide-infos-area-geral #img2').src = itemmonkey[1].src;
    document.getElementById('slide-title2').innerHTML = itemmonkey[1].title;
    document.getElementById('slide-price2').innerHTML = itemmonkey[1].price;

    document.querySelector('.slide-infos-area-geral #img3').src = itemmonkey[2].src;
    document.getElementById('slide-title3').innerHTML = itemmonkey[2].title;
    document.getElementById('slide-price3').innerHTML = itemmonkey[2].price;

    document.querySelector('.slide-infos-area-geral #img4').src = itemmonkey[3].src;
    document.getElementById('slide-title4').innerHTML = itemmonkey[3].title;
    document.getElementById('slide-price4').innerHTML = itemmonkey[3].price;
}

function ChangeToNinja () {
    document.querySelector('.slide-infos-area-geral #img1').src = itemninja[0].src;
    document.getElementById('slide-title1').innerHTML = itemninja[0].title;
    document.getElementById('slide-price1').innerHTML = itemninja[0].price;

    document.querySelector('.slide-infos-area-geral #img2').src = itemninja[1].src;
    document.getElementById('slide-title2').innerHTML = itemninja[1].title;
    document.getElementById('slide-price2').innerHTML = itemninja[1].price;

    document.querySelector('.slide-infos-area-geral #img3').src = itemninja[2].src;
    document.getElementById('slide-title3').innerHTML = itemninja[2].title;
    document.getElementById('slide-price3').innerHTML = itemninja[2].price;

    document.querySelector('.slide-infos-area-geral #img4').src = itemninja[3].src;
    document.getElementById('slide-title4').innerHTML = itemninja[3].title;
    document.getElementById('slide-price4').innerHTML = itemninja[3].price;
}

function ChangeToHero () {
    document.querySelector('.slide-infos-area-geral #img1').src = itemhero[0].src;
    document.getElementById('slide-title1').innerHTML = itemhero[0].title;
    document.getElementById('slide-price1').innerHTML = itemhero[0].price;

    document.querySelector('.slide-infos-area-geral #img2').src = itemhero[1].src;
    document.getElementById('slide-title2').innerHTML = itemhero[1].title;
    document.getElementById('slide-price2').innerHTML = itemhero[1].price;

    document.querySelector('.slide-infos-area-geral #img3').src = itemhero[2].src;
    document.getElementById('slide-title3').innerHTML = itemhero[2].title;
    document.getElementById('slide-price3').innerHTML = itemhero[2].price;

    document.querySelector('.slide-infos-area-geral #img4').src = itemhero[3].src;
    document.getElementById('slide-title4').innerHTML = itemhero[3].title;
    document.getElementById('slide-price4').innerHTML = itemhero[3].price;
}


function OpenMenu () {
    document.querySelector(".menu-modal-area").style.width = "100%" ;
    document.querySelector(".menu-modal-options").style.display = "flex";
}

function CloseMenu () {
    document.querySelector(".menu-modal-area").style.width = "0px"
    document.querySelector(".menu-modal-options").style.display = "none" ;
}