const Card = ({ coffee }) => {
  const { title, description, ingredients } = coffee;
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-ingredients">Ingredients: {ingredients.join(", ")}</p>
    </div>
  );
};

export default Card;
