import Title from '../../components/Title';

function Profile(){

    const name = 'Eduardo Tello';
    return(
<Title 
  title = 'My Profile'
  name = {name}
  city = 'Monterrey'
/>
    );
}

export default Profile;