let friends = [{ id: 0, name: 'Sean', food: 'Tacos' },
{ id: 1, name: 'Sam', food: 'Pizza' },
{ id: 2, name: 'Stephanie', food: 'Oysters' }]

let id = 3


module.exports = {
    friendGetter: (req, res) => {
        res.status(200).send(friends)
    },
    friendAdder: (req, res) => {
        friends.push({
            id: id,
            name: req.body.name,
            food: req.body.food
        })
        id++
        res.status(200).send(friends)
    },
    friendDeleter: (req, res) => {
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].id === +req.params.id) {
                friends.splice(i, 1)
            }
        }
        res.status(200).send(friends)
    },
// // friendUpdater: (req, res) => {
// //     const friendIndex = friends.findIndex(friend => friend.id == +req.params.id);

// //     friends[friendIndex] = {
// //         id: friends[friendIndex].id,
// //         name: req.body.name || friends[friendIndex].name,
// //         food: friends[friendIndex].food
// //     };
// //     res.status(200).send(friends)
// }
}