import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, setChange, change }) => {
  const comm = {
    comment: "",
    rate: 1,
    elementId: asin,
  };
  // state = {
  //   comment: {
  //     comment: "",
  //     rate: 1,
  //     elementId: asin,
  //   },
  // };

  const [comment, setComment] = useState(comm);

  //  const componentDidUpdate(prevProps) {

  //   }

  // const fetchComms = () => {
  //   if (!asin) {
  //     setComment({
  //       ...comment,
  //       elementId: this.props.asin,
  //     });
  //   }
  // };

  useEffect(() => {
    setComment({
      ...comment,
      elementId: asin,
    });
  }, [asin]);

  const fetchComms = async (e) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDEzNjE4N2U1YzAwMTgxNGM2MjMiLCJpYXQiOjE3MDY3ODk1MDMsImV4cCI6MTcwNzk5OTEwM30.oafxWOMDkvOclMSW2CZ_ZtFqr_nJSvnhsJvsdXXyCMs",
          },
        }
      );
      if (response.ok) {
        alert("Recensione inviata!");
        // this.setState({
        //   comment: {
        //     comment: "",
        //     rate: 1,
        //     elementId: this.props.asin,
        //   },
        // });

        setComment(comm);
        setChange(!change);
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="my-3">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetchComms(e);
        }}
      >
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     comment: e.target.value,
              //   },
              // }),

              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              // this.setState({
              //   comment: {
              //     ...this.state.comment,
              //     rate: e.target.value,
              //   },
              // }),

              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
