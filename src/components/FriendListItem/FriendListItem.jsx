import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const friendStatus = clsx(
    isOnline ? css.friendStatusOnline : css.friendStatusOffline
  );

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={friendStatus}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
