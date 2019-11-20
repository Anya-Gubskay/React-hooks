import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export const Notes = ({notes, onRemove, alert, modal}) => {
  return (
    notes.length ?
      <TransitionGroup component="ul" className="list-group">
        {notes.map(note => {
          return <CSSTransition
            key={note.id}
            classNames={'note'}
            timeout={800}
          >
            <li className="list-group-item note aqua mb-2 ">
              <div>
                <strong>{note.title}</strong>
                <small>{note.date}</small>
              </div>
              <div>
                <button onClick={() => {
                  modal.show(note.title, note.id)
                }
                } type="button" className="btn btn-dark btn-sm mr-3">Отредактировать
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    onRemove(note.id);
                    alert.show("Запись была удалена из списка", "success")
                  }}
                >
                  &times;
                </button>
              </div>
            </li>
          </CSSTransition>
        })}
      </TransitionGroup>
      : <div className="text-center font-weight-bold h5">Список пуст</div>
  )
};