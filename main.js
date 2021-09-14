var fs = FSAPI();

fs.AddFile("Bo moge.txt", function() {
    return new Date("2012-12-13");
})

fs.AddFile("Nie rob tego.txt", function() {
    alert("to nie zadziała")
    return null
}

fs.Mount("/tmp/pomidor");
