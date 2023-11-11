function experiencePage() {
  return (
    <div className="content-center animate-fade-down animate-once animate-ease-out animate-normal w-2/3 mb-5 bg-gray-900 bg-opacity-75 mb-40">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-white dark:text-white">
            July 2016
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Enrolled in City University of Hong Kong
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
            Major in <b>Computer Science</b>, City University is ranked among
            the top 100 universities in the world.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
            July 2018
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Full time one year intership in Smartone Telecommunication Limited
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-white">
            SmarTone is a leading telecommunications company in Hong Kong and
            Macau, providing voice, multimedia and mobile broadband services, as
            well as fixed fibre broadband services for the consumer and
            corporate markets. <br />
            <br />
            Major Duties: Designed and coded unit/integration testing code
            change of TypeScript application with React, NodeJS and MongoDB.
            Prepare test reports for senior developers' review, a pivotal step
            in maintaining code integrity and elevating project outcomes.
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
            July 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Gradurate from the University with a Bacherlor Degree of Computer
            Science
          </h3>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
            October 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Junior Programmer in Hospital Authority
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
            The Hospital Authority (HA) is a statutory body responsible for
            overseeing the public healthcare system of Hong Kong's public
            hospitals services
            <br />
            <br />
            <ul>
              <li>
                Empowering applications with Java 8 in Linux machines to drive
                enhancements such as adding new functions for users to register
                records in the database and update configs in the application.
              </li>
              <li>
                Utilized SQL queries in Oracle SQL database to collect
                application logs and imported data into Excel Pivot table for
                daily stand-up meetings.
              </li>
              <li>
                Performed unit tests with JUnit and prepared testing reports for
                management review to ensure that every code modification
              </li>
            </ul>
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:text-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
            December 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Promoted to Programmer role in Hospital Authority
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
            <ul>
              <li>
                Led a team of junior developers to develop cloud applications
                with Java 11, Spring Boot, Maven, docker, Helm, JSON-based APIs,
                Oracle DB, and Red Hat OpenShift cloud-based platform. These
                RESTful applications will establish connections to the Oracle
                database using the JDBC API and subsequently deliver JSON
                results within the OpenShift cloud environment. These
                applications are primarily for internal use, providing password
                control services and registering clinic provider information in
                the database.
              </li>
            </ul>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default experiencePage;
