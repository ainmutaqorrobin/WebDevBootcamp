import "./style.css";

type CardProps = { children: any /* Get rid of any */ };

const Card = ({ children }: CardProps) => {
  return (
    <section className="m-4 card-container">
      {children}
    </section>
  );
};

export default Card;
