import { useNavigate } from 'react-router-dom';
import './style.css';
import { SIDEBAR_ITEMS } from '../../constants';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { resetSearchedWords } from '../../redux/slices/generalSlice';


function SideDrawer() {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className="side-drawer">

      <h2>Categories</h2>
      {SIDEBAR_ITEMS.map((item, index) => {
        return (
          <div className='side-drawer-item'
            onClick={() => {
              dispatch(resetSearchedWords());
              navigate(`/?category=${item.path}&page=1`);
            }}
            key={index}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default SideDrawer;