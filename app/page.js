
export default function Home() {

  fetch(`https://api.api-ninjas.com/v1/cars?model=toyota`, {
    method: 'GET',
    headers: {
      'X-Api-Key':'process.env.CAR_API_KEY'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Request failed:', error);
  });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Hello this is next js car show project</h1>
    </main>
  )
}
