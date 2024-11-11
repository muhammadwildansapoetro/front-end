"use client";

import { ITeam } from "@/types/team";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TeamList() {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const data = await response.json();
      setTeams(data.results);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mt-24 lg:mt-64">
        <h1 className="font-semibold mb-5 text-2xl lg:text-4xl text-slate-800">
          Our Team
        </h1>
        <p className="text-center font-semibold mb-10 lg:mb-20 lg:mx-20 text-3xl lg:text-5xl text-slate-800">
          Meet the passionate team driving sustainable agriculture at{" "}
          <span className="text-color1 font-bold">FarmLink </span>
          Indonesia
        </p>

        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="flex flex-wrap justify-evenly gap-10 lg:mx-16">
            {teams.map((person, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={person.picture.large}
                  alt={`${person.name.first} ${person.name.last}`}
                  width={10000}
                  height={10000}
                  className="rounded-full lg:rounded-xl max-w-[200px] shadow-lg mb-3 lg:hover:scale-110 "
                />
                <p className="font-bold text-xl">{`${person.name.first} ${person.name.last}`}</p>
                <p className="text-lg">{person.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
