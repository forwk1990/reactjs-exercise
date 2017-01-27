import React from 'react'

class Canvas extends React.Component{

    componentDidMount(){
        const theCanvas = document.querySelector("#theCanvas")
        console.log(theCanvas)
        const context = theCanvas.getContext("2d")
        this.draw(context)
    }

    draw(context) {
        if (!context)return

        // background
        context.fillStyle = "#ffffaa"
        context.fillRect(0, 0, 500, 300)

        // text
        context.fillStyle = '#000000'
        context.font = '20px Sans-Serif'
        context.textBaseline = 'top'
        context.fillText('Hello World!', 195, 80)

        // image
        var helloWorldImage = new Image()
        helloWorldImage.onload = function () {
            context.drawImage(helloWorldImage, 155, 110)
        }
        helloWorldImage.src = require('cj')

        // box
        context.strokeStyle = '#000000'
        context.strokeRect(5, 5, 490, 290)
    }

    render(){
        return (
            <div className="canvas">
                <canvas id="theCanvas"></canvas>
            </div>
        )
    }

}

export default Canvas