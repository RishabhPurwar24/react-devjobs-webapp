import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = () => {
  const cards = useSelector((state) => state.jobReducer);

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
