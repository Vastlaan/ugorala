import {useState} from 'react'
import styled from 'styled-components'

export default function RowComponent({data}) {

    const [day, setDay] = useState(data.day)
    const [start, setStart] = useState(data.start)
    const [end, setEnd] = useState(data.end)

    return (
        <Row>
            <input type="text" name="day" id="day" value={day} readOnly/>
            <input type="text" name="start" id="start" value={start} onChange={e=>setStart(e.target.value)} />
            <input type="text" name="end" id="end" value={end} onChange={e=>setEnd(e.target.value)} />
        </Row>
    )
}
const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 10rem 10rem;
`