import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import Button from "../../ui/Button";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { UpdateItemQuantity } from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <span>{quantity}&times;</span> {name}
      </p>
      <div className="flex item-center justify-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
