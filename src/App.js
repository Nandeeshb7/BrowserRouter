import "./App.css";
import { useState, useEffect } from "react";

import { NavLink, Outlet } from "react-router-dom";
function HomePage() {
  const [userNames, setUserNames] = useState(null);
  const [postData, setPostData] = useState(null);
  const [date, setDate] = useState(new Date().toString());

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    // fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setPostData(formJson);
  };

  useEffect(() => {
    fetch("http://localhost:3000/users")
      ?.then((res) => {
        return res?.json();
      })
      ?.then((data) => {
        console.log("This is form localhost", data);
        setUserNames(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postData]);

  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [postData]);

  useEffect(() => {
    const timeid = setInterval(() => {
      setDate(new Date().toString());
    }, 1000);
  }, []);

  return (
    <div>
      Date:{date}
      <div className="App">
        fetching data
        {userNames?.map((names) => {
          return (
            <div className="NavLink">
              <button>
                {" "}
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/productspage/${names.id}`}
                  key={names?.id}
                >
                  {names?.name}
                </NavLink>
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
              id: <input type="number" name="id" />
            </label>
            <label>
              name: <input type="text" name="name" />
            </label>
            <label>
              email: <input type="email" name="email" />
            </label>
            <label>
              number:
              <input type="number" name="number" />
            </label>
          </div>

          <button type="reset">Reset edits</button>
          <button type="submit">Save post</button>
        </form>
      </div>
      {/* {postData} */}
      <Outlet />
    </div>
  );
}

export default HomePage;
