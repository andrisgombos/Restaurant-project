export const deleteSelfAction = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');
        const config = {
            method: "DELETE",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`
            })
        }
        
        fetch("https://luna-taurus.propulsion-learn.ch/backend/user/delete/", config)
        .then(res => res.json())
        .then(data => {
            // console.log('data:', data);
            const action = {
                type: 'DELETE_USER',
                payload: data
            }
            dispatch(action)
        })
    }
}
