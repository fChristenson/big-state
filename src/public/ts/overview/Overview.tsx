import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "./duck";

interface IProps {
  posts: IPost[];
  totalPosts: number;
  totalFollowers: number;
  totalComments: number;
  onLoadMore(): void;
}

export const Overview: React.FunctionComponent<IProps> = ({ posts, totalPosts, totalFollowers, totalComments, onLoadMore }) => {

  return (
    <div>
      <div>Total posts: {totalPosts}</div>
      <div>Total comments: {totalComments}</div>
      <div>Total followers: {totalFollowers}</div>
      <ul>
        {posts.map((d, i) => (
          <li key={i}>
            <div style={{ padding: '12px' }}>
              <Link style={{ color: 'gold' }} to={d.id}>{d.name}</Link>
            </div>
          </li>
        ))}
        <button style={{ margin: "12px", padding: "8px" }} onClick={onLoadMore}>Load more posts</button>
      </ul>
    </div>
  );
};
