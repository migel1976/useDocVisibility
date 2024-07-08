import { useEffect } from "react";
import { useState } from "react";

// const useDocVisible=(document)=>{
const useDocVisible=()=>{
    const [count, setCount]=useState(0)
    const [visible, setVisible]=useState(true)
    const onVisible=()=>{
            if (document.visibilityState === "visible") {
                setVisible(true)
            }
             else {
                setVisible(false)
                setCount(x=>x+1)
            }
    }
    useEffect(()=>{
        document.addEventListener("visibilitychange", onVisible)
        return ()=>document.removeEventListener("visibilitychange", onVisible)
    })
    return {
        count, 
        visible
    }
}
export default useDocVisible