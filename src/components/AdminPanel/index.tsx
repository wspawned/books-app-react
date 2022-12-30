import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setPageSize } from "../../redux/slices/generalSlice";
import './style.css';

const AdminPanel = () => {
  const SIZE_OPTIONS = [5, 10, 15];
  const dispatch = useAppDispatch();
  const pageSize = useAppSelector((state) => state.general.pageSize);

  return (
    <div className="admin-panel" >
      <div className="panel-content" >
      <h2>Admin Panel</h2>
      <label htmlFor="page-size">
        Chance Page Size
        <select
          className="size-select"
          id="page-size"
          value={pageSize}
          onChange={(e) => {
            dispatch(setPageSize(Number(e.target.value)));
          }}
          onBlur={(e) => {
            dispatch(setPageSize(Number(e.target.value)));
          }}
        >
          <option />
          {SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>
      </div>
    </div>
  );
};

export default AdminPanel;