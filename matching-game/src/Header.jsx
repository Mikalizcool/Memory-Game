const Header = ({wins}) => {
    return (
        <>
            <h1>Rick and Morty Matching Game</h1>
            <p>Get points for clicking on an image, but don't click on any more than once!</p>
            <p>Wins: {wins}</p>
        </>
    )
}
 
export default Header;