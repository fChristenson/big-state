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

export class Overview extends React.Component<IProps>  {
  shouldComponentUpdate(newProps: IProps) {
    return newProps.posts.length !== this.props.posts.length;
  }

  render() {
    const {
      posts,
      totalPosts,
      totalFollowers,
      totalComments,
      onLoadMore
    } = this.props;

    return (
      <div>
        <div>Total posts: {totalPosts}</div>
        <div>Total comments: {totalComments}</div>
        <div>Total followers: {totalFollowers}</div>
        <ul>
          {posts.map((d, i) => {
            return (
              <li key={d.id}>
                <LinkItem key={i} id={d.id} name={d.name} />
              </li>
            )
          })}
          <button style={{ margin: "12px", padding: "8px" }} onClick={onLoadMore}>Load more posts</button>
        </ul>
      </div>
    );
  }
};

interface ILinkProps {
  id: string;
  name: string;
}

const LinkItem: React.FunctionComponent<ILinkProps> = ({ id, name }) => {
  const one = Math.floor(Math.random() * 10);
  const two = Math.floor(Math.random() * 10);
  const three = Math.floor(Math.random() * 10);
  const color = `#${one}${two}${three}`;
  return (
    <div style={{ padding: '12px' }}>
      <Link style={{ color }} to={id}>{name}</Link>
    </div>
  );
}
