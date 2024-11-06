"use client";

import { ITeam } from "@/types/team";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TeamList() {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
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
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="flex flex-col lg:flex-wrap lg:flex-row justify-center items-center gap-10">
          {teams.map((person, index) => (
            <li key={index} className="text-center">
              <Image
                src={person.picture.large}
                alt={`${person.name.first} ${person.name.last}`}
                width={10000}
                height={10000}
                className="mx-auto rounded-full max-w-[250px] mb-3"
              />
              <p className="font-bold lg:text-lg">{`${person.name.first} ${person.name.last}`}</p>
              <p>{person.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
