import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import Button from "../../ui/Button";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        <span>{quantity}&times;</span> {name}
      </p>
      <div className="flex item-center justify-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
