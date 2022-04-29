

class RainingLink {
    create(size, xpos, link, image_path, speed) {
        var $obj = $(`
        <div class="rain" style="left: ${xpos}">
            <a href="${link}" target="_blank">
                <img src="${image_path}" width="${size}" />
            </a>
        </div>`);
        $("#background").append($obj);
        $obj.animate({ top  : (window.outerHeight) + "px" },speed);
        $.when($obj).then(function() {
            $obj.remove();
        })
    }
}

function rain_random (link, img) {
    size  = Math.round(Math.random() * 10) + 30;
    xpos  = Math.random() * window.outerWidth;
    speed = Math.round(Math.random() * 3000) + 15000;
    term  = Math.round(Math.random() * 700);

    rain = new RainingLink();
    setTimeout(function() {
        rain.create(size, xpos, link, img, speed);
    }, term)
}