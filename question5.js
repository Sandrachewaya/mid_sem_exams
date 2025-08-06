let trafficlight = "red";

if (trafficlight=== "red"){
    console.log("stop");
    setTimeout(delayprint,500000);

}
else if (trafficlight === "yellow"){
    console.log("get ready")
     setTimeout(delayprint,500000);
}
else if (trafficlight === "green"){
    console.log("gooo")
     setTimeout(delayprint,500000);
}
else {
    console.log("mind the passanger")
}

switch(trafficlight){
    case"red":
    console.log("stop");
    setTimeout(delayprint,500000);
    break;


case "yellow":
    console.log("get ready")
     setTimeout(delayprint,500000);
     break;
case "green":
    console.log("gooo")
     setTimeout(delayprint,500000);
default:
    console.log("mind the passanger")
    break;


}