import * as React from 'react';
import { Row, Col, Modal, Button, Checkbox, Media } from 'react-bootstrap';
const logo = require('./logo.png');

export interface Props {
    dismissModal: () => void;
    showModal: boolean;
}

export const InformationModal: React.SFC<Props> = ({
    showModal, dismissModal
}) => (
    <Modal show={showModal} onHide={dismissModal}>
        <Modal.Body>
            <Row>
                <Col xs={12} sm={6}>
                    <h3>Target Goals:</h3>
                    <Checkbox checked={true} readOnly={true}>
                        Render last 10 recent tweets of target
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Tweet User Name
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Tweet User Screen Name
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Tweet User Profile Image
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Tweet Content (Text, Images, etc)
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Retweet Count
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Display Tweet Date
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Build a Filter feature
                    </Checkbox>
                    <Checkbox checked={true} readOnly={true}>
                        Every minute, get the 10 most recent tweets
                    </Checkbox>
                    </Col>
                    <Col xs={12} sm={5} smOffset={1}>
                    <Media.Left>
                        <div style={{ marginTop: 20 }}>
                            <img src={logo} className="App-logo" alt="logo" style={{ width: 75, height: 'auto' }} />
                        </div>
                    </Media.Left>
                    <Media.Body>
                        {'Note: Recent tweets are pulled every time this logo '}
                        {'rotates all the way around.  Open up your network tab '}
                        to catch the request!
                    </Media.Body>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button
                bsStyle="primary"
                onClick={dismissModal}
            >
                Got it, thanks!
            </Button>
        </Modal.Footer>
    </Modal>
);

export default InformationModal;
