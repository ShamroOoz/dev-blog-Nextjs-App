import Post from "./Post";

export default function SearchResults({ results }) {
  if (results.length === 0) return <></>;

  return (
    <div className="absolute z-10 w-full text-black bg-white border-4 border-gray-500 filter brightness-75 right-80 top-64 backdrop-blur-md md:w-6/12 rounded-2xl">
      <div className="p-10">
        <h2 className="mb-3 text-3xl">{results.length} Results</h2>
        {results.map((result, index) => (
          <Post key={index} post={result} compact={true} />
        ))}
      </div>
    </div>
  );
}
