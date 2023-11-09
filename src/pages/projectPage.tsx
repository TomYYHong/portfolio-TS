import MentalHelper from "../assets/FYP1.png";
import { FirebaseLogo, SwiftLogo } from "./techStack";
import ProjectCard from "./card/projectCard";
import { card } from "./card/card";

function projectPage() {
  const List: card[] = [
    {
      imgUrl: MentalHelper,
      title: "Mental Helper",
      description:
        "A Swift 4 app with Firebase designed to let users record their daily emotions and analyze their mood changes, provide users with a calendar to view their records and resources for users to seek help.",
      badgeList: [SwiftLogo, FirebaseLogo],
      gitHubUrl:
        "https://github.com/TomYYHong/Swift-Firebase--Final-year-project",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      {List.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
}

export default projectPage;
