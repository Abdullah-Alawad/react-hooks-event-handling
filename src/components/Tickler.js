import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick ={() => tickle("Wahoo")}>Tickle me!</button>;
}

export default Tickler;
