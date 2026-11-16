
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TASK_PRIORITY, TASK_STATUS } from "./TaskConst";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Droppable,
    Draggable
} from "@hello-pangea/dnd";



const TaskList = ({tasks, status, onEdit}) => {

    const [filTasks, setFilTasks] = useState([]);

    useEffect(() => {

            const filteredTasks = tasks.filter(
            task => task.status === status
    );

    setFilTasks(filteredTasks);
    }, [tasks, status]);


    useEffect(() => {
       
            console.log("Gelen görevlerF:", filTasks);
    }, [filTasks]);


    return (
           <TaskListCont>
            <div>
                <h3 style = {{color:"#194663"}}>{status}</h3>

            </div>
           
            <Droppable droppableId={status}>
                {(provided) => (
                    <div
                        className="tasks-container"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >

                        {filTasks.map((task, index) => (

                            <Draggable
                                key={task.id}
                                draggableId={String(task.id)}
                                index={index}
                            >
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <TaskCard  onClick={() => onEdit(task)} >
                                            <h5 style = {{color:"#122536"}}>{task.name}</h5>
                                            <p>Öncelik: {task.priority}</p>
                                        </TaskCard>
                                    </div>
                                )}
                            </Draggable>

                        ))}

                        {provided.placeholder}

                    </div>
                )}
            </Droppable>
        </TaskListCont>
    );
};

const TaskCard = styled.div`
    background: #f4f4f4;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 6px;
    border-left: 4px solid #007bff;
`;

const TaskListCont = styled.div`
   width: 100%;
  border: 2px solid #5b9dc9;
  border-radius: 15px;
  box-shadow: 3px 3px 8px rgba(91, 157, 201, 0.3);
  padding: 15px;

`;


export default TaskList;