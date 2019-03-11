function onLoadPage() {
    document.addEventListener("DOMContentLoaded", function () {
        const canvas = document.getElementById('game-canvas');
        const ctx = canvas.getContext('2d');
        const obj = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" });
        obj.draw(ctx);
        console.log('Webpack is working!!!!!!!!!!!');
    });
}

module.exports = onLoadPage;