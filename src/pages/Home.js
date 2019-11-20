import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/loader";
import {AlertContext} from "../context/alert/alertContext";
import {Modal} from "../components/Modal";
import {ModalContext} from "../context/modal/modalContext";

export const Home = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
  const alert = useContext(AlertContext);
  const modal = useContext(ModalContext);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Fragment>
      <Modal/>
      <Form/>

      <hr/>

      {loading
        ? <Loader/>
        : <Notes notes={notes} onRemove={removeNote} alert={alert} modal={modal}/>
      }
    </Fragment>
  )
};