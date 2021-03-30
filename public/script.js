function windowActions() {
  diningHalls()
}

async function diningHalls() {
  const table = document.querySelector('.table-body')
  const request = await fetch('/api/dining')
  const halls = await request.json()
  console.log(halls)
  halls.data.forEach(place => {
    table.innerHTML += `<tr>
    <td>${place.hall_id}</td>
    <td>${place.hall_name}</td>
    <td>${place.hall_address}</td>
    </tr>`
  })
}
window.onload = windowActions();