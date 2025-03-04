function redirect(loc_index) {

    // Array of the locations to redirect to
    let loc_array = [
        "homepage.html",
        "GPoG/giza.html",
        "GWoC/wall.html",
        "Petra/petra.html",
        "Colosseum/colosseum.html",
        "Chichen/chichen.html",
        "Machu/machu.html",
        "Taj/taj.html",
        "Redeemer/CtR.html"
    ]

    // Change the window location based on the index provided
    window.location = loc_array[loc_index];
}