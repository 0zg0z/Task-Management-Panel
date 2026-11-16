
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TASK_PRIORITY, TASK_STATUS } from "./TaskConst";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const AddTask = () => {


    const [isPopupOpen, setPopupOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(Date());

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    function addTask(e) {
        e.preventDefault();
            const task = {
            id: tasks.length + 1,
            name: title,
            desc: desc,
            priority: priority,
            status: TASK_STATUS.TODO,
            projectId: 1,
            UserId: 2,
            addedDate: new Date(),
            deadline: deadline
        };

         const updatedTasks = [...tasks, task];

            setTasks(updatedTasks);

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            // Formu temizle
            setTitle("");
            setDesc("");
            setPriority("");
            setDeadline("");

            setPopupOpen(false);

            console.log(task);
            window.location.reload();
            }
                


    return (
           <div className="TaskListCont">

            <Button style={{height:50, fontSize:20}} variant="success" onClick={() => setPopupOpen(true)}>
                + Görev Ekle
            </Button>

                    <Modal show={isPopupOpen} onHide={() => setPopupOpen(false)}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <Form  onSubmit={addTask}>
                        <Form.Group className="mb-3" >
                            <Form.Label>title</Form.Label>
                            <Form.Control  value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>açıklama</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Enter desc" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>deadline</Form.Label>

                            <DatePicker
                                selected={deadline}
                                onChange={(date) => setDeadline(date)}
                                className="form-control"
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Tarih seçiniz"
                                minDate={new Date()}
                            />
                        </Form.Group>
                       
                     

                            <Form.Select  style= {{marginBottom: 20}} value={priority}
                        onChange={(e) => setPriority(e.target.value)} aria-label="Default select example">
                        <option value= {TASK_PRIORITY.LOW}> {TASK_PRIORITY.LOW}</option>
                        <option value={TASK_PRIORITY.MID}>{TASK_PRIORITY.MID}</option>
                        <option value={TASK_PRIORITY.HIGH}>{TASK_PRIORITY.HIGH}</option>
                        </Form.Select>

                        <div style={{direction: "flex"}}>
                        <Button variant="primary"  type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={() => setPopupOpen(false)}>
                            Close
                        </Button>

                        </div>

                        </Form>
                        </Modal.Body>
                    </Modal>
           
           </div>
    );
};



export default AddTask;