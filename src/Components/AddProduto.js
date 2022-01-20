import { Form, Button, Table, Modal } from "react-bootstrap";
import { useState } from 'react';
import './style.css'

export default function AdicionarProduto(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let initialvalue = [];
    const [livros, setLivros] = useState(initialvalue);

    const add =(event)=>{
        event.preventDefault();
        // console.log(event.target.livro_name.value); ver se tava salvando o nome do livro
        const formData = event.target;
        const novoLivro ={
            livro_name: formData.livro_name.value,
            livro_autor: formData.livro_autor.value,
            livro_ano: formData.livro_ano.value,
            livro_nota: formData.livro_nota.value
        }
        // console.log(novoLivro); verificar se as informações foram salvar
        //adicionar um novo livro
        setLivros([...livros, novoLivro]);
        // console.log(livros);
    }

    //excluir um livro
    function removerLivro(name){
        const novoLivro=  livros.filter(item => item.livro_name !== name);
          setLivros(novoLivro);
      }


    return(
        <div> 
        <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

            <Modal.Header closeButton>
                <Modal.Title className="titulo_modal"> Lista de livros lidos em 2022 </Modal.Title>
            </Modal.Header>

        <Modal.Body>   
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th className="quadro_titulo">Numero</th>
                        <th className="quadro_titulo">Nome do livro:</th>
                        <th className="quadro_titulo">Autor do livro:</th>
                        <th className="quadro_titulo">Ano de edição:</th>
                        <th className="quadro_titulo">Nota do livro:</th>
                        <th className="quadro_remover">Deseja remover?</th>
                        </tr>
                    </thead>
                    <tbody>   
                    {
                        livros.map((item, index)=>{
                        return(
                            <tr key={index}> 
                                <td className="quadro_conteudo">{index}</td>
                                <td className="quadro_conteudo">{item.livro_name}</td>
                                <td className="quadro_conteudo">{item.livro_autor}</td>
                                <td className="quadro_conteudo">{item.livro_ano}</td>
                                <td className="quadro_conteudo">{item.livro_nota}</td>
                                <button onClick={() => removerLivro(item.livro_name)} className="button_remover"> Remover </button>

                            </tr>
                        )
                        })
                    }
                    </tbody>
            </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="button_fechar">
            Fechar
          </Button>
        </Modal.Footer>
        </Modal>
    
        <Form onSubmit={add}>
                <Form.Group className="mb-3" controlId="formBasicLivroName">
                    <Form.Label>Nome do livro</Form.Label>
                    <Form.Control type="text" placeholder="Escreva o nome do livro" name="livro_name" className="campoDigitar" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLivroAutor">
                    <Form.Label>Autor(a) do livro </Form.Label>
                    <Form.Control type="text" placeholder="Escreva o nome do autor(a) do livro" name="livro_autor" className="campoDigitar" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLivroAno">
                    <Form.Label>Ano de edição do livro </Form.Label>
                    <Form.Control type="text" placeholder="Escreva o ano da edição do livro" name="livro_ano" className="campoDigitar" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLivroNota">
                    <Form.Label>Nota do Livro </Form.Label>
                    <Form.Control type="number" placeholder="Nota do livro" name="livro_nota" className="campoDigitar" />
                </Form.Group>

                <Button variant="primary" type="submit" className="button_adicionar">
                    Adicionar livro
                </Button>
                <Button variant="primary" onClick={handleShow} className="button_lista">
                    Ver lista de livros
                </Button>
        </Form>
        </div>
    )
}