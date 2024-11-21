import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  console.log(items);
  return items.length > 0 ? (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No data</p>
  );
}

export default CommentList;
