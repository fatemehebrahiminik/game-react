import { Modal } from "react-bootstrap";

export default function ShowResult(props) {
console.info('ShowResult');
    let isCorrectAnswer = props?.selectionCountry?.nationality === props?.currentPerson?.Nationality && !!props?.currentPerson?.Nationality;
    return (
        <Modal show={true} centered >
            <Modal.Body>
                {!!isCorrectAnswer && <label className="text-success h2">Correct answer</label>}
                {!isCorrectAnswer && <label className="text-danger h2">Wrong answer</label>}
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondry" onClick={() => props.nextGameHandler(isCorrectAnswer)}>
                    Next level
                </button>
            </Modal.Footer>
        </Modal>);
}