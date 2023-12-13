import { useState, useEffect } from "react";

const BACKEND_HOST =
  import.meta.env.VITE_BACKEND_HOST || "http://localhost:8080";

const fetchImages = async () => {
  try {
    const response = await fetch(`${BACKEND_HOST}/imagen/list`);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("imagen", file);

    await fetch(`${BACKEND_HOST}/imagen/upload`, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.info(error);
  }
};

const App = () => {
  const [file, setFile] = useState(null);
  const [path, setPath] = useState("");
  const [images, setImages] = useState([]);

  const getImages = async () => {
    setImages(await fetchImages());
  };

  const handleChange = (event) => {
    setPath(event.target.value);
    const file = event.target.files[0];
    if (!file) return;
    setFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    await uploadImage(file);
    getImages();

    setFile(null);
    setPath("");
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <main>
      <h1>Gestión de imágenes</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="imagen">Imagen</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          accept="image/*"
          required
          onChange={handleChange}
          value={path}
        />

        <button type="submit">Subir imagen</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image) => (
            <tr key={image.id}>
              <td>{image.name}</td>
              <td>
                <a href={image.imagenUrl} target="_blank" rel="noreferrer">
                  {image.imagenUrl}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default App;
