import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow, change, setChange }) => (
  <ListGroup style={{ color: "black" }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment
        comment={comment}
        key={comment._id}
        change={change}
        setChange={setChange}
      />
    ))}
  </ListGroup>
);

export default CommentList;
