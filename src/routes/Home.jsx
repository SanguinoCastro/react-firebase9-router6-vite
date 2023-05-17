import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

import Title from "../components/Title";
import Button from "../components/Button";

const Home = () => {
  const { data, error, loading, getData, addData, deleteData, updateData } =
    useFirestore();
  const [text, setText] = useState("");
  const [newOriginID, setNewOriginID] = useState();

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  if (loading.getData) return <p>Loading data getData...</p>;
  if (error) return <p>{error}</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newOriginID) {
      await updateData(newOriginID, text);
      setNewOriginID("");
      setText("");
      return;
    }

    await addData(text);
    setText("");
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
  };

  const handleClickEdit = async (item) => {
    console.log("Click Editar");
    setText(item.origin);
    setNewOriginID(item.nanoid);
  };

  return (
    <>
      <Title text='Home' />

      <form onSubmit={handleSubmit}>
        <input
          placeholder='ex: http://google.com'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {newOriginID ? (
          <Button
            type='submit'
            text='Edita la URL'
            lText='Editando...'
            color='yellow'
            loading={loading.updateData}
          />
        ) : (
          <Button type='submit' text='Añadir URL' loading={loading.addData} />
        )}
      </form>

      {data.map((item) => (
        <div key={item.nanoid}>
          <p>{item.nanoid}</p>
          <p>{item.origin}</p>
          <p>{item.uid}</p>
          <Button
            type='button'
            text='Eliminar'
            lText='Eliminando...'
            color='red'
            loading={loading[item.nanoid]}
            onClick={() => handleClickDelete(item.nanoid)}
          />
          <Button
            type='button'
            text='Editar'
            lText='Eliminando...'
            color='yellow'
            onClick={() => handleClickEdit(item)}
          />
        </div>
      ))}
    </>
  );
};

export default Home;
