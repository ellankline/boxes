import React, {useState} from 'react';

const BoxForm = ({setNewBox, newBox}) => {
    const [newColor, setNewColor] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        setNewBox({
            ...newBox,
            colors: [...newBox.colors, newColor],
        });
        setNewColor('');
    };

    return (
        <div>
            <form>
                <label>Color</label>
                <input
                    onChange={(e) => setNewColor(e.target.value)}
                    type='text'
                    value={newColor}
                />
                <button onClick={submitForm}>Add</button>
            </form>
        </div>
    );
};

export default BoxForm;