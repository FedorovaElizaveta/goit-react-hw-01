import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileUserInformation}>
        <img
          className={css.profileUserInformationImg}
          src={image}
          alt="User avatar"
          width={200}
          height={200}
        />
        <p className={css.profileUserInformationName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <div className={css.profileStatistics}>
        <ul className={css.profileStatisticsList}>
          <li className={css.profileStatisticsListItem}>
            <span>Followers</span>
            <span className={css.profileStatisticsListItemAmount}>
              {followers}
            </span>
          </li>
          <li className={css.profileStatisticsListItem}>
            <span>Views</span>
            <span className={css.profileStatisticsListItemAmount}>{views}</span>
          </li>
          <li className={css.profileStatisticsListItem}>
            <span>Likes</span>
            <span className={css.profileStatisticsListItemAmount}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
