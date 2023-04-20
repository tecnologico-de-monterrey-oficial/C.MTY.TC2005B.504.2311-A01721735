import Title from '../../components/Title';
import ProgressBar from '../../components/ProgressBar';
import AlertsD from '../../components/AlertsD';

function Profile(){

    const name = 'Eduardo Tello';
    return(

      <div>
        <AlertsD />
<Title 
  title = 'My Profile'
  name = {name}
  city = 'Monterrey'
/>

<h1>Progress Bar</h1>
<ProgressBar />



</div>
    );
}

export default Profile;