import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <div key={item.id}>
          <li>
            <p>{item.text}</p>
            <div>
              By <address>{item.name}</address>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}

export default CommentList;
