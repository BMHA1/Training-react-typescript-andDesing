const url = `https://6f7smj4fdc.execute-api.us-east-1.amazonaws.com/default/techJobMission`


export const APIConsumer = {

    getAllUsers: async () => {
        console.log('getAllUsers');
        try {
            let result = await fetch(url, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' },
            })
            const users = await result.json();
            console.log(users);
            return users
        } catch (error) {

            console.log(error)
        }
    },

}



