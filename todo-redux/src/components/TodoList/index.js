import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/action";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import {
  searchTextSelector,
  todoListSelector,
  todosRemainingSelector,
} from "../../redux/selectors";
import todoSlice, { addNewTodo, addTodos } from "./reducerTodoSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPriority] = useState("Medium");

  const dispatch = useDispatch();

  const todoList = useSelector(todosRemainingSelector);

  const handleAddButtonClick = () => {
    // dispatch(
    //    addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: prioriry,
    //   })
    // );

    // dispatch(
    //   todoSlice.actions.addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: prioriry,
    //   })
    // );

    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: prioriry,
      })
    );

    // dispath một thunk action
    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: prioriry,
    //   })
    // );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo
            id={item.id}
            key={item.id}
            name={item.name}
            prioriry={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            onChange={handlePriorityChange}
            value={prioriry}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
