import { db } from "../db.js"

export const getCursos = (_, res)=>{
    
    const q = "SELECT * FROM tab_cursos"
    
    db.query(q, (err, data) => {

        if(err) return res.json(err);

        return res.status(200).json(data);

    })

}

export const addCurso = (req, res) => {
    const q = "INSERT INTO tab_cursos(`nome`, `professor`, `categoria`, `descricao`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.professor,
        req.body.categoria,
        req.body.descricao,
    ];

    db.query(q, [values], (err)=>{
        if(err) return res.json(err)

        return res.status(200).json("Curso criado com sucesso");
    });
};

export const updateCurso = (req, res) => {
    const q = "UPDATE tab_cursos SET `nome` = ?, `professor` = ?, `categoria` = ?, `descricao` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.professor,
        req.body.categoria,
        req.body.descricao,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Curso atualizado com sucesso");
    });
};

export const deleteCurso = (req, res) => {
    const q = "DELETE FROM tab_cursos WHERE `id_usuario` = ?"

    db.query(q, [req.params.id], (err)=>{
        if (err) return res.json();

        return res.status(200).json("Curso removido com sucesso");
    });
};

