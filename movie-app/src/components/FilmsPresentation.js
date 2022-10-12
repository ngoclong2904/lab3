import { useContext, /*useEffect, useState*/ } from "react";
import { /*Link,*/ useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";

export default function FilmsPresentation({ listOfFilms }) {
    // console.log(listOfFilms);

    const largeScreen = useContext(LargeScreenContext)
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate();
    // const [curFilm, setCurFilm] = useState([])
    return (
        <div id="home" className="container" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            {
                listOfFilms.map((film) => (
                    <div className="column" key={film.id}>
                        <div className="card">
                            <div className="poster">
                                <img src={film.Image} alt="" />
                            </div>
                            <div className="info"
                                style={
                                    largeScreen
                                        ?
                                        { backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }
                                        :
                                        { backgroundColor: theme.seethroughBackgroundColor, color: theme.contentTextColor }
                                }>
                                <div className="title">
                                    <h2>{film.Title}</h2>
                                </div>
                                <div className="detail">
                                    <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Year}</p>
                                    <p className="nation">{film.Nation}</p>
                                    <p className="showPopup">
                                        {/* <Link to={`/details/${film.id}`}> */}
                                        <button onClick={() => navigate(`/details/${film.id}`)
                                            // {   
                                            //     setCurFilm(film);
                                            //     const popup = document.getElementById("popupContainer1");
                                            //     popup.style.display = "block";
                                            // }
                                        } style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>
                                            Detail
                                        </button>
                                        {/* </Link> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* <div id="popupContainer1" className="overlay">
                <div className="popupContent">
                    <span className="close" onClick={() => {
                        const popup = document.getElementById("popupContainer1");
                        popup.style.display = "none";
                    }}>
                        &times;
                    </span>
                    <div className="card">
                        <div className="poster">
                            <img src={curFilm.Image} alt="" />
                        </div>
                        <div className="info"
                            style={
                                largeScreen
                                    ?
                                    { backgroundColor: theme.mutedBackgroundColor, color: theme.contentTextColor }
                                    :
                                    { backgroundColor: theme.overlayBackgroundColor, color: theme.contentTextColor }
                            }>
                            <div className="title">
                                <h2>{curFilm.Title}</h2>
                            </div>
                            <div className="detail">
                                <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{curFilm.Year}</p>
                                <p className="nation">{curFilm.Nation}</p>
                                <p className="sypnosis">{curFilm.Sypnosis}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                window.onclick = (event) => {
                    const popup = document.getElementById("popupContainer1");
                    if (event.target === popup) {
                        popup.style.display = "none";
                    }
                }
            } */}
        </div>
    );
}