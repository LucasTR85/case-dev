import GlobalStyle from "./styles/global.js"
import styled from "styled-components"
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import axios from "axios"


const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-itens: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {

  const [cursos, setCursos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

 

  const getCursos = async () => {
    try {
      const res = await axios.get("http://localhost:8000");
      setCursos(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() =>{
    getCursos();
  }, [setCursos]);

  return (
    <>
      <Container>
        <Title>Dashboard</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCursos={getCursos}/>
        <Grid setOnEdit={setOnEdit} cursos={cursos} setCursos={setCursos}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle/>
    </>
  );
}

export default App;
