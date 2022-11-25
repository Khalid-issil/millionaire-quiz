const Sidebar = ({rewards,currentreward}) => {
    return ( 
        <div className="side-bar">
            <ul>
                {rewards.map(r=>(
                <li key={r.id} className={`reward-item ${currentreward===r.id ? "active" : ""}`}>{r.amount}</li>
                ))}
            </ul>
        </div>
    );
}
export default Sidebar;