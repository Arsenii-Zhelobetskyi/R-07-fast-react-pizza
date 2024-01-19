import Button from "../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "../cart/cartSlice.js";
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const handleDeletion = () => {
    dispatch(deleteItem(pizzaId));
  };
  return (
    <Button type="small" onClick={handleDeletion}>
      Delete
    </Button>
  );
}

export default DeleteItem;
