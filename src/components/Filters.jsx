import { useState, useEffect } from "react"

const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="">Filter Fields</label>
                    <select
                        name=""
                        id=""
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">-- Select -- </option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="healt">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filters