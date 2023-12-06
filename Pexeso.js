var images = ["PexesoPics/Bitcoin.png","PexesoPics/BNB.png","PexesoPics/Ethereum.png","PexesoPics/INJ.png","PexesoPics/LTC.png","PexesoPics/USDT.png"]

function flipCard(ID){
    console.log(ID)
    var cardImg = document.getElementById(ID).getElementsByTagName("img")[0]
    if (cardImg.src.endsWith("PexesoPics/Crypto.png")) {
        cardImg.src = images[cardImg.dataset.imgindex];
    } else {
        cardImg.src = "PexesoPics/Crypto.png";
    }
}