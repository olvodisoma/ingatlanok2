import React from "react";
import { useQuery } from "react-query";
import { getEstates } from "./getData.js";
import {MyCard} from "./MyCard.jsx";

export const RealStates = ({setId}) => {
  const { data, status } = useQuery("estates", getEstates);

  return (
    <div className="row card-holder text-center d-flex flex-column justify-content-center">
      {status == "success" &&
        data.data.map(obj=><MyCard key={obj.id}{...obj} setId={setId}/>
        )}
    </div>
  );
};
