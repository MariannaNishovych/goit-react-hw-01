import css from './FriendListItem.module.css'
import clsx from "clsx";



const FriendListItem = ({ avatar, name, isOnline }) => {
    const classNames = [css.status, isOnline];

    if (isOnline) {
        classNames.push(css.statusOn);
    }

    return (
        <div>
            <img className={css.img} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(css.status, isOnline && css.statusOn)}>
                {!isOnline ? 'Offline' : 'Online'}
            </p>
        </div>
    );
};

export default FriendListItem;