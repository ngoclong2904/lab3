import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ListOfFilms } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { LargeScreenContext } from "./LargeScreenContext";
export default function FilmDetails() {
    let params = useParams()
    // console.log(params.id)
    // eslint-disable-next-line
    let film = ListOfFilms.find((e) => { return e.id == params.id })
    console.log(film)

    const largeScreen = useContext(LargeScreenContext)
    const { theme } = useContext(ThemeContext)
    return (
        <div id="film-details" className="container" style={{ backgroundColor: theme.backdropBackgroundColor, color: theme.contentTextColor }}>
            <div className="column" key={film.id}>
                <div className="card">

                    <div className="info-overlay" style={{ backgroundColor: theme.seethroughBackgroundColor }}>
                        <div className="info" style={
                            largeScreen
                                ?
                                { color: theme.contentTextColor }
                                :
                                { backgroundColor: theme.overlayBackgroundColor, color: theme.contentTextColor }
                        }>
                            <div className="title">
                                <h2>{film.Title}</h2>
                            </div>
                            <div className="detail">
                                <div className="meta-info">
                                    <p className="year" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Year}</p>
                                    <p className="nation" style={{ backgroundColor: theme.focusedBackgroundColor, color: theme.focusedTextColor }}>{film.Nation}</p>
                                </div>
                                <p className="sypnosis">{film.Sypnosis}</p>
                                <div className="cast"><i>Starring:</i> {film.Cast.join(", ")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="poster">
                        <img src={`/${film.Image}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}