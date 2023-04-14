import './Title.css'

//Build a component
function Title({title, name}){
    return (
        <div className="Title">
    <h1>{title}</h1>
    <h2>{name}</h2>
    </div>
    );
}

export default Title;