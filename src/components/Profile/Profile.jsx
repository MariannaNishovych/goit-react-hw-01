import css from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.profileSection}>
            <div className={css.userContainer}>
                <img className={css.userImg} src={image} alt="User avatar" />
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>

            <ul className={css.userList}>
                <li className={css.userItem}>
                    <span>Followers</span>
                    <span className={css.userStats}>{stats.followers}</span>
                </li>
                <li className={css.userItem}>
                    <span>Views</span>
                    <span className={css.userStats}>{stats.views}</span>
                </li>
                <li className={css.userItem}>
                    <span>Likes</span>
                    <span className={css.userStats}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};

export default Profile;