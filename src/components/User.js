import classes from "./User.module.css";
const User = (props) => {
  const { username, avatar, githubProfile } = props.user;
  return (
    <a href={githubProfile} target="_blank" rel="noreferrer">
      <div className={classes.user}>
        <div className={classes["user-header"]}>
          <h3 className={classes.username}>{username}</h3>
        </div>
        <img className={classes.avatar} src={avatar} alt={username} />
      </div>
    </a>
  );
};
export default User;
