const PersonCard = ({ name, age, job, location }) => {
  return (
    <article className="border border-gray-200 rounded-xl flex flex-col cursor-pointer hover:-translate-y-0.5 transition-[colors_transform] bg-gray-100/70 overflow-hidden">
      <div className="space-y-0.5 p-3 border-b rounded-b-xl bg-white border-gray-300">
        <h3 className="md:text-xl font-semibold">{name}</h3>
        <h4 className="text-sm text-gray-400">{job}</h4>
      </div>
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="px-1.5 py-0.5 rounded-md text-xs bg-blue-100 w-fit flex gap-1 items-center border border-blue-200/50 text-blue-800">
          Location:
          <span className="font-semibold">{location}</span>
        </div>
        <div className="px-1.5 py-0.5 rounded-md text-xs bg-teal-100 w-fit flex gap-1 items-center border border-teal-200/50 text-teal-800">
          Age: <span className="font-semibold">{age}</span>
        </div>
      </div>
    </article>
  );
};

export default PersonCard;
