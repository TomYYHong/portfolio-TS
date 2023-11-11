import MentalHelper from "../assets/FYP1.png";
import charityFinder from "../assets/charityFinder.png";
import ChatMe from "../assets/ChatMe.png";
import {
  AxiosLogo,
  FirebaseLogo,
  ReactLogo,
  SwiftLogo,
  TailwindCSSLogo,
  TypeScriptLogo,
} from "./techStack";
import ProjectCard from "./card/projectCard";
import { card } from "./card/card";

function projectPage() {
  const List: card[] = [
    {
      imgUrl: ChatMe,
      title: "Chat Me",
      description:
        "A live chat room application that implements Google Firebase authentication so users need to be logged in to their Google account to chat with other users!",
      badgeList: [ReactLogo, TypeScriptLogo, TailwindCSSLogo, FirebaseLogo],
      gitHubUrl: "https://github.com/TomYYHong/ChatMe/tree/main",
      liveUrl: "https://main--chatme-tomhong.netlify.app/",
    },
    {
      imgUrl: charityFinder,
      title: "Charity Finder",
      description: "A website help you to find the charity you interested in!",
      badgeList: [ReactLogo, TypeScriptLogo, TailwindCSSLogo, AxiosLogo],
      gitHubUrl: "https://github.com/TomYYHong/charity-finder/tree/main",
      liveUrl: "https://charity-finder-tomhong.netlify.app/",
    },
    {
      imgUrl: MentalHelper,
      title: "Mental Helper",
      description:
        "An application designed to let users record their daily emotions and analyze their mood changes, provide users with a calendar to view their records and resources for users to seek help.",
      badgeList: [SwiftLogo, FirebaseLogo],
      gitHubUrl:
        "https://github.com/TomYYHong/Swift-Firebase--Final-year-project",
    },
  ];

  return (
    <div className="flex flex-row  space-x-4 mb-20">
      {List.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
}

export default projectPage;
