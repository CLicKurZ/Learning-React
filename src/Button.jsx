
function Button(){

    /* Inline Styles */
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px", 
        borderRadius: "5px",   
        border: "none",  
        cursor: "pointer",
    }

    return (
        <p><button style={styles}>Click me</button></p>
    );
}

export default Button