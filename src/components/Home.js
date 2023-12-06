import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../style/component.module.css";
export default function Home() {
  const route = useParams();
  const navigate = useNavigate();
  let currentUser = localStorage.getItem("currentUser");
  let currentUserObject = JSON.parse(currentUser);
  let currentName = currentUserObject.name;
  return (
    <div className={style.home} >
        <h1 className={style.welcome} >Welcome {currentName} !</h1>
        <h3 className={style.p}>Here you can see all the information you have on the server.</h3>
      <h3 className={style.p}>Information can be deleted and information can be uploaded.</h3>
      <div
        className={style.links}
        onClick={() => {
            navigate(`/todos/${route.id}`);
        }}
        >
        Todos
      </div>
      <div
        className={style.links}
        onClick={() => {
          navigate(`/albums/${route.id}`);
        }}
      >
        Albums
      </div>

      <div
        className={style.links}
        onClick={() => {
          navigate(`/posts/${route.id}`);
        }}
      >
        Posts
      </div>
    </div>
  );
}
