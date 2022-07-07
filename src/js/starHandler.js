let containers = [];
//generate stars
$(document).ready(() => {
    containers.push($("#starContainer1"))
    containers.push($("#starContainer2"))
    containers.push($("#starContainer3"))

    function createStar() {
        this.obj = document.createElement("div");
        this.obj.classList.add("star");
        this.obj.style.top = (100 * Math.random()) + '%';
        this.obj.style.left = (100 * Math.random()) + '%';
        this.size = Math.floor(12 * Math.random()) + 4;
        this.obj.style.height =  this.size + 'px';
        this.obj.style.width = this.size + 'px';

        if (this.size < 8) {
            containers[0].append(this.obj);
        } else if (this.size < 14) {
            containers[1].append(this.obj);
        } else {
            containers[2].append(this.obj);
        }
    }

    for (let i = 0; i < 400; i++) {
        new createStar()
    }
})

//parallax
$(document).mousemove((e) => {
    let x = e.pageX,
        y = e.pageY,
        width = containers[0].width(),
        height = containers[0].height(),
        xpr = x/width*100-50,
        ypr = y/height*100-50

    containers[0].css({"bottom": ((ypr/30) + "%"), "right": ((xpr / 30) + "%"), })
    containers[1].css({"bottom": ((ypr/25) + "%"), "right": ((xpr / 25) + "%"), })
    containers[2].css({"bottom": ((ypr/15) + "%"), "right": ((xpr / 15) + "%"), })
}).mouseover()