import { useState } from 'react'

function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [status, setStatus] = useState('To Do')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alert('Please add a task')
            return
        }
        if (!day) {
            alert('Please add a Day & Time')
            return
        }

        onAdd({ text, day, status, reminder })

        setText('')
        setDay('')
        setStatus('To Do')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>

        <div className='form-control'>
            <label htmlFor='status'>Status</label>
            <select id='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value='To Do'>TO DO</option>
                <option value='In Progress'>IN PROGRESS</option>
                <option value='Done'>DONE</option>
            </select>
        </div>

        <div className='form-control form-control-check'>
            <label htmlFor='reminder'>Set Reminder</label>
            <input id='reminder' type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask