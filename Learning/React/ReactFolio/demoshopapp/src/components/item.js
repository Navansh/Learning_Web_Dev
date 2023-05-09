import './Item.css'

function Item(props){
    const itemName = props.name;
    return(
        <div>
            <p className="nirma">{itemName}</p>
            {props.children}
            {/* this will print that additional text between the tag */}
        </div>
        
        
    );
}

export default Item;