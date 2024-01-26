export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen gap-5">
      <a href="/parentSearch" className="btn btn-outline btn-primary">
        Parent Search
      </a>
      <a href="/breedingCalculator" className="btn btn-outline btn-accent">
        Breeding Calculator
      </a>
    </main>
  );
}
