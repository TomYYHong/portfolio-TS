import React from "react";
import Java from "../assets/javaIcon.png";
import SpringBoot from "../assets/Spring_Boot_icon.png";
import JS from "../assets/JS.png";
import TS from "../assets/TS.png";
import react from "../assets/react.svg";
import Mongo from "../assets/Mongodb.png";
import helm from "../assets/helm.png";
import docker from "../assets/docker.png";
import sql from "../assets/mysql.png";
import Kubernetes from "../assets/k8s.png";

export default function TechStack() {
  return (
    <div className="flex gap-2 flex-wrap items-center w-4/6">
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Java</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">SpringBoot</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-yellow-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">TypeScript</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">React</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Node/NestJS</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">SQL</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">MongoDB</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Docker</div>
      </div>
      <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-orange-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
        <div className="mt-px">Firebase</div>
      </div>
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
