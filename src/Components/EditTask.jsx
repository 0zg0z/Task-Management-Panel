import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TASK_PRIORITY, TASK_STATUS } from "./TaskConst";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const EditTask = (props) => {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(Date());

        useEffect(() => {
            if (props.selecTask) {
                setTitle(props.selecTask.name);
                setDesc(props.selecTask.desc);
                setPriority(props.selecTask.priority);
                setDeadline(props.selecTask.deadline);
            }
        }, [props.selecTask]);

    function changeTask(e) {
        e.preventDefault();
            const updatedTask = {
            id: props.selecTask.id,
            name: title,
            desc: desc,
            priority: priority,
            status:props.selecTask.status,
            projectId: props.selecTask.projectId,
            UserId: props.selecTask.UserId,
            addedDate: props.selecTask.addedDate,
            deadline: props.selecTask.deadline
        };

         const updatedTasks =  props.tasks.map(t =>
        t.id === updatedTask.id ? updatedTask : t
        );

    props.setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    props.setIsEditOpen(false);

    }

    function handleDelete (e) {
          e.preventDefault();
        props.deleteTask(props.selecTask.id);
          props.setIsEditOpen(false);

    }
        


    return (

                    <Modal show={props.isEditOpen} onHide={() => props.setIsEditOpen(false)}>
                        <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <Form  onSubmit={changeTask}>
                        <Form.Group className="mb-3" >
                            <Form.Label>title</Form.Label>
                            <Form.Control  value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder= {title} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>açıklama</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder={desc} />
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

                            <Form.Select  value={priority}
                        onChange={(e) => setPriority(e.target.value)} aria-label="Default select example" >
                        <option value= {TASK_PRIORITY.LOW}> {TASK_PRIORITY.LOW}</option>
                        <option value={TASK_PRIORITY.MID}>{TASK_PRIORITY.MID}</option>
                        <option value={TASK_PRIORITY.HIGH}>{TASK_PRIORITY.HIGH}</option>
                        </Form.Select>

                        <div style = {{direction: "flex"}}>
                        <Button variant="primary"  type="submit">
                            Submit
                        </Button>

                         <Button variant="secondary" onClick={handleDelete}>
                           delete
                        </Button>

                        </div>
                       
                        </Form>
                        </Modal.Body>
                    </Modal>
           

    );
};



export default EditTask;