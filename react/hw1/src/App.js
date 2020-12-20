import React, {Component} from 'react';
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import './app.scss'

class App extends Component {
    state = {
        isModalFirstOpen: false,
        isModalSecondOpen: false
    };

    openFirstModal() {
        this.setState({isModalFirstOpen: true})
    }

    openSecondModal() {
        this.setState({isModalSecondOpen: true});
    }

    closeModal(e) {
        this.setState({isModalFirstOpen: false});
        this.setState({isModalSecondOpen: false});
    }

    render() {
        const {isModalFirstOpen, isModalSecondOpen} = this.state;
        return (
            <div className='App'>
                <div className='container'>
                    <Button text='open first modal' backgroundColor='#FFFFF' onClick={() => this.openFirstModal()}/>
                    <Button text='open second modal' backgroundColor='teal'
                            onClick={() => this.openSecondModal()}/>
                </div>

                {
                    isModalFirstOpen &&
                    <Modal header={"Do you want to delete this file?"} closeButton={true}
                           text={'It is one way ticket. Are you sure?'}
                           actions={
                               <div>
                                   <Button onClick={(e) => this.closeModal(e)} text="Ok" className="button"/>
                                   <Button onClick={(e) => this.closeModal(e)} text="Cancel" className="button"/>
                               </div>
                           } onClick={(e) => this.closeModal(e)}>
                    </Modal>
                }
                {
                    isModalSecondOpen &&
                    <Modal header={"Do you want to update this file?"} closeButton={true}
                           text={'Make your choice, please'} actions={
                        <div>
                            <Button onClick={(e) => this.closeModal(e)} text="Edit file" className="button"/>
                            <Button onClick={(e) => this.closeModal(e)} text="Create new file" className="button"/>
                            <Button onClick={(e) => this.closeModal(e)} text="Cancel" className="button"/>
                        </div>
                    } onClick={(e) => this.closeModal(e)}>
                    </Modal>
                }

            </div>
        );
    }
}

export default App;
