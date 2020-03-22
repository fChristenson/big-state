import React from "react";
import { IPost } from "../overview/duck";

interface IProps {
  post?: IPost;
}

export const Post: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <div style={{ padding: "12px" }}>
      {post && <h1>{post.name}</h1>}
    </div>
  );
};
