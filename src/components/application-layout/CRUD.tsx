import { useNavigate } from "react-router";

export default function CRUD() {
    const navigate = useNavigate();

  return(
  <>
    <button onClick={() => {navigate("/create-post")}}>create</button>
    <button onClick={() => {navigate("/")}}>read</button>

  </>
)}
