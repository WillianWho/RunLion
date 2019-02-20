function desenhar() {
    var cnv = document.getElementById('cnv');
    if (cnv.getContext) {
        var ctx = cnv.getContext('2d');
        ctx.fillRect(10, 20, 10, 10);
    }
}