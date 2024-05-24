const Header = ({wins}) => {
    return (
        <>
            <h1 className="title">Rick and Morty Memory Game</h1>
            <p className="description">Get points for clicking on an image, but don't click on any more than once!</p>
            <p>Score: {wins}</p>
        </>
    )
}
 
export default Header;