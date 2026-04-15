import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { setWasmUrl } from '@lottiefiles/dotlottie-web'

setWasmUrl("/dotlottie-player.wasm")


export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete,
      })
    }, 6200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={containerRef} style={{
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      backgroundColor: "#FFD341",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
    }}>
      <DotLottieReact
        src="/loading-anim.json"
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />
      
      <p 
      className="font-surgena"  
      style={{
        color: "#15141F",
        fontSize: "16px",
        letterSpacing: "4px",
        textTransform: "uppercase",
        opacity: 0.7,
        margin: 0,
      }}>
        Loading...
      </p>
    </div>
  )
}