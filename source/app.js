import React, {Component} from 'react';
import Dom from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardList = [
  {
    id: 1,
    title: "Read the book",
    description: "I really should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along the samples in this book",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
]

Dom.render(
  <KanbanBoard cards={cardList} />,
  document.getElementById('root')
)