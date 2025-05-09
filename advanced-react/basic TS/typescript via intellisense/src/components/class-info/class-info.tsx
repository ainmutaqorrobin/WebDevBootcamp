import "./style.css";

type ClassInfoProps = { name: string };
const ClassInfo = ({ name }: ClassInfoProps) => {
  return (
    <section className="custom-info">
      <header className="custom-info-header">
        <h2 className="custom-info-title">CodeLicks Academy</h2>
        <p className="custom-info-subtitle">Advanced Typescript in React</p>
      </header>
      <div className="custom-info-body">
        <h2 className="custom-info-subtitle">Instructor</h2>
        <p className="custom-info-name">Mohammad</p>
      </div>
      <footer className="custom-info-footer"></footer>
    </section>
  );
};

export default ClassInfo;
