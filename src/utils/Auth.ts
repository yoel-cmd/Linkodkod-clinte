//---------------------------------------------imports----------------------------------------------
import { insertTokenToLS } from "./LocalStoreg";

//---------------------------------------------start function--------------------------------------------
export async function Login(body: any) {
  console.log("body", body);    

  try {
    const res = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    console.log("data:", data);

    if (data.ok) {
      insertTokenToLS("auth", JSON.stringify({
         username: body.username,
        password:body.password
      }));
      console.log("Saved locally");
      return true;
    }

    return false;
  } catch (err) {
    console.error("err:", err);
    throw err;
  }
}
