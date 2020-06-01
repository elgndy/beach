import React from 'react'
import Title from './Title';
const FillterRoom = () => {
    return (
        <div>
            <Title title="Search Room" />

            <section className="filter_control">
                <form> 
                    <label htmlFor="">Room Type</label>
                    <select>
                        <option value="All">All</option>
                        <option value="single">single</option>
                        <option value="Double">Double</option>
                        <option value="delux">delux</option>    
                    </select> 
                </form>

                <form> 
                    <label htmlFor="">Guests </label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="5">5</option>
                        <option value="10">10</option>    
                    </select> 
                </form>

                <form> 
                    <label htmlFor="">Room Price $600</label>
                    <input type="range" className="rang" />  
                </form>

                
            </section>
        </div>
    )
}

export default FillterRoom