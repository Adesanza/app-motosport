import { Modal } from 'react-bootstrap';

const AlertModal = ({ alertModalShow, setAlertModalShow }) => {
  return (
    <Modal
      show={alertModalShow}
      onHide={() => setAlertModalShow(false)}
      backdrop="static"
      animation={false}
    >
      <center className="adesw">
        <img
          src="https://res.cloudinary.com/adesanza/image/upload/v1617875623/zabuni/Group_2107_cdvamr.svg"
          alt=""
        />
        <Modal.Body className="alerter">
          Your spot has been Reserved <br />
          See you on Sunday!
        </Modal.Body>
      </center>
    </Modal>
  );
};
export default AlertModal;
