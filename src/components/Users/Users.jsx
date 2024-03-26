import s from './users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoPath:
          'https://lh5.googleusercontent.com/-7B45bnoS2b8/AAAAAAAAAAI/AAAAAAAAB2Q/_gpNuSj16Vs/photo.jpg',
        followed: false,
        name: 'Valerii',
        status: 'Developer',
        location: { city: 'Seoul', country: 'Republic of Korea' }
      },
      {
        id: 2,
        photoPath:
          'https://lh5.googleusercontent.com/-7B45bnoS2b8/AAAAAAAAAAI/AAAAAAAAB2Q/_gpNuSj16Vs/photo.jpg',
        followed: false,
        name: 'Anastasiia',
        status: 'Mother of Jessica',
        location: { city: 'Seoul', country: 'Republic of Korea' }
      },
      {
        id: 3,
        photoPath:
          'https://lh5.googleusercontent.com/-7B45bnoS2b8/AAAAAAAAAAI/AAAAAAAAB2Q/_gpNuSj16Vs/photo.jpg',
        followed: false,
        name: 'Jessica',
        status: 'Dog',
        location: { city: 'Seoul', country: 'Republic of Korea' }
      },
      {
        id: 4,
        photoPath:
          'https://lh5.googleusercontent.com/-7B45bnoS2b8/AAAAAAAAAAI/AAAAAAAAB2Q/_gpNuSj16Vs/photo.jpg',
        followed: false,
        name: 'Some guest',
        status: 'guest',
        location: { city: 'Kiev', country: 'Ukraine' }
      }
    ]);
    console.log(props.users);
  }

  return (
    <div className={s.usersContainer}>
      {props.users.map((user) => (
        <div className={s.userContainer} key={user.id}>
          <div className={s.userInfo}>
            <img
              className={s.userPhoto}
              src={user.photoPath}
              alt='user_photo'
            />

            <div className={s.followToggle}>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={s.usersData}>
            <div className={s.usersDetails}>
              <h3 className={s.userName}>{user.name}</h3>
              <span className={s.userStatus}>{user.status}</span>
            </div>
            <div className={s.usersLocationDetails}>
              <h4 className={s.userCity}>{user.location.city}</h4>
              <span className={s.userCountry}>{user.location.country}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
