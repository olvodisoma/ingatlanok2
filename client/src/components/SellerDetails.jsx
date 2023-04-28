import React from "react";
import { useQuery } from "react-query";
import { getSeller } from "./getData.js";
import { Card, CardBody, CardText,CardTitle, Button } from "reactstrap";

export const SellerDetails = ({id,setId}) => {
  const { data, status } = useQuery(["seller", id], getSeller);
  status == "success" && console.log(data.data[0]);
  return (
    <div>
      {status=="success" && 
      <Card
        style={{
          width: "18rem",
        }}
        className="m-1"
      >
        <img alt={data.data[0].imageUrl} src={data.data[0].imageUrl} />
        <CardBody>
            <CardTitle>{data.data[0].name}</CardTitle>
            <CardText>{data.data[0].phone}</CardText>
            <CardText>{data.data[0].rooms}</CardText>
            <CardText>{data.data[0].area}</CardText>
            <Button  onClick={(event) => setId(0)}>
                Vissza
            </Button>
            </CardBody>
    </Card>}
    </div>
  );
};
