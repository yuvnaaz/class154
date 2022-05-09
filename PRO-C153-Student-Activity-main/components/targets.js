AFRAME.registerComponent("rings", {
    init: function(){
        for (var i = 1; 1<=20; i++){
            var id = `ring${i}`
            var posX = (Math.random()*3000+(-1500))
            var posZ = (Math.random()*3000+(-1500))
            var posY = (Math.random()*2+(-1))
            var position = {x:posX, y: posY, z: posZ}
        this.createRings(id, position)
        }
    }, 
    createRings: function(id, position){
        var terrainel = document.querySelector("#terrain")
        var ringel = document.createElement("a-entity")
        ringel.setAttribute("id", id)
        ringel.setAttribute("geometry", {primitive: "torus", radius: 8})
        ringel.setAttribute("material",{color: "#ff9100"})
        ringel.setAttribute("position", position)
        terrainel.appendChild(ringel)

    }
})