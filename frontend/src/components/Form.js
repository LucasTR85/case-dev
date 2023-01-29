import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import axios from "axios"
import { toast } from "react-toastify"

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    box-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;    
`;

const Input = styled.input`
    width: 200px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Label = styled.label``;

const Form = ({getCursos, onEdit, setOnEdit}) =>{
    const ref = useRef();

    useEffect(()=>{
        if(onEdit) {
            const curso = ref.current;

            curso.nome.value = onEdit.nome;
            curso.professor.value = onEdit.professor;
            curso.categoria.value = onEdit.categoria;
            curso.descricao.value = onEdit.descricao;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const curso = ref.current;

        if(!curso.nome.value || !curso.professor.value || !curso.categoria.value || !curso.descricao.value){
            return toast.warn("Preencha todos os campos");
        }

        if(onEdit){
            await axios
            .put("http://localhost:8000/" + onEdit.id, {
                nome: curso.nome.value,
                professor: curso.professor.value,
                categoria: curso.categoria.value,
                descricao: curso.descricao.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        }
        else{
            await axios
            .post("http://localhost:8000", {
                nome: curso.nome.value,
                professor: curso.professor.value,
                categoria: curso.categoria.value,
                descricao: curso.descricao.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));
        };

        curso.nome.value=""
        curso.professor.value=""
        curso.categoria.value=""
        curso.descricao.value=""

        setOnEdit(null);
        getCursos();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Curso</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>Professor</Label>
                <Input name="professor"/>
            </InputArea>
            <InputArea>
                <Label>Categoria</Label>
                <Input name="categoria"/>
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="descricao"/>
            </InputArea>
            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;