import profilePic from './assets/Default_pfp.jpg';

function Card() {
  return (
    <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Austin</h2>
            <p>I am a Computer Science Student and play video games</p>
    </div>
  );
}

export default Card;