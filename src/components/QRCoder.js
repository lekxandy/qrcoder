import React, { useState } from 'react'
import qrcode from 'qrcode'
import '../components/QRCode.css'


export default function QRCoder(){

    const [texto, setTexto] = useState('')

    function setQR(){
        
        qrcode.toCanvas(document.getElementById("canvas"), texto)
        
    }

    return (
        <div>
            <canvas id="canvas"></canvas>
            <hr/>
            <input id="texto" onChange={event => setTexto(event.target.value)}/>
            <button onClick={()=>setQR()}>Gerar</button>
        </div>
    )

}
