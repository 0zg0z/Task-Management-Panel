import React, { useState, useEffect }  from 'react'
import Navbar from "../Components/NavBar";
import TaskList from '../Components/TaskList';
import styled from "styled-components";
import { TASK_PRIORITY, TASK_STATUS } from "../Components/TaskConst";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AddTask from '../Components/addTask';
import { DragDropContext } from "@hello-pangea/dnd";
import EditTask from '../Components/EditTask';

function TaskManager() {
  
  const [count, setCount] = useState(0)
  const [isAdded,SetIsAdded] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
          const storedTasks = localStorage.getItem("tasks");
          if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
          console.log(JSON.parse(storedTasks));
          }

      }, []);

  useEffect(() => {
    console.log("Güncel tasks:", tasks);
}, [tasks]);


function handleEditTask(task) {
    console.log(task);
    setSelectedTask(task);
    setIsEditOpen(true);
}

function handleDragEnd(result) {

        const { source, destination, draggableId } = result;

        // Geçerli bir hedef yoksa
        if (!destination) return;

        // Aynı listeye bırakıldıysa
        if (source.droppableId === destination.droppableId) return;

        // Sürüklenen görevin durumunu değiştir
        const updatedTasks = tasks.map(task =>
            String(task.id) === draggableId
                ? { ...task, status: destination.droppableId }
                : task
        );

        setTasks(updatedTasks);

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    const deleteTask = (id) => {
      const newTasks = tasks.filter(task => task.id != id);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));

    }

  return (

     <DragDropContext onDragEnd={handleDragEnd}>
    <div style={{margin : 0,  flex: 1,
        minWidth: 0}}>
      <Navbar />
      <>
      <div style={{display:"flex", justifyContent: 'space-between', padding: 20,paddingLeft:50,paddingRight:80, alignItems:"center"}}>
      <h2>Görev Paneli</h2>
      <AddTask isNewTask = {SetIsAdded}/>

      </div>
      
      <EditTask deleteTask = {deleteTask} isEditOpen = {isEditOpen} setIsEditOpen = {setIsEditOpen} selecTask = {selectedTask} setTasks = {setTasks} tasks = {tasks}/>
      <ListCont>  
      <TaskList status = {TASK_STATUS.TODO} tasks = {tasks}    onEdit={handleEditTask}/>
      <TaskList status = {TASK_STATUS.IN_PROGRESS} tasks={tasks}    onEdit={handleEditTask}/>
      <TaskList status = {TASK_STATUS.TEST} tasks={tasks}    onEdit={handleEditTask}/>
      <TaskList status = {TASK_STATUS.DONE} tasks={tasks}    onEdit={handleEditTask}/>
      </ListCont>
      </>
      
    </div>
    </DragDropContext>
  )
}

const ListCont = styled.div`
      display: flex;
    flex-direction: row;
    width: 100%;
    gap: 15px;
`;
export default TaskManager
