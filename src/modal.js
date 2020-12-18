import React from 'react';
import Modal from 'react-modal';
import './modal.css'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '400px',
    height                : '500px'     
 }
};

Modal.setAppElement('#root') //任意のアプリを設定する　create-react-appなら#root
class ModalWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    this.subtitle.style.fontSize = "20px";
    this.subtitle.style.margin = "0";
    this.subtitle.style.marginBottom = "40px";
   
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div className="modal-login">
        <button className="login_button login" onClick={this.openModal}>ログインサービス</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        ><button className="modal-close"onClick={this.closeModal}>×</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>ログイン</h2>
          <input className="modal-login-address"placeholder="メールアドレス"　required></input>
          <br></br>
          <input type="password"className="modal-login-password" placeholder="パスワード"　required></input>
          <br></br>
            <input type="submit" className="modal-login-button" value="ログイン"></input>
            <div className="password-loss">パスワードを忘れた場合は<a href="#">こちら</a></div>
        </Modal>
      </div>
    );
  }
}
export default ModalWindow;