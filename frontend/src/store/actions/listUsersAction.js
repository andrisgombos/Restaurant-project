export const listUsersAction = () => {
    return (dispatch) => {
        //const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                //"Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"

            })
        }
        
        fetch("https://luna-taurus.propulsion-learn.ch/backend/userprofiles/", config)
        .then(res => res.json())
        .then(data => {
            // console.log('data:', data);
            const action = {
                type: 'LIST_USERS',
                payload: data
            }
            dispatch(action)
        })
    }
}
