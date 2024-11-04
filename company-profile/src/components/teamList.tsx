"use client";

import { ITeam } from "@/types/team";
import { useEffect, useState } from "react";

export default function TeamList() {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
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
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold mb-10 text-2xl lg:text-4xl">Our Team</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="flex flex-col lg:flex-row gap-10">
          {teams.map((person, index) => (
            <li key={index} className="text-center">
              <img
                src={person.picture.large}
                alt={`${person.name.first} ${person.name.last}`}
                className="mx-auto rounded-full"
              />
              <p className="font-bold">{`${person.name.first} ${person.name.last}`}</p>
              <p>{person.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
