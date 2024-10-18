import React from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

const ToDoForm = (event) => {

  

  const [tarefa, setTarefa] = React.useState('')
  const [descricao, setDescricao]= React.useState('')
  const [messagem, setMensagem]= React.useState(null)

  const handleSubmit  = ()=>{
    event.preventDefault()
   try {
    axios.post("http://localhost:3333/tarefas",{
    tarefa, 
    descricao,})
    setTarefa("")
    setDescricao("")
    setMensagem("Sua tarefa doi criada com sucesso")
   } catch {
    setMensagem('Não foi possível salvar sua mensgaem')
   }
  } 
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="tarefa">
        <Form.Label>Tarefa</Form.Label>
        <Form.Control type="text" placeholder="Digite o titulo da sua tarefa..." 
        value={tarefa}
        onChange={(e)=>setTarefa(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="Descrição">
        <Form.Label>Descricao</Form.Label>
        <Form.Control as="textarea" rows={3}
        value={descricao}
        onChange={(e)=>setDescricao(e.target.value)} />
      </Form.Group>
      <Button type="submit">+</Button>
      {messagem && <p>{messagem}</p>}
    </Form>
  )
}

export default ToDoForm;