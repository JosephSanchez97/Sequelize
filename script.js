async function dininghalls(){
  const request = await fetch("/api/dining");
  const data = await request.json();
}
window.onload = dininghalls;