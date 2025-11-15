const sheetId = "1iEQOVuIDmJc25EsXwYoXX35PrPuZpYzXXuS9X_bt2no"; // Copiar de la URL de la hoja
const sheetName = "precios"; // Cambiar si tiene otro nombre
const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;

const menuContainer = document.getElementById("menu");

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Agrupar productos por categoría
    const categorias = {};

    data.forEach(item => {
      const categoria = item["Categoría"];
      if (!categorias[categoria]) categorias[categoria] = [];
      categorias[categoria].push(item);
    });

    menuContainer.innerHTML = "";

    for (const categoria in categorias) {
      const section = document.createElement("section");
      section.classList.add("menu-section");

      const h2 = document.createElement("h2");
      h2.textContent = categoria;
      section.appendChild(h2);

      const ul = document.createElement("ul");
      categorias[categoria].forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.Producto} - $${producto.Precio}`;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      menuContainer.appendChild(section);
    }
  })
  .catch(error => {
    menuContainer.innerHTML = "<p>Error al cargar el menú. Intente más tarde.</p>";
    console.error("Error cargando los datos:", error);
  });
