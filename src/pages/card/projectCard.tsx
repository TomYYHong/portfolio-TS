import { card } from "./card";

function projectCard(card: card) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate-fade-up animate-once animate-duration-500 animate-ease-in animate-normal">
      <a href="#">
        <img className="rounded-t-lg" src={card.imgUrl} alt="Card logo" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {card.description}
        </p>
        <div className="mb-5 mt-5 space-x-2">
          {card.badgeList.map((Badge, index) => (
            <Badge key={index} />
          ))}
        </div>
        <a
          href={card.gitHubUrl}
          target="_blank"
          className="mr-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Github
        </a>
        {card.liveUrl && (
          <a
            href={card.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default projectCard;
