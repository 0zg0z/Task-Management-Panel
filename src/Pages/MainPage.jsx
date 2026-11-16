import Navbar from "../Components/NavBar";
import React, { useState, useEffect }  from 'react'
import TaskList from '../Components/TaskList';
import styled from "styled-components";
import { TASK_PRIORITY, TASK_STATUS } from "../Components/TaskConst";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import AddTask from '../Components/addTask';
import { DragDropContext } from "@hello-pangea/dnd";
import ProjectProgress from "../Components/ProjectProgress";
import TaskCalendar from "../Components/Calendar";
import Dashboard from "../Components/Dashboard";

function MainPage() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
          const storedTasks = localStorage.getItem("tasks");
          if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
          console.log(JSON.parse(storedTasks));
          }

      }, []);


  return (
    <div style={{margin : 0}}>
      <Navbar />
      <h1 style={{margin: 20}}>Proje Durumu</h1>

      <div >
      <Dashboard tasks={tasks} />
      </div>      

    </div>
  )
}



export default MainPage