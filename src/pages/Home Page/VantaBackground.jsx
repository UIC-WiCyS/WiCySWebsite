import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function VantaBackground(props) {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.00,
      minWidth: 300.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xb1d34a,
      backgroundColor: 0x01172f,
      points: 16.00,
      maxDistance: 32.00,
      spacing: 24.00
    }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return <div ref={myRef}>
    
  </div>
}