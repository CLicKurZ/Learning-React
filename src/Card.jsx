import profilePic from './assets/Default_pfp.jpg';

function Card() {
  return (
    <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Austin Blaylock</h2>
            <p className="card-text">This is my learning project for web development using React</p>
    </div>
  );
}

export default Card;