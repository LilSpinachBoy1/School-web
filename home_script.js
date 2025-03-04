function redirect(loc_index) {

    // Change to an array and access with index?

    switch (loc_index) {
        case 0:  // Home page
            window.location = "homepage.html";
            break;
        case 1:  // Giza
            window.location = "GPoG/giza.html";
            break;
        case 2:  // China
            window.location = "GWoC/wall.html";
            break;
        case 3:  // Petra
            window.location = "Petra/petra.html";
            break;
        case 4:  // Colosseum
            window.location = "Colosseum/colosseum.html";
            break;
        case 5:  // Chichen
            window.location = "Chichen/chichen.html";
            break;
        case 6:  // Machu
            window.location = "Machu/machu.html";
            break;
        case 7:  // Taj
            window.location = "Taj/taj.html";
            break;
        case 8:  // Redeemer
            window.location = ""
        default:
            console.log("Error: could not match index to a page")
    }
}