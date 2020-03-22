import React from "react";
import { Link } from "react-router-dom";
import { IPost, IComment } from "../post/Post";

interface IProps {
  data: IPost[];
  onLoadMore(): void;
}

export const Overview: React.FunctionComponent<IProps> = ({ data, onLoadMore }) => {
  const totalFollowers = data.reduce((acc: number, p: IPost) => acc + p.comments.reduce((acc: number, c: IComment) => c.user.followers.length + acc, 0), 0);

  return (
    <div>
      <div>Total posts: {data.length}</div>
      <div>Total comments: {data.reduce((num: number, p: IPost) => p.comments.length + num, 0)}</div>
      <div>Total followers: {totalFollowers}</div>
      <ul>
        {data.map((d, i) => (
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
