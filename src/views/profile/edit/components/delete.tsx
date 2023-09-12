import '../../edit/components/delete.scss';
const Delete = () => {
    return (
        <>
            <section className="delete">
                <h5>Are You Sure you want to delete
                    existing account</h5>
                <div className="delete-button">
                    <div>
                        <button className="yes">Yes</button>
                    </div>
                    <div>
                        <button className="no">No</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Delete;