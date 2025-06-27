import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import python_icon from "../../assets/icons/python-5.svg";
import github_icon from "../../assets/icons/github_icon.svg";
import java from "../../assets/icons/java.svg";
import docker from "../../assets/icons/docker.svg";
import jenkins from "../../assets/icons/jenkins-original.svg";
import postman from "../../assets/icons/postman.svg";
import nodejs from "../../assets/icons/node-js.svg";
import aws from "../../assets/icons/aws.svg";
import atlas from "../../assets/icons/mongodb-original.svg";
import kub from "../../assets/icons/kubernetes.svg";
import socket from "../../assets/icons/socket.png";

function About() {
  const techStack = [
    html_icon,
    css_icon,
    js_icon,
    react_icon,
    tailwind_icon,
    atlas,
    nodejs,
    socket,
    python_icon,
    java,
    postman,
    github_icon,
    docker,
    jenkins,
    aws,
    kub,
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Livingston | About</title>
      </Helmet>

      <div className="flex flex-col items-center justify-center px-8 py-12 text-textColor">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-y-8 xl:flex-row xl:items-center xl:gap-x-16">
          {/* Profile Image */}
          <div className="xl:order-2">
            <img
              src="profile.jpg"
              alt="Profile"
              className="h-[250px] w-[250px] rounded-lg border-4 border-accentColor object-cover xl:h-[300px] xl:w-[300px]"
            />
          </div>

          {/* Name & Title */}
          <div className="text-center xl:text-left">
            <h1 className="text-3xl font-bold leading-snug text-white xl:text-5xl">
              Full-Stack <br />& DevOps Engineer
            </h1>
            <p className="mt-3 text-lg text-gray-300 xl:text-xl">
              Hi, I'm Livingston. A passionate Full-Stack Developer & DevOps
              Engineer <br />
              Tackles problems, innovates solutions ✨
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-12 max-w-4xl text-center xl:text-left">
          <h2 className="text-3xl font-semibold text-accentColor xl:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400 xl:text-xl">
            I am a <strong>Full-Stack Developer & DevOps Engineer</strong> with expertise in
            <strong> building scalable web applications and automating deployments</strong>.
            Skilled in <strong>React, Node.js, Express, MongoDB, Docker, Kubernetes, 
            Terraform, CI/CD pipelines, and AWS</strong>, I specialize in delivering 
            <strong>efficient and optimized solutions</strong>.
            <br />
            <br />
            Beyond coding, I excel in <strong>team collaboration, project management, 
            and communication</strong>, ensuring smooth workflows and successful 
            project execution. Passionate about <strong>innovation and automation</strong>, I
            strive to contribute impactful solutions while continuously
            advancing in technology.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h3 className="text-center text-2xl font-semibold text-accentColor underline underline-offset-4 xl:text-3xl">
            Tech Stack
          </h3>

          {/* Icons Grid (Centered Properly) */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {techStack.map((item, i) => (
              <img
                key={i}
                src={item}
                alt="tech-stack"
                className="h-16 w-16 rounded-full bg-gray-800 p-3 shadow-lg transition-all hover:scale-110 hover:shadow-xl"
              />
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-12 text-center">
          <a
            href="Rohith_Syam_Livingston_D.pdf" // Adjust the path if needed
            download="Resume.pdf"
            className="inline-block px-6 py-3 text-white bg-accentColor rounded-lg shadow-lg hover:bg-accentColorDark transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default About;
