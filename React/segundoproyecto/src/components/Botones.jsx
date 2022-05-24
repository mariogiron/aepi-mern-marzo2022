const Botones = () => {

    const manejarClick = (pNum) => {
        console.log('Se ha pulsado el botón ' + pNum);
    }

    const manejarClick2 = (event) => {
        console.log(event.target.innerText);
    }

    return <>
        <button onClick={() => manejarClick(1)}>Botón 1</button>
        <button onClick={() => manejarClick(2)}>Botón 2</button>
        <button onClick={() => manejarClick(3)}>Botón 3</button>

        <button onClick={manejarClick2}>Botón 1</button>
        <button onClick={manejarClick2}>Botón 2</button>
        <button onClick={manejarClick2}>Botón 3</button>
    </>;
}

export default Botones;