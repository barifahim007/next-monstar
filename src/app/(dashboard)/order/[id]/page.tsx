import React from "react";

const orderReview = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>orderReview {id}</div>;
};

export default orderReview;
