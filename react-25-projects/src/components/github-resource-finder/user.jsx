import React from "react";

function User({ user }) {
  const { avatar_url, login, followers, following, public_repos, created_at } =
    user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{login}</a>
        {/* <p>User joined on {String(created_at).substring(0, created_at.indexOf("T"))}</p> */}
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="user-info">
        <div>
          <p>Public repos: {public_repos}</p>
        </div>
        <div>
          <p>Followers: {followers}</p>
        </div>
        <div>
          <p>Following: {following}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
