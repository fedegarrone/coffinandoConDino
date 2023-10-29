export function printer(data) {
    let items = "";
    data.forEach((comentario) => {
      let template = `
        <section class="comentario">
          <h3>${comentario.name} :</h3>
          <p>${comentario.text}</p>
          <h5>Fecha: ${comentario.date}</h5>
          <hr>
        </section>
      `;
      items = template + items;
    });
    return items;
  }