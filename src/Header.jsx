import './App.css'

export default function Header(){
    return (
        <div className="header">
            <img src={"../public/imgs/globe.png"} width="50px" height="50px" object-fit="contain"></img>
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
}