import "./SkillStyles.css"

import React from "react"
import { BsPatchCheckFill } from "react-icons/bs"

const Skill = () => {
    return (
        <section id="skill">
            <h1 className="skill-title font-semibold uppercase">My Experience</h1>
            <div className="container skill_container">
                <div className="skill-frontend">
                    <h3>Frontend Development</h3>
                    <div className="skill_content">
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>SCSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>ReactJS</h4>
                                <small className="text-light">Bacsic</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="skill-backend">
                    <h3>Backend Development</h3>
                    <div className="skill_content">
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Bacsic</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill