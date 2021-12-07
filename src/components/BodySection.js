import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import '../assets/scss/body-section.scss'
import { PersonHelper } from "../utilities/PersonHelper";
import CounterDown from "./CounterDown";
import ShowResult from "./ShowResult";

export default function BodySection() {

    let [selectionCountry, setSelectionCountry] = useState(null);
    let [persons, setPersons] = useState();
    let [gameRound, setGameRound] = useState(0);
    let [correctAnswer, setCorrectAnswer] = useState(0);
    let [timeOver, setTimeOver] = useState(false);

    useEffect(() => {
        setPersons(PersonHelper.GetPersons());
    }, []);

    useEffect((itemss) => {

        let timerId = setTimeout(() => {
            setTimeOver(true);
        }, 4000);
        return () => clearTimeout(timerId);
    }, [gameRound]);

    const countryClicked = (targetClassName, nationality) => {
        if (!selectionCountry.nationality)
            setSelectionCountry({ targetClassName, nationality });
    }

    const startRoundHandler = (roundIndex) => {

        if (gameRound < persons?.length)
            setGameRound(roundIndex);
    }

    const startGameClicked = () => {
        nextGameHandler(1);
    }

    const nextGameHandler = (isCorrectAnswer) => {
        setSelectionCountry({})
        startRoundHandler(gameRound + 1);
        setTimeOver(false);
        if (isCorrectAnswer === true)
            setCorrectAnswer(correctAnswer + 1);
    }
    
    return (
        <Row>
            <h1>
                {!gameRound && <button className="btn btn-primary" onClick={startGameClicked}>Start Game</button>}
                {!!gameRound && <><CounterDown key={gameRound} defaultCounterDown={3} />&emsp;<label className="h6">Round: {gameRound}</label>&emsp;<label className="h6"> Correct answer: {correctAnswer}</label> </>}
            </h1>
            {gameRound === persons?.length && <h1>
                Game finish
            </h1>}
            {!!gameRound && gameRound != persons?.length &&
                <Col xs={{ span: 4, offset: 4 }}
                    className="p-3 body-section">
                    <div className="d-flex justify-content-between body-section--countries">
                        <Country name="Japanese" nationality={PersonHelper.Nationalities.Japanese} targetClassName="body-section--country_top-left" onClick={countryClicked} />
                        {!!gameRound && <Country key={gameRound} src={persons && persons[gameRound]?.Image} className={selectionCountry?.targetClassName || "body-section--animate body-section--animate-to-middle-button"} />}
                        <Country name="Chinese" nationality={PersonHelper.Nationalities.Chinese} targetClassName="body-section--country_top-right" onClick={countryClicked} />
                    </div>
                    <div class="d-flex align-items-end justify-content-between body-section--countries" >
                        <Country name="Korean" nationality={PersonHelper.Nationalities.Korean} targetClassName="body-section--country_buttom-left" onClick={countryClicked} />
                        <Country name="Thai" nationality={PersonHelper.Nationalities.Thai} targetClassName="body-section--country_buttom-right" onClick={countryClicked} />
                    </div>
                </Col>
            }
            {!!gameRound && (!!selectionCountry?.nationality || !!timeOver ) &&
                <ShowResult key={gameRound} selectionCountry={selectionCountry} currentPerson={persons[gameRound]} nextGameHandler={nextGameHandler} />
            }
        </Row>);
}

function Country({ name, src, className, onClick, targetClassName, nationality }) {

    return (<a href="#" className={className} onClick={() => onClick(targetClassName, nationality)}>
        {!!src && <img src={src} width="80px" />}
        {name}
    </a>);
}