import React, {useContext, useState} from 'react'
import {ModalContext} from '../context/modal/modalContext';
import {FirebaseContext} from '../context/firebase/firebaseContext';
import {AlertContext} from '../context/alert/alertContext';
import {CSSTransition} from 'react-transition-group';

export const Modal = () => {
  const {modal, hide} = useContext(ModalContext);
  const alert = useContext(AlertContext);
  const [value, setValue] = useState('');
  const firebase = useContext(FirebaseContext);

  const editNote = () => {
    firebase.editNote(value.trim(), modal.id);
    hide();
    alert.show("Редактирование прошло успешно", "success")
  };

  return (
    <CSSTransition
      in={modal.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'modal'}
      mountOnEnter
      unmountOnExit
    >
      <div className="modal container-modal">
        <div className="modal-dialog" style={{width: "1000px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Окно для редактирования</h5>
              <button onClick={hide} type="button" className="close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <textarea
                  className="form-control"
                  defaultValue={modal.text}

                  onChange={e => setValue(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={hide} type="button" className="btn btn-secondary">Закрыть</button>
              <button type="button" onClick={() => editNote()} className="btn btn-info">Изменить</button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
};