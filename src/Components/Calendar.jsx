import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TaskCalendar.css";

const TaskCalendar = ({ tasks, selectedDate, setSelectedDate }) => {

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const tileClassName = ({ date, view }) => {
        if (view !== "month") return null;

        const hasDeadline = tasks.some(
            (task) =>
                task.deadline &&
                task.deadline.substring(0, 10) === formatDate(date)
        );

        return hasDeadline ? "has-deadline" : null;
    };

    return (
        <div className="task-calendar">
            <h3>Task Calendar</h3>

            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileClassName={tileClassName}
            />
        </div>
    );
};

export default TaskCalendar;