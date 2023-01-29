import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"


const Table = styled.table`
    width: 1500px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 20px auto;
    
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
    padding-top: 15px;
    
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};    
    width: ${(props) => (props.width ? props.width : "auto")}
`;



const Grid = ({ cursos, setCursos, setOnEdit }) => {

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8000/" + id)
            .then(({data}) => {
                const newArray = cursos.filter((cursos) => cursos.id !== id);

                setCursos(newArray);
                
                toast.success(data);
            });
        };
    
    const handleEdit = (item) => {
        setOnEdit(item);
    }
    
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Curso</Th>
                    <Th>Professor</Th>
                    <Th>Categoria</Th>
                    <Th>Descrição</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                    {cursos.map((item, i) => (
                        <Tr key={i}>
                            <Td>{item.nome}</Td>
                            <Td>{item.professor}</Td>
                            <Td>{item.categoria}</Td>
                            <Td>{item.descricao}</Td>
                            <Td alignCenter width="5%">
                                <FaEdit onClick={()=>handleEdit(item)}/>
                            </Td>
                            <Td alignCenter width="5%">
                                <FaTrash onClick={()=>handleDelete(item.id)}/>
                            </Td>
                        </Tr>))}
                </Tbody>    
        </Table>
    );
};

export default Grid;