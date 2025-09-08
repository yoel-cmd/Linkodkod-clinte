export async function readAllPost() {
  try {
    const res = await fetch("http://localhost:3000/post" );   
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(" err:", err);
    return [];
  }
}
