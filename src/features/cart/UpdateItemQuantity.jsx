import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
