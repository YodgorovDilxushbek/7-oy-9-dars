// Junior dasturchi uslubida interaktiv to-do list
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Tooltip, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ text: '', category: '' });
    const [error, setError] = useState('');

    const handleAddTodo = () => {
        if (!newTodo.text.trim()) {
            alert('Iltimos todoni toldiring');
            return;
        }
        if (!newTodo.category) {
            alert('Kategoriya tanlanmagan!');
            return;
        }
        const newItem = { id: Date.now(), ...newTodo };
        setTodos([...todos, newItem]);
        setNewTodo({ text: '', category: '' });
        setError('');
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>To-do List</Typography>

            <TextField
                label="To-do"
                variant="outlined"
                fullWidth
                value={newTodo.text}
                onChange={(e) => {
                    setNewTodo({ ...newTodo, text: e.target.value });
                    if (error) setError('');
                }}
                sx={{ mb: 2 }}
            />

            <Select
                value={newTodo.category}
                onChange={(e) => {
                    setNewTodo({ ...newTodo, category: e.target.value });
                    if (error) setError('');
                }}
                displayEmpty
                fullWidth
                sx={{ mb: 2 }}
            >
                <MenuItem value="" disabled>Kategoriya tanlang</MenuItem>
                <MenuItem value="Ish">Ish</MenuItem>
                <MenuItem value="Uy">Uy</MenuItem>
                <MenuItem value="O‘qish">O‘qish</MenuItem>
            </Select>

            {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}

            <Button variant="contained" onClick={handleAddTodo} fullWidth>
                Qo‘shish
            </Button>

            <Box sx={{ mt: 4 }}>
                {todos.map((todo) => (
                    <Box
                        key={todo.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 1,
                            border: '1px solid #ccc',
                            borderRadius: 1,
                            mb: 1,
                            ':hover': { backgroundColor: '#f9f9f9' },
                        }}
                    >
                        <Box>
                            <Typography variant="body1">{todo.text}</Typography>
                            <Typography variant="caption" color="text.secondary">{todo.category}</Typography>
                        </Box>
                        <Tooltip title="O‘chirish">
                            <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                                <DeleteIcon color="error" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TodoApp;
