let a = +prompt("ayin nomresini daxil edin:")

switch (a) {
    case 1:
        case 01:
        console.log("yanvar");
        break;
    case 2:
        case 02:
        console.log("fevral");
        break;
    case 3:
        case 03:
        console.log("mart");
        break;
    case 4:
        case 04:
        console.log("aprel");
        break;
    case 5:
        case 05:
        console.log("may");
        break;
    case 6:
        case 06:
        console.log("iyun");
        break;
    case 7:
        case 07:
        console.log("iyul");
        break;
    case 8:
        case 08:
        console.log("avqust");
        break;
    case 9:
        case 09:
        console.log("sentyabr");
        break;
    case 10:
        console.log("oktyabr");
        break;
    case 11:
        console.log("noyabr");
        break;
    case 12:
        console.log("dekabr");
        break;
    default:
        console.log("Bele bir ay yoxdur:");
        break;

}




let date = prompt("noqteyle ayrilmis il,ay,gun daxil edin:")
if (date.split(".")[1] === "1") {
    console.log(date.split(".")[2] + " yanvar " + date.split(".")[0] + " ci il");
} else if (date.split(".")[1] === "2") {
    console.log(date.split(".")[2] + " fevral " + date.split(".")[0] + " ci il");
} else if (date.split(".")[1] === "3") {
    console.log(date.split(".")[2] + " mart " + date.split(".")[0] + " ci il");
} else if (date.split(".")[1] === "4") {
    console.log(date.split(".")[2] + " aprel " + date.split(".")[0] + " ci il");
} else if (date.split(".")[1] === "5") {
    console.log(date.split(".")[2] + " may " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "6") {
    console.log(date.split(".")[2] + " iyun " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "7") {
    console.log(date.split(".")[2] + " iyul " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "8") {
    console.log(date.split(".")[2] + " avqust " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "9") {
    console.log(date.split(".")[2] + " sentyabr " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "10") {
    console.log(date.split(".")[2] + " oktyabr " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "11") {
    console.log(date.split(".")[2] + " noyabr " + date.split(".")[0] + " ci il");
}else if (date.split(".")[1] === "12") {
    console.log(date.split(".")[2] + " dekabr " + date.split(".")[0] + " ci il");
}else{
    console.log("Bele secim yoxdur");
}


