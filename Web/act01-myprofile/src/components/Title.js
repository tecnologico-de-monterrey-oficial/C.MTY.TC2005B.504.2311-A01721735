import './Title.css'

//Build a component
function Title({title, name, city}){
    return (
        <div className="Title">
    <h1>{title}</h1>
    <h2>{name}</h2>
    <h3>{city}</h3>
    </div>
    );
}

export default Title;