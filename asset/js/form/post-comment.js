export let postComment = () => {
    let nameHTML = document.getElementById("name");
    let textHTML = document.getElementById("text");
    let fecha = new Date();
  
    fetch("https://sheetdb.io/api/v1/hpvixdzd27yt5", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            name: nameHTML.value,
            text: textHTML.value,
            date: fecha.toLocaleDateString(),
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => location.reload())
      .catch((error) => console.log(error));
  };