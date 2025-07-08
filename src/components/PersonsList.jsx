import { UserRoundX } from "lucide-react";
import { useState } from "react";
import data from "../data/data.json";
import Dropdown from "./Dropdown";
import PersonCard from "./PersonCard";
import SearchInput from "./SearchInput";

const PersonsList = () => {
  // on utilise Set pour obtenir une liste de jobs sans doublons (plus efficace qu'un simple filter)
  const jobs = Array.from(new Set(data.map((person) => person.job)));

  const [selectedJob, setSelectedJob] = useState("");
  const [search, setSearch] = useState("");

  // ici, on filtre d'abord par job (si sélectionné), puis par nom
  const filteredData = data.filter((person) => {
    const matchesJob = selectedJob ? person.job === selectedJob : true;
    const matchesName = person.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesJob && matchesName;
  });

  return (
    <section>
      <div className="mb-6 flex md:flex-row flex-col gap-2 sm:max-w-1/2 *:flex-1">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
        <Dropdown
          label="Filter by job"
          options={jobs}
          value={selectedJob}
          onChange={setSelectedJob}
          placeholder="All jobs"
        />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {filteredData.length > 0 ? (
          // on affiche chaque personne sous forme de carte
          filteredData.map((person, idx) => (
            <PersonCard key={idx} {...person} />
          ))
        ) : (
          // état vide : on affiche une icone et un message "no results found"
          <div
            className={
              "group w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center col-span-full"
            }
          >
            <div className="relative isolate flex justify-center">
              <div className="relative z-10 grid size-12 place-items-center rounded-xl border border-dashed border-blue-200 bg-blue-50 p-2.5 text-blue-400 shadow-lg transition duration-500 group-hover:-translate-y-0.5 group-hover:duration-200">
                <UserRoundX strokeWidth={1.2} className="size-6" />
              </div>
            </div>
            <h2 className="mt-6 font-medium text-black/80">No results found</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonsList;
