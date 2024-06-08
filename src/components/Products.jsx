const ProductList = () => {
  const cards = [
    { image: "glass1.jpeg", text: "Card 1" },
    { image: "glass1.jpeg", text: "Card 2" },
    { image: "glass1.jpeg", text: "Card 3" },
    { image: "glass1.jpeg", text: "Card 4" },
    // Add more card objects as needed
  ];
  return (
    <>
      <p className="text-center text-2xl font-bold text-text">Our products..</p>
      <div className=" w-[85%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-60 object-cover"
              src={card.image}
              alt="Card Image"
            />
            <div className="p-4">
              <p className="text-center text-gray-700 font-semibold">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
