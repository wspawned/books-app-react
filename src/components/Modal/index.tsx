import React, { PropsWithChildren, useEffect, useRef } from "react"
import { createPortal } from "react-dom";


const Modal:React.FC <PropsWithChildren > = ({ children}) => {

  const elRef = useRef <HTMLElement | null> ()  ;

  if (!elRef.current) {
    
    elRef.current = document.createElement("div") ;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal")! as HTMLElement;
    
    modalRoot.appendChild(elRef.current!);
    
    return () => { modalRoot.removeChild(elRef.current!) };
  }, [])  ;

  return createPortal(<div className="modal-trailer" > {children} </div>, elRef.current);
};

export default Modal;