import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'



const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id} className={css.listItem}>
                        <FriendListItem
                            avatar={avatar}
                            isOnline={isOnline}
                            name={name} />
                    </li>
                )
            }
            )}
        </ul>
    );
};

export default FriendList