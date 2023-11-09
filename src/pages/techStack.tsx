export default function TechStack() {
  return (
    <div className="flex gap-2 flex-wrap items-center w-4/6 animate-jump-in animate-once animate-duration-500 animate-ease-in animate-normal">
      <JavaLogo />
      <SpringBootLogo />
      <TypeScriptLogo />
      <ReactLogo />
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-200 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">NodeJS</div>
      </div>
      <NestJSLogo />
      <SqlLogo />
      <MongoDBLogo />
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Docker</div>
      </div>
      <FirebaseLogo />
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-900 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">OpenShift</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-900 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Helms</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-orange-900 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Postman</div>
      </div>
    </div>
  );
}

export function JavaLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">Java</div>
    </div>
  );
}

export function SpringBootLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">SpringBoot</div>
    </div>
  );
}

export function TypeScriptLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-yellow-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">TypeScript</div>
    </div>
  );
}

export function ReactLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">ReactJS</div>
    </div>
  );
}

export function NestJSLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">NestJS</div>
    </div>
  );
}

export function SqlLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">SQL</div>
    </div>
  );
}

export function MongoDBLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">MongoDB</div>
    </div>
  );
}

export function FirebaseLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-orange-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">Firebase</div>
    </div>
  );
}

export function SwiftLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-orange-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">Swift</div>
    </div>
  );
}

export function TailwindCSSLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">TailwindCSS</div>
    </div>
  );
}

export function AxiosLogo() {
  return (
    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div className="mt-px">Axios</div>
    </div>
  );
}
