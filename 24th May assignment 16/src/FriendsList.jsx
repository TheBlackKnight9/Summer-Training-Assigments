function Friend({ name, age, hobby, image, contact, quote }) {
  return (
    <div className="friend-card card text-center">
      <img src={image} alt={`${name}'s avatar`} className="card-img-top rounded-circle mx-auto mt-3" width="120" height="120" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text"><strong>Age:</strong> {age}</p>
        <p className="card-text"><strong>Hobby:</strong> {hobby}</p>
        <p className="card-text">
          <strong>Contact:</strong> <a href={`mailto:${contact}`}>{contact}</a>
        </p>
        <blockquote className="blockquote text-muted small mt-2">“{quote}”</blockquote>
      </div>
    </div>
  );
}

export default Friend;