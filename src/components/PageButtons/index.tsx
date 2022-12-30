import './style.css';
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
//@ts-ignore
const PageButtons:React.FC<{paramsPage:number, totalPages:number, paramsCategory:string}> = ({paramsPage, totalPages, paramsCategory}) => {
  const navigate = useNavigate();
  const [activePageButtonsClass, setActivePageButtonsClass] = useState("page-buttons");

  let buttonClasses = [
    "Prev Page",
    "Next Page",
  ]
  
  const handleIntersectionObserver = () => {
    //define options
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }
    //define targets
    //@ts-ignore
    const targets = document.getElementById('page-buttons').querySelectorAll('button')
    //define the observer
    //@ts-ignore
    const activeClass = (target) => {
      const buttonObserver = new IntersectionObserver((buttonClasses, observer) => {
        buttonClasses.forEach(buttonClass => {
          console.log(buttonClass)
          if(buttonClass.isIntersecting) {
            setActivePageButtonsClass("page-buttons-distributed");
            // observer.disconnect;
          } else {setActivePageButtonsClass("page-buttons");}
        })
      }, options)
      buttonObserver.observe(target)
    }
    //loop trough the targets
    targets.forEach(activeClass)
  };

  useEffect(()=>{
    handleIntersectionObserver();
  })

  return (
    <div 
    // className='page-buttons'
    className={activePageButtonsClass}
    id='page-buttons'
    >
    {paramsPage>1 && (<button
    onClick={()=> {
      const newPageNumber =  Number(paramsPage) -1 ;
      navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
    } }
    >{`Prev Page ${paramsPage -1} <= ${paramsPage}`}</button>)}

    {paramsPage<totalPages && (<button
    onClick={()=> {
      const newPageNumber =  Number(paramsPage) +1 ;
      navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
    } }
    >{`Next Page ${paramsPage} => ${paramsPage +1}`}</button>)}  
  </div>
  )
};

export default PageButtons;