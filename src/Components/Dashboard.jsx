import React, { useState } from "react";
import ProjectProgress from "./ProjectProgress";
import TaskCalendar from "./Calendar.jsx";
import "./Dashboard.css";

const Dashboard = ({  tasks }) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const selectedTasks = tasks.filter(
        (task) =>
            task.deadline &&
            task.deadline.substring(0, 10) === formatDate(selectedDate)
    );

    return (
        <div className="dashboard-layout">

            <div className="dashboard-main">

                <div className="project-progress-list">
                        <ProjectProgress
                            projectId={1}
                            tasks={tasks}
                        />
                    
                </div>

                {/* Seçilen günün taskları */}
                <div className="daily-tasks">
                    <h3>
                        Tasks for {formatDate(selectedDate)}
                    </h3>

                    {selectedTasks.length > 0 ? (
                        selectedTasks.map((task) => (
                            <div
                                className="daily-task-item"
                                key={task._id || task.id}
                            >
                                <span>{task.name}</span>
                            </div>
                        ))
                    ) : (
                        <p>No tasks for this date.</p>
                    )}
                </div>

            </div>

            <aside className="dashboard-sidebar">
                <TaskCalendar
                    tasks={tasks}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </aside>

        </div>
    );
};

export default Dashboard;