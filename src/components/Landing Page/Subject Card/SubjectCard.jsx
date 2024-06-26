import "./subjectCard.css";

function SubjectCard({ subject, description }) {
  return (
    <>
      <div className="card">
        <h2 className="card__title">{subject}</h2>
        <p className="card__description">{description}</p>
      </div>
    </>
  );
}

export default SubjectCard;
