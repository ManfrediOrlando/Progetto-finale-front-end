import { Card } from "react-bootstrap";
import { ReactComponent as CheckCircle } from "../assets/check-circle.svg";

const CardComponent = ({ contents, className, BodyClass }) => {
  return (
    <Card className={`${className}`}>
      <Card.Img
        variant="top"
        src={contents.img}
        className="card-img p-3 col-4"
      />
      <Card.Body className={BodyClass}>
        <Card.Title className=" w-75 mx-auto fs-1 mb-2 card-text-title">
          <CheckCircle width="40px" height="40px" />
          {contents.title}
        </Card.Title>
        <Card.Text className="w-75 mx-auto">{contents.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
