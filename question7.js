let language = "Tumbuka"

if(language === "chichewa"){
    console.log("Muli bwanji");
}
else if(language === "Yao"){
    console.log("Muli uli");
}
else if(language === "Tumbuka"){
    console.log("Muli wuli");
}

switch(language){
    case "chichewa":
        console.log("Muli bwanji");
        break;

    case "Yao":
        console.log("Muli uli");
        break;

    case "Tumbuka":
        console.log("Muli wuli");
        break;

    default:
        console.log("how are you");
}