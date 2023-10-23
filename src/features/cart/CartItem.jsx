function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;

{
  /* <li className="py-3 sm:flex sm:items-center sm:justify-between">
<p className="mb-1 sm:mb-0">
  <span>{quantity}&times;</span> {name}
</p>
<div className="flex item-center justify-center sm:gap-6">
  <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
  <Button type="small">Delete</Button>
</div>
</li> */
}
