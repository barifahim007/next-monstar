import React from "react";

const catchIn = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      catch all routes <span className="text-red-500"> {params.slug} </span>
    </div>
  );
};

export default catchIn;
