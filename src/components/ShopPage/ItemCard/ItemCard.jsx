const ItemCard = ({
	increment,
	decrement,
	addToCard,
	amount,
	item,
}) => {
	return (
		<div>
			<img src={item.im} alt={`Image of ${item.name}`} />

			{item.name}
			<div>
				<button >+</button>
				<button>-</button>
				<input type="number" name="" id="" />
                <button>Add to Cart</button>
			</div>
		</div>
	);
};

export default ItemCard;
