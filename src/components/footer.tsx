import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-900 fixed inset-x-0 bottom-0">
      <div className="max-w-screen-xl flex flex-nonwrap items-center justify-between mx-auto p-4">
        <a
          href="mailto:tom.y.y.hong@gmail.com"
          className="right-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2xl"></FontAwesomeIcon>
        </a>
        <a
          href="https://github.com/TomYYHong"
          className="right-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/yuk-yu-hong-b43665158/"
          className="right-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
        <a
          href="https://drive.google.com/file/d/13azOVChxzY6jz8NntS2VNHkhWt5vRGf9/view"
          className="right-contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FontAwesomeIcon icon={faFilePdf} size="2xl" />
        </a>
      </div>
    </footer>
  );
}
