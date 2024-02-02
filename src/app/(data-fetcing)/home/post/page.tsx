import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Post = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div className="flex flex-col justify-center items-center text-xl text-slate-600 m-5">
      <div>
        <h1>
          post Something:
          <span className="text-red-400 text-2xl"> {data.length}</span>
        </h1>
      </div>
      <div className="md:grid md:grid-cols-3 ">
        {data.map((da: any) => (
          <Card key={da.id} className="  mx-5  my-5">
            <CardHeader>
              <CardTitle>{da.title}</CardTitle>
              <CardDescription>{da.body} </CardDescription>
            </CardHeader>
            <CardContent>
              <p> {da.userId}</p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive"> delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Post;
