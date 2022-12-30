import './style.css';
import { useNavigate } from "react-router-dom";

const PageButtons:React.FC<{paramsPage:number, totalPages:number, paramsCategory:string}> = ({paramsPage, totalPages, paramsCategory}) => {
  const navigate = useNavigate();

  return (
    <div className='page-buttons'>
    {paramsPage>1 && (<button
    onClick={()=> {
      const newPageNumber =  Number(paramsPage) -1 ;
      navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
    } }
    >{`${paramsPage -1} <= ${paramsPage}`}</button>)}

    {paramsPage<totalPages && (<button
    onClick={()=> {
      const newPageNumber =  Number(paramsPage) +1 ;
      navigate(`/?category=${paramsCategory}&page=${newPageNumber}`);
    } }
    >{`${paramsPage} => ${paramsPage +1}`}</button>)}  
  </div>
  )
};

export default PageButtons;