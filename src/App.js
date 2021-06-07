import cities from './by-cities.json';

import Table from './Table';

const normalized = cities[0].regions.reduce((result, current) => {
  const row = current.cities.map((city) => {
    return { name: city.name, region: current.name };
  });

  return [...result, ...row];
}, []);

function App() {
  return <Table data={normalized} />;
}

export default App;
