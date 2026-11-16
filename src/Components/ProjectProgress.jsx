import React from "react";
import "../Components/ProjectProgressStyle.css";
import "./TaskConst";

const ProjectProgress = ({ projectId, tasks }) => {

    const projectTasks = tasks.filter(
        (task) => task.projectId === projectId
    );

      const completedTasks = projectTasks.filter(
    (task) => task.status === 'bitti'
        ).length;

    const progress = projectTasks.length === 0
        ? 0
        : Math.round(
            (completedTasks / projectTasks.length) * 100
        );

    return (
        <div className="project-progress">
            <div className="progress-header">
                <h3>Proje  ilerlemesi</h3>
                <span>{progress}%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {progress == 100 &&  <h3>Proje tamamlanması</h3>}

            {progress != 100 &&  
            
            <h4>Bekleyen görevler var</h4>}


        </div>
    );
};

export default ProjectProgress;