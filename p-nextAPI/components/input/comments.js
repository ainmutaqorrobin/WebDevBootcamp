import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { NotificationContext } from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;
  const notifContext = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    notifContext.showNotification({
      title: "Processing",
      message: "Adding new comments..",
      status: "pending",
    });
    try {
      const response = await fetch(`/api/comments/${eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });
      const data = await response.json();
      if (response.ok) {
        return notifContext.showNotification({
          title: "Success",
          message: "New comment is added",
          status: "success",
        });
      } else {
        throw new Error(data.message || "Something went wrong!");
      }
    } catch (error) {
      return notifContext.showNotification({
        title: "Failed.",
        message: error.message || "Fail to add new comment",
        status: "error",
      });
    }
  }

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setLoading(false);
        });
    }
  }, [showComments]);
  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loading && <CommentList items={comments} />}
      {showComments && loading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
