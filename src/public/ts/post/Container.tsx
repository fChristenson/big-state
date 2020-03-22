import React from "react";
import axios from "axios";
import { Post as Component } from "./Post";
import { useParams } from "react-router-dom";
import { IPost } from "../overview/duck";

export const Post: React.FunctionComponent = () => {
  const { id } = useParams();

  const [post, setPost] = React.useState<IPost>();

  React.useEffect(() => {
    axios
      .get(`/data/${id}`)
      .then(r => r.data)
      .then(setPost);
  }, [id]);

  return <Component post={post} />;
};
