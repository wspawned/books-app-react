import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setPageSize } from "../../redux/slices/generalSlice";

const AdminPanel = () => {

  const SIZE_OPTIONS = [5, 10, 15];
  const dispatch = useAppDispatch();
  const pageSize = useAppSelector(state=> state.general.pageSize);

  return (
    <div>
      Admin Panel

      <span>Change page size</span>
      <label htmlFor="page-size">
                    Page Size
                    <select
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
  )
};

export default AdminPanel;