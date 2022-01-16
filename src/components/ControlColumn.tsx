
export const ControlColumn = () => {
    return (
        <>
            <div>
                <h1>Pose Player</h1>
                <input type="file" id="filepicker" className="pickDirectory" name="fileList" multiple />
                <label htmlFor="fileList" style={{ display: "none" }}>File chooser</label>
            </div>

            <div className="instructions">
                <p>Select a directory, a time period and then hit play to begin.
                </p>
            </div>

            <div className="pickRandom">
                <input type="checkbox" name="randomizer" value="randomize?" checked />
                <label htmlFor="randomizer">Randomize order</label>
            </div>

            <div className="notifications text_small"></div>
            <div className="clock">00</div>

            <div className="playbackControlContainer">
                <p className="center s4" style={{ marginTop: 0 }}>play controls</p>
                <p className="text_small" style={{ marginBottom: 0 }}>please select your timing</p>
                <div className="flex-start-container">
                    <div>
                        <input type="radio" id="ten" name="timing" value="10" />
                        <label htmlFor="ten">10</label><br />
                    </div>
                    <div>
                        <input type="radio" id="thirty" name="timing" value="30" />
                        <label htmlFor="thirty">30</label><br />
                    </div>
                    <div>
                        <input type="radio" id="sixty" name="timing" value="60" checked />
                        <label htmlFor="sixty">60</label><br />
                    </div>
                    <div>
                        <input type="radio" id="onetwenty" name="timing" value="120" />
                        <label htmlFor="onetwenty">120</label>
                    </div>
                    <div>
                        <input type="radio" id="threehundred" name="timing" value="300" />
                        <label htmlFor="threehundred">300</label>
                    </div>
                    <div>
                        <input type="radio" id="sixhundred" name="timing" value="600" />
                        <label htmlFor="sixhundred">600</label>
                    </div>
                </div>

                <br />
                <div className="play-and-step-container">
                    <p className="playbackControl">
                        <button className="play fa fa-play" aria-label="play slideshow"></button>
                        <button className="pause fa fa-pause" aria-label="pause slideshow"></button>
                    </p>
                    <p className="stepControl">
                        <button className="stepbackward fa fa-step-backward" aria-label="slideshow back one"></button>
                        <button className="stepforward fa fa-step-forward" aria-label="slideshow forward one"></button>
                    </p>
                </div>
                <br /><br />

                <div className="copyright text_small">
                    &copy; Jeff Shepherd
                </div>
            </div>

        </>

    );
}