import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: "John",
    email: "123@yahoo.com.tw",
    phone: "09XX-XXXXXX",
    isFavorite: "false",
  });

  let starImage = info.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleIsFavorite() {
    setInfo((prevInfo) => ({ ...prevInfo, isFavorite: !prevInfo.isFavorite }));
  }

  return (
    <main>
      <article className="card">
        <img src="../images/user.png" alt="user" className="card-image" />
        <div className="card-info">
          <img
            src={`../images/${starImage}`}
            alt="star"
            className="empty-star"
            onClick={toggleIsFavorite}
          />
          <h2 className="card-name">{info.name}</h2>
          <p className="card-contact">{info.email}</p>
          <p className="card-contact">{info.phone}</p>
        </div>
      </article>
    </main>
  );
}

export default App;
