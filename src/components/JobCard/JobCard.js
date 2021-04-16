import React from "react";
import ReactHtmlParser from "react-html-parser";

import "./jobcard.css";

function JobCard({ key, job = {} }) {
  const {
    id = "139d649e-8a16-4f7c-87f6-aeadbff8ef21",
    type = "Full Time",
    url = "https://jobs.github.com/positions/139d649e-8a16-4f7c-87f6-aeadbff8ef21",
    created_at = "Fri Apr 02 14:45:56 UTC 2021",
    company = "WaveSense",
    company_url = "https://wavesense.recruitee.com",
    location = "Sommervile",
    title = "DevOps Engineer",
    description = '<p><strong>DevOps Engineer</strong></p>\n<p><strong>COMPANY</strong>\nWaveSense is radically accelerating the arrival of self-driving vehicles by tackling some of the most challenging problems that stand in the way of safe and reliable navigation.\nEvery road in the world has a unique subsurface signature. WaveSense uses radar to create a map of those subsurface signatures from which self-driving cars can navigate. Vehicles using WaveSense are unaffected by common but challenging road conditions like snow, heavy rain, fog, or poor lane markings.\nWaveSense is working with leading autonomous vehicle and traditional automotive companies, is backed by leading investors, is growing quickly, and is building a talented team that wants to transform the future of mobility and work on some of the hardest and most important engineering problems around. If that sounds like you, please drop us a line.</p>\n<p><strong>ROLE</strong>\nAs a DevOps Engineer, you will work with the team to design and implement WaveSense\'s efforts around key local, vehicular, and cloud based infrastructure.  </p>\n<p><strong>WHO YOU ARE + WHAT YOU\'LL DO</strong></p>\n<ul>\n<li>Design, test and implement cloud based continuous integration and deployment pipelines using Bitbucket and Jenkins.</li>\n<li>Design and develop deployment automation and validation tools across the entire software stack.</li>\n<li>Design and develop a software release, test, and deployment strategy.</li>\n<li>Manage the build system.</li>\n<li>Perform security, performance and availability assessments</li>\n<li>Optimize system performance, availability and scalability</li>\n<li>Troubleshoot source code management and deployment issues</li>\n<li>Create and maintain documentation on configuration, troubleshooting, design etc.</li>\n<li>Perform security audits and assist with hardening servers and systems against attacks</li>\n<li>Support internal trouble tickets</li>\n<li>Formulate daily procedures to ensure data and systems backup</li>\n<li>Maintain accounts for AWS, Google Workspaces.</li>\n<li>Maintain license server.</li>\n<li>Provide basic IT support for onboarding new employees including provisioning PC’s.</li>\n</ul>\n<p><strong>REQUIREMENTS</strong></p>\n<ul>\n<li>5 plus years working in DevOps (plus experience in software development and network management).</li>\n<li>Strong system administration (Unix/Linux/Windows).</li>\n<li>Strong working knowledge and experience with Git and Jenkins.</li>\n<li>Experience with build systems (cmake, make).</li>\n<li>Familiarity with agile development process and best practices.</li>\n<li>Programming and scripting experience in Python, C++#, PowerShell, Bash.</li>\n<li>Experience with containers (Docker).</li>\n<li>Knowledge of database, operating system and network security.</li>\n<li>Extensive knowledge and experience with CI/CD technologies and tools (Jenkins).</li>\n<li>Experience provisioning and managing AWS cloud resources (Terraform or similar).</li>\n<li>Previous experience with server configuration and maintenance.</li>\n<li>Bachelor\'s or Master’s degree or higher in Information Systems, Computer Science, Engineering, or equivalent job-related experience.</li>\n<li>Talented, passionate, and able to effectively work with the team to design, build, and execute core capabilities.</li>\n</ul>\n<p><strong>NICE TO HAVE</strong></p>\n<ul>\n<li>Experience with integrating embedded systems / IoT type environments into CI/CD models.</li>\n<li>Cloud engineering and architecture experience.</li>\n</ul>\n<p><strong>WORK</strong>\nMust be currently eligible to work in the US.  Please indicate if you need or will eventually need sponsorship on your application. \nApply for this job via <a href="https://ltpx.nl/ESYBjWo"><strong>the application form</strong></a>.</p>\n<p><em>Agency calls are not appreciated.</em><img src="https://camo.githubusercontent.com/2da2e352d0288668476d85e61afe48b4332e9b1c/68747470733a2f2f742e6c7470782e6e6c2f747261636b2e7068703f6f7264657269643d323530393339"></p>\n',
    company_logo = "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcG1mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--55d26c616819ae7dbe68538f2763cea61f6f4e2d/WaveSense.jpg%20.jpg",
  } = job;
  return (
    <div className="job-container">
      <div className="job-card">
        <div className="image-container">
          <img src={company_logo} alt="Company Logo" className="company-logo" />
        </div>
        <div className="job-info">
          <h3 className="job-title">{title}</h3>
          <div className="other-info">
            <p>{location}</p>
            <p>{type}</p>
          </div>

          <p>{created_at.substring(0, created_at.length - 18)}</p>
        </div>
        <div className="url-links">
          <a href={url} className="apply-link">
            Apply Now
          </a>
          <a href={company_url} className="company-url">
            Visit company url
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
