import './Tours.css';
import Card from './Card'

function Tours({tours, removeTour}){
    return( 
        <div className='container'>
            <div>
                <h2 className='title'>TourIT</h2>
            </div>
            <div className='cards'>
            {
                tours.map((tour) =>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    //...tour se poore ke poore object ki copy pass ho gyi
                })
            } 
            </div>

        </div>
    );

}

export default Tours;