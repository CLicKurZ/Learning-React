import githubLogo from './assets/GithubLight.png';

/*
Make a new component named GithubLink that renders a link to your Github profile. 
The link should have the text "My Github" and should link to your Github profile. 
Your Github profile URL should be stored in a variable named githubURL.
Use the style given from index.css for the link.
*/
function GithubLink() {
    const githubURL = "https://github.com/CLicKurZ";
    
    return (
        <a className="githubURL" href = {githubURL} target="_blank">
            <img src={githubLogo} className="githubLogo" alt="Github logo" />
            My Github
        </a>
    );
}

export default GithubLink;