import React from "react";

export interface IFollower {
  id: string;
  name: string;
}

export interface IUser {
  id: string;
  name: string;
  followers: IFollower[];
}

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}

export interface IPost {
  id: string;
  name: string;
  comments: IComment[];
}

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
