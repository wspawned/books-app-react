import { useNavigate } from 'react-router-dom';
import './style.css';
import { SIDEBAR_ITEMS } from '../../constants';


function SideDrawer() {

  const navigate = useNavigate();

  return (
    <div className="side-drawer">

      <h2>Categories</h2>
      {SIDEBAR_ITEMS.map((item, index) => {
        return (
          <div className='side-drawer-item'
            onClick={() => {
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