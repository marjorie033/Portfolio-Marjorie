import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import lottie from "lottie-web"
import animationData from "/public/loading-anim.json"

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    })

    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete,
      })
    }, 6200)

    return () => {
      clearTimeout(timer)
      anim.destroy()
    }
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
      <div
        ref={animRef}
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