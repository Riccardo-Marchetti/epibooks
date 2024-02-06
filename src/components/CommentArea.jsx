import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [asin]);

  useEffect(() => {
    fetchComments();
  }, [change]);

  const fetchComments = async () => {
    if (!asin) {
      console.log("Asin is null or undefined");
      return;
    }
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDEzNjE4N2U1YzAwMTgxNGM2MjMiLCJpYXQiOjE3MDY3ODk1MDMsImV4cCI6MTcwNzk5OTEwM30.oafxWOMDkvOclMSW2CZ_ZtFqr_nJSvnhsJvsdXXyCMs",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();

        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);

      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} setChange={setChange} change={change} />
      <CommentList
        commentsToShow={comments}
        change={change}
        setChange={setChange}
      />
    </div>
  );
};

export default CommentArea;
