import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <React.Fragment>

            <div className="about">
                <div className="about__left"></div>
                <div className="about__main">
                    <div className="about__main-svg">
                        <svg viewBox="0 0 150 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.27977 24.71H20.2978L11.4828 3.941L2.10877 26H0.732772L11.4828 0.629999L22.2328 26H6.27977V24.71ZM29.4175 24.71H43.4355L34.6205 3.941L25.2465 26H23.8705L34.6205 0.629999L45.3705 26H29.4175V24.71ZM49.5882 23.506H52.4262V26H49.5882V23.506ZM76.0174 1.06V2.35H66.9874V26H65.6974V2.35H56.6674V1.06H76.0174ZM97.6565 23.463C96.0798 25.441 93.4998 26.43 89.9165 26.43C86.3331 26.43 83.7675 25.4123 82.2195 23.377C80.6715 21.3417 79.8975 18.0593 79.8975 13.53C79.8975 9.00067 80.6715 5.71833 82.2195 3.683C83.7675 1.64766 86.3331 0.629999 89.9165 0.629999C94.0731 0.629999 96.8968 1.99167 98.3875 4.715L87.8525 13.53H85.8315L96.7105 4.457C95.4491 2.76567 93.1845 1.92 89.9165 1.92C88.4831 1.92 87.2791 2.07767 86.3045 2.393C85.3298 2.67967 84.4268 3.23866 83.5955 4.07C82.7928 4.87267 82.1908 6.06233 81.7895 7.639C81.3881 9.187 81.1875 11.1507 81.1875 13.53C81.1875 15.9093 81.3881 17.8873 81.7895 19.464C82.1908 21.012 82.7928 22.2017 83.5955 23.033C84.4268 23.8357 85.3298 24.3947 86.3045 24.71C87.2791 24.9967 88.4831 25.14 89.9165 25.14C93.1845 25.14 95.4491 24.2943 96.7105 22.603L97.6565 23.463ZM106.809 24.71H120.827L112.012 3.941L102.638 26H101.262L112.012 0.629999L122.762 26H106.809V24.71ZM131.71 24.71H148.308V2.866L138.633 12.541L128.958 2.866V26L127.668 25.957V1.06H128.958L138.633 10.735L148.308 1.06H149.598V26L131.71 25.957V24.71Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="about__main-text">
                        <p>Frontend Developer Team "AA.TEAM", <span>Saint-Petersburg</span>
                            <br/>
                            <br />
                        We creating reactive sites of any complexity, creative landings, modern animated web platforms
                            <br/>
                            <br />
                        Young ambitious team - is a speed, flexibility and quality (we just can`t lose any chances)
                            <br/>
                        Modern vision on design with cosidering all actual tendencies</p>

                        <h5><span>We do our best for you not stressed</span></h5>
                    </div>
                </div>
                <div className="about__right"></div>
            </div>
            <div className="App-footer">
                <Link to="/">
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM34 10.5L2 10.5V13.5L34 13.5V10.5Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default About;
